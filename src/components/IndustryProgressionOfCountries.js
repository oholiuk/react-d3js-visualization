import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';

import GoogleSheetsContext from '../contexts/GoogleSheetsContext';

function IndustryProgressionOfCountries() {
  const vizData = useContext(GoogleSheetsContext);

  useEffect(() => {
    // SETUP
    let svg = d3.select('svg'),
      margin = {
        top: 50,
        right: 20,
        bottom: 20,
        left: 60
      },
      width,
      height,
      disabled = [],
      x = d3.scaleTime(),
      y = d3.scaleLinear(),
      color,
      line = d3
        .line()
        .curve(d3.curveMonotoneX)
        .x(d => x(d.year))
        .y(d => y(d.value)),
      bisectYear = d3.bisector(d => d.year).left,
      focus,
      keys,
      rawData = undefined,
      data = [];

    let g = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    g.append('g').attr('class', 'axis axis--x tick--small');
    g.append('g').attr('class', 'axis axis--y');

    const parseRank = number => {
      const suffix = [
        'th',
        'st',
        'nd',
        'rd',
        'th',
        'th',
        'th',
        'th',
        'th',
        'th'
      ];
      if (number === 0) return '';

      return number + suffix[number % 10];
    };

    // DRAW CHART
    function draw() {
      let bounds = svg.node().getBoundingClientRect();
      width = bounds.width - margin.left - margin.right;
      height = bounds.height - margin.top - margin.bottom;

      x.rangeRound([0, width]);
      y.rangeRound([0, height]);

      g.select('.axis--x')
        .attr('transform', 'translate(0,0)')
        .call(d3.axisTop(x).tickFormat(d3.format('d')).tickSizeInner(5))
        .selectAll('text')
        .attr('transform', 'translate(0,0)')
        .style('text-anchor', 'middle');

      g.select('.axis--y')
        .call(
          d3
            .axisLeft(y)
            .ticks(5)
            .tickFormat(d => parseRank(d))
            .tickSizeInner([-width])
        )
        .selectAll('text')
        .attr('dx', '-5');

      // X AXIS LABEL
      g.select('.x-axis-label').remove();
      g.append('text')
        .attr('y', -35)
        .attr('x', width / 2)
        .attr('class', 'x-axis-label')
        .text('Year');

      // Y AXIS LABEL
      g.select('.y-axis-label').remove();
      g.append('text')
        .attr('y', 0 - 45)
        .attr('x', 0 - height / 2)
        .attr('class', 'y-axis-label')
        .text('RANKING');

      let chart = g.selectAll('.multi-line').data(data);

      g.selectAll('.lines').remove();

      chart
        .enter()
        .append('path')
        .attr('class', 'lines')
        .attr('fill', 'none')
        .attr('stroke', d => color(d.country))
        .attr('stroke-width', 4)
        .attr('d', d => line(d.values));

      focus = g.append('g').attr('class', 'focus').style('display', 'none');

      g.append('rect')
        .attr('class', 'overlay')
        .attr('x', 0)
        .attr('width', width + 20)
        .attr('height', height);

      focus.append('rect').attr('class', 'tooltip-rect');

      focus
        .append('line')
        .attr('class', 'lineHover')
        .style('stroke', '#999')
        .attr('stroke-width', 1)
        .style('shape-rendering', 'crispEdges')
        .style('opacity', 0.5)
        .attr('y1', -height)
        .attr('y2', 0);

      focus.selectAll('text').remove();

      tooltip(keys);
    }

    function tooltip(copy) {
      let labels = focus.selectAll('.lineHoverText').data(copy);

      labels
        .enter()
        .append('text')
        .attr('class', 'lineHoverText')
        .style('fill', d => color(d))
        .attr('text-anchor', 'start')
        .attr('font-size', 14)
        .attr('font-weight', 500)
        .attr('dy', (_, i) => 1 + i * 1.6 + 'em')
        .merge(labels);

      svg
        .selectAll('.overlay')
        .on('mouseover', () => focus.style('display', null))
        .on('mouseout', () => focus.style('display', 'none'))
        .on('mousemove', mousemove);

      function mousemove() {
        let x0 = x.invert(d3.mouse(this)[0]),
          i = bisectYear(rawData, x0, 1),
          d0 = rawData[i - 1],
          d1 = rawData[i],
          d = x0 - d0.year > d1.year - x0 ? d1 : d0;

        focus
          .select('.lineHover')
          .attr('transform', 'translate(' + x(d.year) + ',' + height + ')');

        focus
          .selectAll('.tooltip-rect')
          .attr('height', 1 + keys.length * 1.6 + 'em')
          .attr('transform', 'translate(' + x(d.year) + ',' + 20 + ')');

        focus
          .selectAll('.lineHoverText')
          .attr('transform', 'translate(' + x(d.year) + ',' + 30 + ')')
          .text(e => e + ' - ' + parseRank(d[e]));

        if (x(d.year) > width - width / 4) {
          focus
            .selectAll('.tooltip-rect')
            .attr(
              'transform',
              'translate(' + (x(d.year) - 200) + ',' + 20 + ')'
            );
        }

        x(d.year) > width - width / 4
          ? focus
              .selectAll('text.lineHoverText')
              .attr(
                'transform',
                'translate(' + (x(d.year) - 200) + ',' + 30 + ')'
              )
              .attr('dx', 10)
          : focus
              .selectAll('text.lineHoverText')
              .attr('text-anchor', 'start')
              .attr('dx', 10);
      }
    }

    // LOADING DATA
    function loadData() {
      rawData = vizData['industry|progression-of-countries'].elements;

      rawData = rawData.map(yData => {
        let arr = Object.entries(yData).filter(f => !disabled.includes(f[0]));
        return Object.fromEntries(arr);
      });

      keys = d3.keys(rawData[0]).filter(f => !f.includes('year'));

      data = keys.map(country => {
        return {
          country: country,
          values: rawData.map(d => {
            return {
              year: d.year,
              value: +d[country]
            };
          })
        };
      });

      x.domain(d3.extent(rawData, d => d.year));
      y.domain([0, d3.max(data, d => d3.max(d.values, c => c.value))]);

      function colorRange() {
        const range = {
          China: '#01fec7',
          Denmark: '#b5286a',
          Finland: '#fec801',
          Norway: '#0499fd',
          'South Korea': '#ff3567',
          Sweden: '#eb5b0d',
          'United Kingdom': '#91ea19',
          'United States': '#3e42d7'
        };

        return Object.entries(range)
          .filter(f => keys.includes(f[0]))
          .map(cc => cc[1]);
      }

      color = d3.scaleOrdinal().domain(keys).range(colorRange());

      draw();
    }

    // START!
    loadData();
    window.addEventListener('resize', draw);

    let elements = document.getElementsByClassName('legend-item');
    const legendClick = e => {
      if (e.target.dataset.selected === 'true') {
        if (elements.length - 1 === disabled.length) return;
        e.target.dataset.selected = 'false';
        disabled.push(e.target.textContent);
      } else {
        e.target.dataset.selected = 'true';
        disabled = disabled.filter(d => d !== e.target.textContent);
      }
      loadData();
    };

    for (var i = 0; i < elements.length; i++) {
      elements[i].addEventListener('click', legendClick, false);
    }
  }, [vizData]);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>COUNTRY RANKINGS BY WINNINGS</h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>
          Following a 16-year span during which United States and South Korea
          jostled for first place in the winnings rankings, China have claimed
          top spot in the previous three years, which can largely be attributed
          to their Dota 2 prowess.
        </li>
        <li className='screen__desc__i'>
          Sweden broke the mould in 2003 by ascending to the summit and have
          only dropped out of the top five twice (2011 and 2012).
        </li>
      </ul>

      <div className='screen__data-vis-wrap multiline-chart'>
        <div className='screen__data-vis-inner multiline-chart'>
          <svg id='chart'></svg>
        </div>

        <div>
          <div className='graph-legend'>
            <div className='legend-item' data-selected='true' data-index='0'>
              China
            </div>
            <div className='legend-item' data-selected='true' data-index='1'>
              Denmark
            </div>
            <div className='legend-item' data-selected='true' data-index='2'>
              Finland
            </div>
            <div className='legend-item' data-selected='true' data-index='3'>
              Norway
            </div>
            <div className='legend-item' data-selected='true' data-index='4'>
              South Korea
            </div>
            <div className='legend-item' data-selected='true' data-index='5'>
              Sweden
            </div>
            <div className='legend-item' data-selected='true' data-index='6'>
              United Kingdom
            </div>
            <div className='legend-item' data-selected='true' data-index='7'>
              United States
            </div>
          </div>
          <p className='note'>
            Select/Deselect the countries you would like to view.
          </p>
        </div>
      </div>
    </article>
  );
}

export default IndustryProgressionOfCountries;
