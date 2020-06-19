import React, { useContext, useEffect, useState } from 'react';
import * as d3 from 'd3';

import TranslationContext from '../contexts/TranslationContext';

function LeaderboardsTopEarningWomen() {
  const [cardData, setCardData] = useState();
  const { lang, data } = useContext(TranslationContext);

  useEffect(() => {
    const csvFilePath = 'data/leaderboards_top-earning-women.csv';

    d3.csv(csvFilePath).then(data => {
      setCardData(data);
    });
  });

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>{data && data.cat2_sub8_title}</h1>

      <ul className='screen__desc'></ul>

      <div className='p-card-wrap cf'>
        {cardData &&
          cardData.map((card, index) => (
            <div key={index} className='p-card'>
              <div className='p-card__inner'>
                <div
                  className='p-card__head'
                  style={{ backgroundImage: `url(${card['player-photo']})` }}
                >
                  <div className='p-card__title'>
                    <h2 className='p-card__username'>{card['player-id']}</h2>
                    <span className='p-card__game'>
                      {card['main-game']} {data && data.cat2_sub8_txt2}
                    </span>
                  </div>
                </div>
                <div className='p-card__info-list'>
                  <div className='p-card__info-item'>
                    <div className='p-card__info-title'>
                      {data && data.cat2_sub8_txt1}
                    </div>
                    <div className='p-card__info-value'>
                      {card['player-name']}
                    </div>
                  </div>
                  <div className='p-card__info-item'>
                    <div className='p-card__info-title'>
                      {data && data.cat2_sub8_txt3}
                    </div>
                    <div className='p-card__info-value'>
                      {card['date-of-birth']}
                    </div>
                  </div>
                  <div className='p-card__info-item'>
                    <div className='p-card__info-title'>
                      {data && data.cat2_sub8_txt4}{' '}
                    </div>
                    <div className='p-card__info-value'>
                      {lang === 'en' ? card['country'] : card['country-fi']}
                    </div>
                  </div>
                  <div className='p-card__info-item'>
                    <div className='p-card__info-title'>
                      {data && data.cat2_sub8_txt5}
                    </div>
                    <div className='p-card__info-value'>
                      {card['total-prize']}
                      <br />
                      {lang === 'en'
                        ? card['total-years']
                        : card['total-years-fi']}
                    </div>
                  </div>
                  <div className='p-card__info-item'>
                    <div className='p-card__info-title'>
                      {data && data.cat2_sub8_txt6}
                    </div>
                    <div className='p-card__info-value'>
                      {card['tournament-wins-number']}
                    </div>
                  </div>
                </div>
                <div className='p-card__desc'>
                  {lang === 'en' ? card['description'] : card['description-fi']}
                </div>
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
                      <i className='icon-twitch' aria-hidden='true'></i>/
                      {card['twitch-url'].substring(
                        card['twitch-url'].lastIndexOf('/') + 1
                      )}
                    </a>
                    <a
                      className='p-card__links__twitter'
                      href={card['twitter-url']}
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      <i className='icon-twitter' aria-hidden='true'></i>@
                      {card['twitter-url'].substring(
                        card['twitter-url'].lastIndexOf('/') + 1
                      )}
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

export default LeaderboardsTopEarningWomen;
