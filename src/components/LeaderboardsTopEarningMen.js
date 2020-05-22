import React from 'react';
import avatarUrl from '../data/images/1-universe.png';
import teamLogo from '../data/teams/Evil-Geniuses.jpg';

function LeaderboardsTopEarningMen() {
  function generateCards(count) {
    return [...Array(count)].map((key, index) => (
      <div key={index} className='p-card'>
        <div className='p-card__inner'>
          <div
            className='p-card__head'
            style={{ backgroundImage: `url(${avatarUrl})` }}
          >
            <div className='p-card__title'>
              <h2 className='p-card__username'>UNiVeRsE</h2>
              <span className='p-card__game'>Dota 2 Player</span>
            </div>
          </div>
          <div className='p-card__info-list'>
            <div className='p-card__info-item'>
              <div className='p-card__info-title'>Name</div>
              <div className='p-card__info-value'>Saahil Arora</div>
            </div>
            <div className='p-card__info-item'>
              <div className='p-card__info-title'>DOB</div>
              <div className='p-card__info-value'>11.10.1989</div>
            </div>
            <div className='p-card__info-item'>
              <div className='p-card__info-title'>Country </div>
              <div className='p-card__info-value'>United States</div>
            </div>
            <div className='p-card__info-item'>
              <div className='p-card__info-title'>Total Prize Money</div>
              <div className='p-card__info-value'>
                $2,720,624
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
            UNiVeRsE obtained $100,000 in total prize money earned on July 21,
            2014 with a $207,691 cash prize from his 3rd place finish at The
            International 2014. Prize money from 23 tournaments got him to that
            point.
          </div>
          <div className='p-card__links cf'>
            <div className='p-card__links__col1'>
              <div className='p-card__links__team'>
                <img
                  className='p-card__links__team-logo'
                  src={teamLogo}
                  alt='TeamLogo'
                />
                <span className='p-card__links__team-name'>Evil Geniuses</span>
              </div>
            </div>
            <div className='p-card__links__col2'>
              <a className='p-card__links__twitch' href='# ' target='_blank'>
                <i className='icon-twitch' aria-hidden='true'></i>
                /universedota
              </a>
              <a className='p-card__links__twitter' href='# ' target='_blank'>
                <i className='icon-twitter' aria-hidden='true'></i>
                @universedota
              </a>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  return (
    <article className='screen screen--sub'>
      <h1 className='screen__heading'>Top Earning Men</h1>

      <ul className='screen__desc'></ul>

      <div className='p-card-wrap cf'>{generateCards(10)}</div>
    </article>
  );
}

export default LeaderboardsTopEarningMen;
