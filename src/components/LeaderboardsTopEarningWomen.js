import React from 'react';
import avatarUrl from '../data/images/1-scarlett.png';
import teamLogo from '../data/teams/Team-Expert.jpg';

function LeaderboardsTopEarningWomen() {
  function generateCards(count) {
    return [...Array(count)].map((key, index) => (
      <div key={index} className='p-card p-card--female'>
        <div className='p-card__inner'>
          <div
            className='p-card__head'
            style={{ backgroundImage: `url(${avatarUrl})` }}
          >
            <div className='p-card__title'>
              <h2 className='p-card__username'>Scarlett</h2>
              <span className='p-card__game'>Fighting Game Player</span>
            </div>
          </div>
          <div className='p-card__info-list'>
            <div className='p-card__info-item'>
              <div className='p-card__info-title'>Name</div>
              <div className='p-card__info-value'>Sasha Hostyn</div>
            </div>
            <div className='p-card__info-item'>
              <div className='p-card__info-title'>DOB</div>
              <div className='p-card__info-value'>14.12.1993</div>
            </div>
            <div className='p-card__info-item'>
              <div className='p-card__info-title'>Country </div>
              <div className='p-card__info-value'>Canada</div>
            </div>
            <div className='p-card__info-item'>
              <div className='p-card__info-title'>Total Prize Money</div>
              <div className='p-card__info-value'>
                $171,425
                <br />
                (Over 5 years)
              </div>
            </div>
            <div className='p-card__info-item'>
              <div className='p-card__info-title'>Tournament wins</div>
              <div className='p-card__info-value'>20</div>
            </div>
          </div>
          <div className='p-card__desc'>
            Scarlett obtained $100,000 in total prize money earned on July 27,
            2014 with a $2,000 cash prize from her 1st place finish at ATC
            Season 3. Prize money from 45 tournaments got her to that point.
          </div>
          <div className='p-card__links cf'>
            <div className='p-card__links__col1'>
              <div className='p-card__links__team'>
                <img
                  className='p-card__links__team-logo'
                  src={teamLogo}
                  alt='TeamLogo'
                />
                <span className='p-card__links__team-name'>Team Expert</span>
              </div>
            </div>
            <div className='p-card__links__col2'>
              <a className='p-card__links__twitch' href='# ' target='_blank'>
                <i className='icon-twitch' aria-hidden='true'></i>
                /scarlettm
              </a>
              <a className='p-card__links__twitter' href='# ' target='_blank'>
                <i className='icon-twitter' aria-hidden='true'></i>
                @onfireScarlett
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>Top Earning Women</h1>

      <ul className='screen__desc'></ul>

      <div className='p-card-wrap cf'>{generateCards(10)}</div>
    </article>
  );
}

export default LeaderboardsTopEarningWomen;
