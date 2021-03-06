import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';

import TranslationContext from '../contexts/TranslationContext';

function GamesHearthstoneHeroesOfWar() {
  const t = useContext(TranslationContext);
  const pageData = t.data;

  useEffect(() => {
    // SETUP
    let svg = d3.select('svg'),
      margin = {
        top: 20,
        right: 75,
        bottom: 60,
        left: 75
      },
      x = d3.scaleBand().padding(0.7),
      y1 = d3.scaleLinear(),
      y2 = d3.scaleLinear(),
      line = d3
        .line()
        .x(d => x(d.year) + x.bandwidth() / 2)
        .y(d => y2(d['number-of-pros'])),
      bisectYear = d3.bisector(d => d.year).left,
      focus,
      data = undefined;

    const formatNumber = (d, prefix = '') => {
      if (d === 0) {
        return prefix + 0;
      } else if (d < 1000) {
        return prefix + d;
      } else if (d < 1e6) {
        return prefix + d3.formatPrefix(',.1', 1e3)(d);
      } else if (d >= 1e6) {
        return prefix + d3.formatPrefix(',.1', 1e6)(d);
      } else {
        return prefix + d;
      }
    };

    // GRADIENT
    const gradient = svg
      .append('svg:defs')
      .append('svg:linearGradient')
      .attr('id', 'gradient')
      .attr('gradientTransform', 'rotate(90)');
    gradient.append('stop').attr('stop-color', '#aa2568').attr('offset', '0%');
    gradient
      .append('stop')
      .attr('stop-color', '#ff3366')
      .attr('offset', '100%');

    let g = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    g.append('g').attr('class', 'axis axis--x tick--small');
    g.append('g').attr('class', 'axis axis--y1');
    g.append('g').attr('class', 'axis axis--y2');

    // DRAW CHART
    function draw() {
      let bounds = svg.node().getBoundingClientRect(),
        width = bounds.width - margin.left - margin.right,
        height = bounds.height - margin.top - margin.bottom;

      x.rangeRound([0, width]);
      y1.rangeRound([height, 0]);
      y2.rangeRound([height, 0]);

      g.select('.axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x).tickSizeInner(5));
      g.select('.axis--y1')
        .call(
          d3
            .axisLeft(y1)
            .tickFormat(d => formatNumber(d, '$'))
            .tickSizeInner([-width])
        )
        .selectAll('text')
        .attr('dx', '-5');
      g.select('.axis--y2')
        .attr('transform', 'translate(' + width + ', 0)')
        .call(d3.axisRight(y2).tickSizeInner(5))
        .selectAll('text')
        .attr('dx', '5');

      // Y1 AXIS LABEL
      g.selectAll('.y-axis-label').remove();
      g.append('text')
        .attr('y', 0 - 60)
        .attr('x', 0 - height / 2)
        .attr('class', 'y-axis-label y1')
        .text(pageData.cat4_sub5_txt1 + ' ($)');

      // Y2 AXIS LABEL
      g.append('text')
        .attr('y', -width - 60)
        .attr('x', height / 2)
        .attr('class', 'y-axis-label y2')
        .text(pageData.cat4_sub5_txt2);

      let bars = g.selectAll('.bar').data(data);

      // ENTER
      // BAR CHART
      bars
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.year))
        .attr('y', d => y1(d['prize-awarded']))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y1(d['prize-awarded']))
        .style('fill', 'url(#gradient)');

      // Redraw for resizing window
      g.selectAll('.line-chart').remove();
      g.selectAll('.dot').remove();

      // LINE CHART
      g.append('path')
        .attr('class', 'line-chart')
        .attr('fill', 'none')
        .attr('stroke', '#01fec7')
        .attr('stroke-miterlimit', 1)
        .attr('stroke-width', 4)
        .attr('d', line(data));

      // CIRCLE
      g.selectAll('.dot')
        .data(data)
        .enter()
        .append('circle')
        .attr('class', 'dot')
        .attr('fill', '#01fec7')
        .attr('stroke', 'none')
        .attr('cx', d => x(d.year) + x.bandwidth() / 2)
        .attr('cy', d => y2(d['number-of-pros']))
        .attr('r', 7);

      // UPDATE
      bars
        .attr('x', d => x(d.year))
        .attr('y', d => y1(d['prize-awarded']))
        .attr('width', x.bandwidth())
        .attr('height', d => height - y1(d['prize-awarded']));

      // EXIT
      bars.exit().remove();

      focus = g.append('g').attr('class', 'focus').style('display', 'none');

      g.append('rect')
        .attr('class', 'overlay')
        .attr('x', 0)
        .attr('width', width + 20)
        .attr('height', height);

      focus.append('rect').attr('class', 'tooltip-rect bar-line--chart');

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

      tooltip();

      function tooltip() {
        let labels = focus
          .selectAll('.lineHoverText')
          .data(['year', 'prize-awarded', 'number-of-pros']);

        labels
          .enter()
          .append('text')
          .attr('class', 'lineHoverText')
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
          // custom invert function
          x.invert = (function () {
            let domain = x.domain();
            let range = x.range();
            let scale = d3.scaleQuantize().domain(range).range(domain);

            return function (x) {
              return scale(x);
            };
          })();

          let x0 = x.invert(d3.mouse(this)[0]),
            i = bisectYear(data, x0, 1),
            d0 = data[i - 1],
            d1 = data[i],
            d = x0 - d0.year > d1.year - x0 ? d1 : d0;

          focus
            .select('.lineHover')
            .attr(
              'transform',
              'translate(' +
                (x(d.year) + x.bandwidth() / 2) +
                ',' +
                height +
                ')'
            )
            .attr('stroke-width', 2)
            .attr('stroke-dasharray', 3);

          focus
            .selectAll('.tooltip-rect')
            .attr('height', '5.8em')
            .attr(
              'transform',
              'translate(' + (x(d.year) + x.bandwidth() / 2) + ',' + 50 + ')'
            );

          focus
            .selectAll('.lineHoverText')
            .attr(
              'transform',
              'translate(' + (x(d.year) + x.bandwidth() / 2) + ',' + 60 + ')'
            );

          focus
            .select('.lineHoverText:nth-of-type(1)')
            .text(d.year)
            .attr('font-weight', 600);
          focus
            .select('.lineHoverText:nth-of-type(2)')
            .text(
              pageData.cat4_sub5_txt1 +
                ': $' +
                d3.format(',')(d['prize-awarded'])
            )
            .attr('fill', '#aa2568');
          focus
            .select('.lineHoverText:nth-of-type(3)')
            .text(
              pageData.cat4_sub5_txt2 +
                ': ' +
                d3.format(',')(d['number-of-pros'])
            )
            .attr('fill', '#0ed19d');

          if (x(d.year) > width - width / 4) {
            focus
              .selectAll('.tooltip-rect')
              .attr(
                'transform',
                'translate(' + (x(d.year) - 230) + ',' + 50 + ')'
              );
          }

          x(d.year) > width - width / 4
            ? focus
                .selectAll('text.lineHoverText')
                .attr(
                  'transform',
                  'translate(' + (x(d.year) - 230) + ',' + 60 + ')'
                )
                .attr('dx', 10)
            : focus
                .selectAll('text.lineHoverText')
                .attr('text-anchor', 'start')
                .attr('dx', 10);
        }
      }
    }

    // LOADING DATA
    function loadData() {
      const csvFilePath = 'data/games_hearthstone-heroes-of-war.csv';

      d3.csv(csvFilePath).then(result => {
        result.forEach(d => {
          d.year = +d.year;
          d['prize-awarded'] = +d['prize-awarded'];
          d['number-of-pros'] = +d['number-of-pros'];
        });
        data = result;

        x.domain(data.map(d => d.year));
        y1.domain([0, d3.max(data, d => d['prize-awarded'])]);
        y2.domain(d3.extent(data, d => d['number-of-pros']));

        draw();
      });
    }

    // START!
    loadData();
    window.addEventListener('resize', draw);
  }, [pageData]);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>{pageData.cat4_sub5_title}</h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>{pageData.cat4_sub5_desc1}</li>
      </ul>

      <div className='screen__data-vis-wrap'>
        <div className='screen__data-vis-inner'>
          <svg id='chart'></svg>
        </div>
      </div>
    </article>
  );
}

export default GamesHearthstoneHeroesOfWar;
