import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import TranslationContext from '../contexts/TranslationContext';

function Header() {
  const { lang, defaultLanguage, data } = useContext(TranslationContext);
  const { pathname } = useLocation();
  const prefix = lang === defaultLanguage ? '' : lang;
  const prepath = pathname.substr(0, pathname.lastIndexOf('/'));

  return (
    <header className='header'>
      <div className='header__home' id='header__home'>
        <Link to={`${prepath}/${prefix}`}>
          <img
            src='assets/img/logo.png'
            alt='Home'
            className='header__home__img'
          />
        </Link>
      </div>

      <nav className='nav' id='nav'>
        <div className='nav__top-level'>
          <div className='nav__top-level__i'>
            <div className='nav__top-level__i__inner'>
              <i className='icon-industry'></i>
              {data && data.cat1}
            </div>

            <ul className='nav__second-level'>
              <li className='nav__second-level__i'>
                <Link to={`${prepath}/${prefix}#industry|esports-viewership`}>
                  {data && data.cat1_sub1}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#industry|total-prize-money-awarded`}
                >
                  {data && data.cat1_sub2}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#industry|amount-of-esports-tournaments`}
                >
                  {data && data.cat1_sub3}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#industry|number-of-pro-esports-players`}
                >
                  {data && data.cat1_sub4}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#industry|average-tournament-reward`}
                >
                  {data && data.cat1_sub5}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#industry|country-winnings-over-time`}
                >
                  {data && data.cat1_sub6}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#industry|player-origin-over-time`}
                >
                  {data && data.cat1_sub7}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`${prepath}/${prefix}#industry|player-density`}>
                  {data && data.cat1_sub8}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#industry|progression-of-countries`}
                >
                  {data && data.cat1_sub9}
                </Link>
              </li>
            </ul>
          </div>

          <div className='nav__top-level__i'>
            <div className='nav__top-level__i__inner'>
              <i className='icon-leaderboard'></i>
              {data && data.cat2}
            </div>

            <ul className='nav__second-level'>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#leaderboards|top-games-by-money`}
                >
                  {data && data.cat2_sub1}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#leaderboards|top-games-by-players`}
                >
                  {data && data.cat2_sub2}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#leaderboards|top-games-by-tournaments`}
                >
                  {data && data.cat2_sub3}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#leaderboards|top-earning-teams`}
                >
                  {data && data.cat2_sub4}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#leaderboards|top-earning-players-overall`}
                >
                  {data && data.cat2_sub5}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#leaderboards|top-female-players`}
                >
                  {data && data.cat2_sub6}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`${prepath}/${prefix}#leaderboards|top-earning-men`}>
                  {data && data.cat2_sub7}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#leaderboards|top-earning-women`}
                >
                  {data && data.cat2_sub8}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#leaderboards|top-earning-countries`}
                >
                  {data && data.cat2_sub9}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`${prepath}/${prefix}#leaderboards|top-winners`}>
                  {data && data.cat2_sub10}
                </Link>
              </li>
            </ul>
          </div>

          <div className='nav__top-level__i'>
            <div className='nav__top-level__i__inner'>
              <i className='icon-player'></i>
              {data && data.cat3}
            </div>

            <ul className='nav__second-level'>
              <li className='nav__second-level__i'>
                <Link to={`${prepath}/${prefix}#players|common-age`}>
                  {data && data.cat3_sub1}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#players|average-earnings-by-age`}
                >
                  {data && data.cat3_sub2}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`${prepath}/${prefix}#players|country-of-origin`}>
                  {data && data.cat3_sub3}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`${prepath}/${prefix}#players|male-vs-female`}>
                  {data && data.cat3_sub4}
                </Link>
              </li>
            </ul>
          </div>

          <div className='nav__top-level__i'>
            <div className='nav__top-level__i__inner'>
              <i className='icon-games'></i>
              {data && data.cat4}
            </div>

            <ul className='nav__second-level'>
              <li className='nav__second-level__i'>
                <Link to={`${prepath}/${prefix}#games|dota-2`}>
                  {data && data.cat4_sub1}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`${prepath}/${prefix}#games|league-of-legends`}>
                  {data && data.cat4_sub2}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#games|counter-strike-global-offensive`}
                >
                  {data && data.cat4_sub3}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`${prepath}/${prefix}#games|starcraft-ii`}>
                  {data && data.cat4_sub4}
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`${prepath}/${prefix}#games|hearthstone-heroes-of-war`}
                >
                  {data && data.cat4_sub5}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
