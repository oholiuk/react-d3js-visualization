import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

import GoogleSheetsContext from '../contexts/GoogleSheetsContext';

function LeaderboardsTopGamesByTournaments() {
  const sheetsData = useContext(GoogleSheetsContext);

  useEffect(() => {
    // SETUP
    let svg = d3.select('svg'),
      margin = {
        top: 20,
        right: 20,
        bottom: 60,
        left: 190
      },
      x = d3.scaleLinear(),
      y = d3.scaleBand().padding(0.3),
      data = undefined;

    let g = svg
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    g.append('g').attr('class', 'axis axis--x');
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
        .call(
          d3.axisBottom(x).tickFormat(d3.format('~s')).tickSizeInner([-height])
        )
        .selectAll('text')
        .attr('transform', 'translate(-10,10)rotate(-45)')
        .style('text-anchor', 'end');
      g.select('.axis--y')
        .call(d3.axisLeft(y))
        .selectAll('text')
        .attr('dx', '');

      // Y AXIS LABEL
      g.select('.y-axis-label').remove();
      g.append('text')
        .attr('y', 0 - 175)
        .attr('x', 0 - height / 2)
        .attr('class', 'y-axis-label')
        .text('Game');

      // TOOLTIP
      let tip = d3Tip()
        .attr('class', 'd3-tip horizontal')
        .offset([-10, 0])
        .html(
          d =>
            `<div class='title'>${d.game}</div><div>${d3.format(',')(
              d.value
            )}</div>`
        );
      g.call(tip);

      // GRADIENT
      const gradient = svg
        .append('svg:defs')
        .append('svg:linearGradient')
        .attr('id', 'gradient');
      gradient
        .append('stop')
        .attr('stop-color', '#00ffcc')
        .attr('offset', '0%');
      gradient
        .append('stop')
        .attr('stop-color', '#12a085')
        .attr('offset', '100%');

      let bars = g.selectAll('.bar').data(data);

      // ENTER
      bars
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', 1)
        .attr('y', d => y(d.game))
        .attr('width', d => x(d.value))
        .attr('height', y.bandwidth())
        .style('fill', 'url(#gradient)')
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);

      // UPDATE
      bars
        .attr('x', 1)
        .attr('y', d => y(d.game))
        .attr('width', d => x(d.value))
        .attr('height', y.bandwidth());

      // EXIT
      bars.exit().remove();
    }

    // LOADING DATA
    function loadData() {
      data = sheetsData[
        'leaderboards|top-games-by-tournaments'
      ].elements.sort((a, b) => d3.ascending(a.value, b.value));

      x.domain([0, d3.max(data, d => d.value)]);
      y.domain(data.map(d => d.game));

      draw();
    }

    // START!
    loadData();
    window.addEventListener('resize', draw);
  }, [sheetsData]);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>TOTAL TOURNAMENTS BY GAME</h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>
          A staple on the eSports scene since its release seven years ago,
          Starcraft II (4,057) has hosted nearly double as many tournaments as
          second-placed Counter-Strike: Global Offensive (2,113).
        </li>
      </ul>

      <div className='screen__data-vis-wrap'>
        <div className='screen__data-vis-inner'>
          <svg id='chart'></svg>
        </div>

        <div className='chart-bottom-note'>NUMBER OF TOURNAMENTS</div>
      </div>
    </article>
  );
}

export default LeaderboardsTopGamesByTournaments;
