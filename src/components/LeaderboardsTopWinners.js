import React, { useContext } from 'react';
import _ from 'lodash';

import VisualizationContext from '../contexts/VisualizationContext';
import TranslationContext from '../contexts/TranslationContext';

function LeaderboardsTopWinners() {
  const vizData = useContext(VisualizationContext);
  const t = useContext(TranslationContext);
  const pageData = t.data;

  const tableData = vizData['leaderboards|top-winners'].elements;

  const countries = _.sortBy(_.uniqBy(tableData, 'country'), 'country').map(
    row => row.country
  );
  const games = _.sortBy(_.uniqBy(tableData, 'top-game'), 'top-game').map(
    row => row['top-game']
  );

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>{pageData.cat2_sub10_title}</h1>

      <ul className='screen__desc'>
        <li className='screen__desc__i'>{pageData.cat2_sub10_desc1}</li>
      </ul>

      <div className='table-data table-data--8-col'>
        <div className='table-filters'>
          <select className='table-filter'>
            <option value=''>Country</option>
            {countries.map((name, index) => (
              <option value={name} key={index}>
                {name}
              </option>
            ))}
          </select>

          <select className='table-filter'>
            <option value=''>Top Game</option>
            {games.map((name, index) => (
              <option value={name} key={index}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className='table-wrap'>
          <div className='table-inner'>
            <div className='table__head'>
              <div className='table__th'>{pageData.cat2_sub10_txt3}</div>
              <div className='table__th table__th--reverse'>
                {pageData.cat2_sub10_txt4}
              </div>
              <div className='table__th'>{pageData.cat2_sub10_txt5}</div>
              <div className='table__th table__th--reverse'>
                {pageData.cat2_sub10_txt6}
              </div>
              <div className='table__th'>{pageData.cat2_sub10_txt7}</div>
              <div className='table__th table__th--reverse'>
                {pageData.cat2_sub10_txt8}
              </div>
              <div className='table__th'>{pageData.cat2_sub10_txt9}</div>
              <div className='table__th'>{pageData.cat2_sub10_txt10}</div>
            </div>

            <div className='table__body'>
              {tableData.map((row, index) => (
                <div className='table__row' key={index}>
                  <div className='table__td'>{row['rank']}</div>
                  <div className='table__td'>{row['country']}</div>
                  <div className='table__td'>{row['player-id']}</div>
                  <div className='table__td'>{row['player-name']}</div>
                  <div className='table__td'>{row['overall-winnings']}</div>
                  <div className='table__td'>{row['overall-results']}</div>
                  <div className='table__td'>{row['top-game']}</div>
                  <div className='table__td'>{row['top-game-results']}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default LeaderboardsTopWinners;
