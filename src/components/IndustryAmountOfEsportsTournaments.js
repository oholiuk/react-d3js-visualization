import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

import TranslationContext from '../contexts/TranslationContext';

function IndustryAmountOfEsportsTournaments() {
  const t = useContext(TranslationContext);
  const pageData = t.data;

  useEffect(() => {
    // SETUP
    let svg = d3.select('svg'),
      margin = {
        top: 20,
        right: 20,
        bottom: 60,
        left: 75
      },
      x = d3.scaleBand().padding(0.4),
      y = d3.scaleLinear(),
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
    g.append('g').attr('class', 'axis axis--y');

    // DRAW CHART
    function draw() {
      let bounds = svg.node().getBoundingClientRect(),
        width = bounds.width - margin.left - margin.right,
        height = bounds.height - margin.top - margin.bottom;

      x.rangeRound([0, width]);
      y.rangeRound([height, 0]);

      g.select('.axis--x')
        .attr('transform', 'translate(0,' + height + ')')
        .call(d3.axisBottom(x).tickSizeInner(5))
        .selectAll('text')
        .attr('transform', 'translate(-10,10)rotate(-45)')
        .style('text-anchor', 'end');
      g.select('.axis--y')
        .call(
          d3
            .axisLeft(y)
            .tickFormat(d => formatNumber(d))
            .tickSizeInner([-width])
        )
        .selectAll('text')
        .attr('dx', '-5');

      // Y AXIS LABEL
      g.select('.y-axis-label').remove();
      g.append('text')
        .attr('y', 0 - 60)
        .attr('x', 0 - height / 2)
        .attr('class', 'y-axis-label')
        .text(pageData.cat1_sub3_txt1);

      // TOOLTIP
      let tip = d3Tip()
        .attr('class', 'd3-tip vertical-bar')
        .offset([-10, 0])
        .html(function (d) {
          return `<div class='title'>${
            d.year
          }</div><div>${d3.format(',')(d.value)}</div>`;
        });
      g.call(tip);

      let bars = g.selectAll('.bar').data(data);

      // ENTER
      bars
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', function (d) {
          return x(d.year);
        })
        .attr('y', function (d) {
          return y(d.value);
        })
        .attr('width', x.bandwidth())
        .attr('height', function (d) {
          return height - y(d.value);
        })
        .style('fill', 'url(#gradient)')
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);

      // UPDATE
      bars
        .attr('x', function (d) {
          return x(d.year);
        })
        .attr('y', function (d) {
          return y(d.value);
        })
        .attr('width', x.bandwidth())
        .attr('height', function (d) {
          return height - y(d.value);
        });

      // EXIT
      bars.exit().remove();
    }

    // LOADING DATA
    function loadData() {
      const csvFilePath = 'data/industry_amount-of-esports-tournaments.csv';

      d3.csv(csvFilePath).then(result => {
        result.forEach(d => {
          d.year = +d.year;
          d.value = +d.value;
        });

        data = result;
        x.domain(
          data.map(function (d) {
            return d.year;
          })
        );
        y.domain([
          0,
          d3.max(data, function (d) {
            return d.value;
          })
        ]);

        draw();
      });
    }

    // START!
    loadData();
    window.addEventListener('resize', draw);
  }, [pageData]);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>{pageData.cat1_sub3_title}</h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>{pageData.cat1_sub3_desc1}</li>
      </ul>

      <div className='screen__data-vis-wrap'>
        <div className='screen__data-vis-inner'>
          <svg id='chart'></svg>
        </div>
        <div className='chart-bottom-note'>{pageData.cat1_sub3_txt2}</div>
      </div>
    </article>
  );
}

export default IndustryAmountOfEsportsTournaments;
