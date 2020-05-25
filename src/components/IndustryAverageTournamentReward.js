import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

import VisualizationContext from '../contexts/VisualizationContext';

function IndustryAverageTournamentReward() {
  const vizData = useContext(VisualizationContext);

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
          d3.axisLeft(y).tickFormat(d3.format('$~s')).tickSizeInner([-width])
        )
        .selectAll('text')
        .attr('dx', '-5');

      // Y AXIS LABEL
      g.select('.y-axis-label').remove();
      g.append('text')
        .attr('y', 0 - 60)
        .attr('x', 0 - height / 2)
        .attr('class', 'y-axis-label')
        .text('AVERAGE TOURNAMENT WINNINGS');

      // TOOLTIP
      let tip = d3Tip()
        .attr('class', 'd3-tip')
        .offset([-10, 0])
        .html(function (d) {
          return `<div class='title'>${
            d.year
          }</div><div>$${d3.format(',')(d.value)}</div>`;
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
      data = vizData['industry|average-tournament-reward'].elements;

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
    }

    // START!
    loadData();
    window.addEventListener('resize', draw);
  }, [vizData]);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>AVERAGE TOURNAMENT WINNINGS</h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>
          The average payout across all tournaments declined to its lowest point
          in 2009 ($6,396).
        </li>
        <li className='screen__desc__i'>
          Since 2009, however, average tournament winnings have bloomed, with
          2016 ($24,097) representing eSports' most lucrative year to date.
        </li>
      </ul>

      <div className='screen__data-vis-wrap'>
        <div className='screen__data-vis-inner'>
          <svg id='chart'></svg>
        </div>
        <div className='chart-bottom-note'>Year</div>
      </div>
    </article>
  );
}

export default IndustryAverageTournamentReward;
