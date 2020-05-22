import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

import GoogleSheetsContext from '../contexts/GoogleSheetsContext';

function PlayersCommonAge() {
  const sheetsData = useContext(GoogleSheetsContext);

  useEffect(() => {
    // SETUP
    let svg = d3.select('svg'),
      margin = {
        top: 20,
        right: 20,
        bottom: 60,
        left: 75
      },
      x = d3.scaleLinear(),
      y = d3.scaleLinear(),
      data = undefined;

    // GRADIENT
    const gradient = svg
      .append('svg:defs')
      .append('svg:linearGradient')
      .attr('id', 'gradient')
      .attr('gradientTransform', 'rotate(90)');
    gradient.append('stop').attr('stop-color', '#12a085').attr('offset', '0%');
    gradient
      .append('stop')
      .attr('stop-color', '#00ffcc')
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
        .call(d3.axisBottom(x))
        .selectAll('text')
        .attr('transform', 'translate(0,10)')
        .style('text-anchor', 'middle');
      g.select('.axis--y')
        .call(d3.axisLeft(y).tickSizeInner([-width]))
        .selectAll('text')
        .attr('dx', '-5');

      // Y AXIS LABEL
      g.select('.y-axis-label').remove();
      g.append('text')
        .attr('y', 0 - 60)
        .attr('x', 0 - height / 2)
        .attr('class', 'y-axis-label')
        .text('NUMBER OF PROS');

      // TOOLTIP
      let tip = d3Tip()
        .attr('class', 'd3-tip area')
        .offset([-10, 0])
        .html(
          d =>
            `<div class='title'>${d.age}</div><div>${d3.format(',')(
              d.value
            )}</div>`
        );
      g.call(tip);

      // Redraw for resizing window
      g.selectAll('.area').remove();
      g.selectAll('.line').remove();
      g.selectAll('circle').remove();

      // Add the area
      let area = g.append('path').attr('class', 'area').datum(data);

      // ENTER
      area
        .attr('fill', 'url(#gradient)')
        .attr('fill-opacity', 0.5)
        .attr('stroke', 'none')
        .attr('stroke-width', 3)
        .attr(
          'd',
          d3
            .area()
            .curve(d3.curveMonotoneX)
            .x(d => x(d.age))
            .y0(y(0))
            .y1(d => y(d.value))
        );

      // Add the line
      g.append('path')
        .datum(data)
        .attr('class', 'line')
        .attr('fill', 'none')
        .attr('stroke', '#00ffcc')
        .attr('stroke-width', 3)
        .attr(
          'd',
          d3
            .line()
            .curve(d3.curveMonotoneX)
            .x(d => x(d.age))
            .y(d => y(d.value))
        );

      g.selectAll('circles')
        .data(data)
        .enter()
        .append('circle')
        .attr('fill', '#00ffcc')
        .attr('stroke', 'none')
        .attr('cx', d => x(d.age))
        .attr('cy', d => y(d.value))
        .attr('r', 5)
        .on('mouseover', tip.show)
        .on('mouseout', tip.hide);
    }

    // LOADING DATA
    function loadData() {
      data = sheetsData['players|common-age'].elements;

      x.domain(d3.extent(data, d => d.age));
      y.domain([1, d3.max(data, d => d.value)]);

      draw();
    }

    // START!
    loadData();
    window.addEventListener('resize', draw);
  }, [sheetsData]);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>AGE</h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>
          The most common age among active players is 20 (1,425).
        </li>
      </ul>

      <div className='screen__data-vis-wrap'>
        <div className='screen__data-vis-inner'>
          <svg id='chart'></svg>
        </div>
        <div className='chart-bottom-note'>AGE</div>
      </div>
    </article>
  );
}

export default PlayersCommonAge;
