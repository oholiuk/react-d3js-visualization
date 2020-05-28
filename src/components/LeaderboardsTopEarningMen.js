import React, { useContext } from 'react';

import VisualizationContext from '../contexts/VisualizationContext';
import TranslationContext from '../contexts/TranslationContext';

function LeaderboardsTopEarningMen() {
  const vizData = useContext(VisualizationContext);
  const cardData = vizData['leaderboards|top-earning-men'].elements;

  const { data } = useContext(TranslationContext);

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>{data && data.cat2_sub7_title}</h1>

      <ul className='screen__desc'></ul>

      <div className='p-card-wrap cf'>
        {cardData.map((card, index) => (
          <div key={index} className='p-card'>
            <div className='p-card__inner'>
              <div
                className='p-card__head'
                style={{ backgroundImage: `url(${card['player-photo']})` }}
              >
                <div className='p-card__title'>
                  <h2 className='p-card__username'>{card['player-id']}</h2>
                  <span className='p-card__game'>
                    {card['main-game']} {data && data.cat2_sub7_txt2}
                  </span>
                </div>
              </div>
              <div className='p-card__info-list'>
                <div className='p-card__info-item'>
                  <div className='p-card__info-title'>
                    {data && data.cat2_sub7_txt1}
                  </div>
                  <div className='p-card__info-value'>
                    {card['player-name']}
                  </div>
                </div>
                <div className='p-card__info-item'>
                  <div className='p-card__info-title'>
                    {data && data.cat2_sub7_txt3}
                  </div>
                  <div className='p-card__info-value'>
                    {card['date-of-birth']}
                  </div>
                </div>
                <div className='p-card__info-item'>
                  <div className='p-card__info-title'>
                    {data && data.cat2_sub7_txt4}{' '}
                  </div>
                  <div className='p-card__info-value'>{card['country']}</div>
                </div>
                <div className='p-card__info-item'>
                  <div className='p-card__info-title'>
                    {data && data.cat2_sub7_txt5}
                  </div>
                  <div className='p-card__info-value'>
                    ${card['total-prize']}
                    <br />
                    (Over 5 years)
                  </div>
                </div>
                <div className='p-card__info-item'>
                  <div className='p-card__info-title'>
                    {data && data.cat2_sub7_txt6}
                  </div>
                  <div className='p-card__info-value'>
                    {card['tournament-wins-number']}
                  </div>
                </div>
              </div>
              <div className='p-card__desc'>{card['description']}</div>
              <div className='p-card__links cf'>
                <div className='p-card__links__col1'>
                  <div className='p-card__links__team'>
                    <img
                      className='p-card__links__team-logo'
                      src={card['team-logo']}
                      alt='TeamLogo'
                    />
                    <span className='p-card__links__team-name'>
                      {card['team-name']}
                    </span>
                  </div>
                </div>
                <div className='p-card__links__col2'>
                  <a
                    className='p-card__links__twitch'
                    href={card['twitch-url']}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='icon-twitch' aria-hidden='true'></i>
                    /universedota
                  </a>
                  <a
                    className='p-card__links__twitter'
                    href={card['twitter-url']}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <i className='icon-twitter' aria-hidden='true'></i>
                    @universedota
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </article>
  );
}

export default LeaderboardsTopEarningMen;
