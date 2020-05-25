import React, { useEffect, useContext } from 'react';
import * as d3 from 'd3';
import d3Tip from 'd3-tip';

import VisualizationContext from '../contexts/VisualizationContext';

import worldJson from '../data/world_countries.json';

function PlayersMaleVsFemale() {
  const vizData = useContext(VisualizationContext);

  useEffect(() => {
    const formatNumber = d3.format(',');

    // Set tooltips
    const tip = d3Tip()
      .attr('class', 'd3-tip world-map')
      .offset([0, 0])
      .html(d =>
        mapType === 'vs'
          ? `
				<div class='title'>${d.properties.name}</div>
				<div class='details'>${d.value}</div>
		`
          : `
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

    let mapData = []; // user data
    let mapType = 'male';
    let colorScale = undefined;

    function generatePalette(type) {
      if (type === 'vs') {
        d3.select('.map-color-scale').attr('data-labels', true);
        d3.selectAll('.color-scale:nth-child(1)').style(
          'background-color',
          '#A82968'
        );
        d3.selectAll('.color-scale:nth-child(2)').style(
          'background-color',
          '#209F85'
        );
        d3.selectAll('.color-scale:nth-child(3)').style(
          'background-color',
          '#F68D2F'
        );
      } else {
        d3.select('.map-color-scale').attr('data-labels', false);
        d3.selectAll('.color-scale:nth-child(1)').style(
          'background-color',
          type === 'male' ? '#6D235E' : '#006D58'
        );
        d3.selectAll('.color-scale:nth-child(2)').style(
          'background-color',
          type === 'male' ? '#A92769' : '#12A085'
        );
        d3.selectAll('.color-scale:nth-child(3)').style(
          'background-color',
          type === 'male' ? '#C25783' : '#00FFCC'
        );
        d3.selectAll('.color-scale:nth-child(4)').style(
          'background-color',
          type === 'male' ? '#E190B1' : '#ACE5DA'
        );
      }
    }

    function draw() {
      const dataById = {};

      mapData.forEach(d => {
        switch (mapType) {
          case 'male':
            dataById[d.id] = +d.male;
            colorScale = d3
              .scaleThreshold()
              .domain([20, 50, 80, 500])
              .range(['#E190B1', '#C25783', '#A92769', '#6D235E']);
            generatePalette('male');
            break;

          case 'female':
            dataById[d.id] = +d.female;
            colorScale = d3
              .scaleThreshold()
              .domain([10, 30, 50, 500])
              .range(['#ACE5DA', '#00FFCC', '#12A085', '#006D58']);
            generatePalette('female');
            break;

          case 'vs':
            if (d.male === d.female) {
              dataById[d.id] = 'Tie';
            } else {
              dataById[d.id] = d.male >= d.female ? 'Male' : 'Female';
            }
            colorScale = d3
              .scaleOrdinal()
              .domain(['Male', 'Female', 'Tie'])
              .range(['#A82968', '#209F85', '#F68D2F']);
            generatePalette('vs');
            break;
          default:
            dataById[d.id] = +d.male;
        }
      });

      worldJson.features.forEach(d => {
        d.value = dataById[d.id];
      });

      svg.selectAll('.world-map').remove();
      svg
        .selectAll('path')
        .data(worldJson.features)
        .enter()
        .append('path')
        .attr('class', 'world-map')
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
      //   .datum(topojson.mesh(worldJson.features, (a, b) => a.id !== b.id))
      //   .attr('class', 'names')
      //   .attr('d', path);
    }

    d3.select('.zoom-in').on('click', () =>
      svg.transition().call(zoom.scaleBy, 2)
    );
    d3.select('.zoom-out').on('click', () =>
      svg.transition().call(zoom.scaleBy, 0.5)
    );
    d3.select('select').on('change', () => {
      mapType = d3.select('select').node().value;

      draw();
    });

    // LOADING DATA
    function loadData() {
      mapData = vizData['players|male-vs-female'].elements;

      draw();
    }

    loadData();
  }, [vizData]);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>
        WHERE ARE THE TOP 367 MALES AND FEMALES FROM?
      </h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>
          Among the top 367 players for each gender, South Korea is the most
          well-represented nation for males (91), while United States is the
          most well-represented nation for females (52).
        </li>
        <li className='screen__desc__i'>
          Sweden are represented by exactly 29 players in both gender rankings.
        </li>
      </ul>

      <div className='map-select' style={{ width: '200px' }}>
        <select>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='vs'>VS</option>
        </select>
      </div>

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
          <div className='mcs-label'>
            <span>Male</span>
          </div>
          <div className='mcs-label'>
            <span>Female</span>
          </div>
          <div className='mcs-label'>
            <span>Tie</span>
          </div>
          <div>
            <div className='color-scale'></div>
            <div className='color-scale'></div>
            <div className='color-scale'></div>
            <div className='color-scale'></div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default PlayersMaleVsFemale;
