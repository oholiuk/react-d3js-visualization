import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

import VisualizationContext from '../contexts/VisualizationContext';

function LeaderboardsTopEarningTeams() {
  const vizData = useContext(VisualizationContext);

  useEffect(() => {
    // SETUP
    let svg = d3.select('svg'),
      margin = {
        top: 20,
        right: 20,
        bottom: 60,
        left: 120
      },
      x = d3.scaleLinear(),
      y = d3.scaleBand().padding(0.4),
      data = undefined;

    // GRADIENT
    const gradient = svg
      .append('svg:defs')
      .append('svg:linearGradient')
      .attr('id', 'gradient');
    gradient.append('stop').attr('stop-color', '#00ffcc').attr('offset', '0%');
    gradient
      .append('stop')
      .attr('stop-color', '#12a085')
      .attr('offset', '100%');

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
          d3.axisBottom(x).tickFormat(d3.format('$~s')).tickSizeInner([-height])
        )
        .selectAll('text')
        .attr('transform', 'translate(-10,10)rotate(-45)')
        .style('text-anchor', 'end');
      g.select('.axis--y')
        .call(d3.axisLeft(y))
        .selectAll('text')
        .attr('dx', '0');

      // Y AXIS LABEL
      g.select('.y-axis-label').remove();
      g.append('text')
        .attr('y', 0 - 105)
        .attr('x', 0 - height / 2)
        .attr('class', 'y-axis-label')
        .text('Teams');

      // TOOLTIP
      let tip = d3Tip()
        .attr('class', 'd3-tip horizontal')
        .offset([-10, 0])
        .html(
          d =>
            `<div class='title'>${d.team}</div><div>$${d3.format(',')(
              d.value
            )}</div>`
        );
      g.call(tip);

      let bars = g.selectAll('.bar').data(data);

      // ENTER
      bars
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', 1)
        .attr('y', d => y(d.team))
        .attr('width', d => x(d.value))
        .attr('height', y.bandwidth())
        .style('fill', 'url(#gradient)')
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);

      // UPDATE
      bars
        .attr('x', 1)
        .attr('y', d => y(d.team))
        .attr('width', d => x(d.value))
        .attr('height', y.bandwidth());

      // EXIT
      bars.exit().remove();
    }

    // LOADING DATA
    function loadData() {
      data = vizData[
        'leaderboards|top-earning-teams'
      ].elements.sort((a, b) => d3.ascending(a.value, b.value));

      x.domain([0, d3.max(data, d => d.value)]);
      y.domain(data.map(d => d.team));

      draw();
    }

    // START!
    loadData();
    window.addEventListener('resize', draw);
  }, [vizData]);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>TOP EARNING TEAMS</h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>
          With total winnings of $15.43 million across 632 tournaments, Evil
          Geniuses are the most successful team in the history of eSports. In
          terms of their top games, Dota 2 accounts for 88.26% of their
          earnings.
        </li>
        <li className='screen__desc__i'>
          Wings Gaming lead the chasing pack with $9.7 million in total winnings
          across 21 tournaments. Apart from three paid finishes in
          Counter-Strike: Global Offensive tournaments, all of their winnings
          have come from Dota 2 tournaments.
        </li>
      </ul>

      <div className='screen__data-vis-wrap'>
        <div className='screen__data-vis-inner'>
          <svg id='chart'></svg>
        </div>

        <div className='chart-bottom-note'>TOTAL WINNINGS</div>
      </div>
    </article>
  );
}

export default LeaderboardsTopEarningTeams;
