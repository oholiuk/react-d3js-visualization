import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

import VisualizationContext from '../contexts/VisualizationContext';

function IndustryEsportsViewership() {
  const vizData = useContext(VisualizationContext);

  useEffect(() => {
    // SETUP
    let svg = d3.select('svg'),
      margin = {
        top: 20,
        right: 20,
        bottom: 55,
        left: 75
      },
      x = d3.scaleBand().padding(0.4),
      y = d3.scaleLinear(),
      data = undefined;

    // GRADIENT
    const gradient1 = svg
      .append('svg:defs')
      .append('svg:linearGradient')
      .attr('id', 'gradient1')
      .attr('gradientTransform', 'rotate(90)');
    gradient1.append('stop').attr('stop-color', '#ff3366').attr('offset', '0%');
    gradient1
      .append('stop')
      .attr('stop-color', '#aa2568')
      .attr('offset', '100%');

    const gradient2 = svg
      .append('svg:defs')
      .append('svg:linearGradient')
      .attr('id', 'gradient2')
      .attr('gradientTransform', 'rotate(90)');
    gradient2.append('stop').attr('stop-color', '#00ffcc').attr('offset', '0%');
    gradient2
      .append('stop')
      .attr('stop-color', '#12a085')
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
        .attr('transform', 'translate(0,10)')
        .style('text-anchor', 'middle');
      g.select('.axis--y')
        .call(
          d3.axisLeft(y).tickFormat(d3.format('~s')).tickSizeInner([-width])
        )
        .selectAll('text')
        .attr('dx', '-5');

      // Y AXIS LABEL
      g.select('.y-axis-label').remove();
      g.append('text')
        .attr('y', 0 - 60)
        .attr('x', 0 - height / 2)
        .attr('class', 'y-axis-label')
        .text('NUMBER OF VIEWERS');

      // TOOLTIP
      let tip = d3Tip()
        .attr('class', 'd3-tip stacked')
        .offset([-10, 0])
        .html(
          d => `
			<div class='title'>${d.data.year}</div>
			<div>Total: ${d3.format('~s')(
        d.data['frequent-viewers'] + d.data['occasional-viewers']
      )}</div>
			<div><span class='frequent'>Frequent viewers:</span> ${d3.format('~s')(
        d.data['frequent-viewers']
      )}</div>
			<div><span class='occasional'>Occasional viewers:</span> ${d3.format('~s')(
        d.data['occasional-viewers']
      )}</div>
		`
        );
      g.call(tip);

      // Transpose the data into layers
      let stackedData = d3
        .stack()
        .keys(['frequent-viewers', 'occasional-viewers'])(data);

      const color = ['url(#gradient1)', 'url(#gradient2)'];

      let bars = g.append('g').selectAll('g').data(stackedData);

      d3.selectAll('.bar').remove();

      // ENTER
      bars
        .enter()
        .append('g')
        .style('fill', d => color[d.index])
        .selectAll('rect')
        .data(d => d)
        .enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => x(d.data.year))
        .attr('y', d => y(d[1]))
        .attr('width', x.bandwidth())
        .attr('height', d => y(d[0]) - y(d[1]))
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);

      // UPDATE
      bars
        .attr('x', d => x(d.data.year))
        .attr('y', d => y(d[1]))
        .attr('width', x.bandwidth())
        .attr('height', d => y(d[0]) - y(d[1]));

      // EXIT
      bars.exit().remove();
    }

    // LOADING DATA
    function loadData() {
      data = vizData['industry|esports-viewership'].elements;

      x.domain(
        data.map(function (d) {
          return d.year;
        })
      );
      y.domain([
        0,
        d3.max(data, function (d) {
          return d['frequent-viewers'] + d['occasional-viewers'];
        })
      ]);

      draw();
    }

    // START!
    loadData();
    window.addEventListener('resize', draw);
    return () => window.removeEventListener('resize', draw);
  }, [vizData]);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>AUDIENCE BY VIEWER TYPE</h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>
          The number of frequent or occasional eSports viewers has steadily
          increased since 2012, reaching a peak of 162 million frequent-viewers
          and 161 million occasional-viewers in 2016. The League of Legends
          final last year was watched by more people than the last game of the
          NBA finals (36 million compared to 31 million).
        </li>
        <li className='screen__desc__i'>
          Based on Statista projections, the number of frequent or occasional
          eSports viewers is expected to rise to 286 million and 303 million,
          respectively, by 2020. To put that into perspective, US male
          millennials already watch eSports as much as they watch baseball and
          ice hockey.
        </li>
      </ul>

      <div className='screen__data-vis-wrap'>
        <div className='screen__data-vis-inner'>
          <svg id='chart'></svg>
        </div>

        <div className='chart-bottom-note'>Year</div>

        <div className='screen__data-vis__legend-items'>
          <div className='screen__data-vis__legend-item'>
            <div className='screen__data-vis__legend-icon'></div>
            <div className='screen__data-vis__legend-label'>
              frequent viewers
            </div>
          </div>
          <div className='screen__data-vis__legend-item'>
            <div className='screen__data-vis__legend-icon'></div>
            <div className='screen__data-vis__legend-label'>
              occasional viewers
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default IndustryEsportsViewership;
