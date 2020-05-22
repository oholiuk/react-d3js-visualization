import React, { useEffect } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

import Tabletop from 'tabletop';
import worldJson from '../data/world_countries.json';

function PlayersCountryOfOrigin() {
  useEffect(() => {
    const formatNumber = d3.format(',');

    // Set tooltips
    const tip = d3Tip()
      .attr('class', 'd3-tip world-map')
      .offset([0, 0])
      .html(
        d => `
				<div class='title'>${d.properties.name}</div>
				<div class='details'>$${formatNumber(d.value)}</div>
		`
      );

    const zoom = d3
      .zoom()
      .scaleExtent([0.5, 5])
      .on('zoom', function () {
        svg.selectAll('path').attr('transform', d3.event.transform);
      });

    const margin = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    const width = 960 - margin.left - margin.right;
    const height = 415 - margin.top - margin.bottom;

    const colorScale = d3
      .scaleThreshold()
      .domain([10000000, 20000000, 30000000, 40000000])
      .range([
        'rgb(225, 144, 177)',
        'rgb(194, 87, 131)',
        'rgb(169, 39, 105)',
        'rgb(109, 35, 94)'
      ]);

    const svg = d3
      .select('svg')
      .append('g')
      .attr('width', width)
      .attr('height', height)
      .attr('class', 'map');

    /*
	const projection = d3
		.geoNaturalEarth1()
		.center([0, 0])
		.rotate([0, 0])
		.scale([1000 / (2 * Math.PI)])
		.translate([480, 210]);
	*/
    const projection = d3
      .geoMercator()
      .center([0, 5])
      .scale(170)
      .rotate([0, 0]);

    const path = d3.geoPath().projection(projection);

    svg.call(tip);
    svg.call(zoom).on('wheel.zoom', null);

    function draw(data, mapData) {
      const dataById = {};

      mapData.forEach(d => {
        dataById[d.id] = +d.value;
      });
      data.features.forEach(d => {
        d.value = dataById[d.id];
      });

      svg
        .selectAll('path')
        .data(data.features)
        .enter()
        .append('path')
        .attr('d', path)
        .style('fill', d =>
          dataById[d.id] ? colorScale(dataById[d.id]) : '#f3f1f1'
        )
        .style('stroke', 'white')
        .style('stroke-width', 0.6)
        // tooltips
        .on('mouseover', function (d) {
          dataById[d.id] && tip.show(d, this);
        })
        .on('mousemove', function (d) {
          let tipWidth = parseInt(d3.select('.d3-tip').style('width')),
            tipHeight = parseInt(d3.select('.d3-tip').style('height'));

          dataById[d.id] &&
            tip
              .show(d, this)
              .style('top', d3.event.pageY - tipHeight - 20 + 'px')
              .style('left', d3.event.pageX - tipWidth / 2 + 'px');
        })
        .on('mouseout', function (d) {
          tip.hide(d, this);
        });

      // svg
      //   .append('path')
      //   .datum(topojson.mesh(data.features, (a, b) => a.id !== b.id))
      //   .attr('class', 'names')
      //   .attr('d', path);
    }

    d3.select('.zoom-in').on('click', () =>
      svg.transition().call(zoom.scaleBy, 2)
    );
    d3.select('.zoom-out').on('click', () =>
      svg.transition().call(zoom.scaleBy, 0.5)
    );

    // LOADING DATA
    function loadData() {
      const publicSpreadsheetUrl =
        'https://docs.google.com/spreadsheets/d/1ypM-P9GZgEJTGuKd3MQVObHOcbf6ojapgYGnFxbWrZ8/edit?usp=sharing';

      Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: getDataFromSheets,
        parseNumbers: true,
        wanted: ['players|country-of-origin']
      });

      function getDataFromSheets(sheetsData, tabletop) {
        const mapData = sheetsData['players|country-of-origin'].elements;

        draw(worldJson, mapData);
      }
    }

    loadData();
  }, []);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>COUNTRY OF ORIGIN</h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>
          United States (8,023) has produced nearly four times as many players
          as second-placed Germany (2,038).
        </li>
        <li className='screen__desc__i'>
          In spite of its relatively small population, Sweden (1,597) charts
          fifth ahead of the likes of United Kingdom (1,592) and Russia (1,577).
        </li>
      </ul>

      <div className='screen__data-vis-wrap world-map'>
        <div className='zoom-control'>
          <span className='zoom-in' title='Zoom in'>
            +
          </span>
          <span className='zoom-out' title='Zoom out'>
            -
          </span>
        </div>

        <div className='screen__data-vis-inner'>
          <svg id='world-map'></svg>
        </div>

        <div className='map-color-scale' data-labels='false'>
          <div>
            <div style={{ backgroundColor: 'rgb(109, 35, 94)' }}></div>
            <div style={{ backgroundColor: 'rgb(169, 39, 105)' }}></div>
            <div style={{ backgroundColor: 'rgb(194, 87, 131)' }}></div>
            <div style={{ backgroundColor: 'rgb(225, 144, 177)' }}></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PlayersCountryOfOrigin;
