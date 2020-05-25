import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import TranslationContext from '../contexts/TranslationContext';

function Header() {
  const t = useContext(TranslationContext);

  return (
    <header className='header'>
      <div className='header__home' id='header__home'>
        <Link to={`/${t.lang}`}>
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
              Industry
            </div>

            <ul className='nav__second-level'>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#industry|esports-viewership`}>
                  VIEWERSHIP
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#industry|total-prize-money-awarded`}>
                  PRIZE MONEY
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#industry|amount-of-esports-tournaments`}>
                  NUMBER OF TOURNAMENTS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#industry|number-of-pro-esports-players`}>
                  NUMBER OF PROS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#industry|average-tournament-reward`}>
                  AVERAGE TOURNAMENT WINNINGS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#industry|country-winnings-over-time`}>
                  COUNTRY WINNINGS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#industry|player-origin-over-time`}>
                  PLAYER NATIONALITIES
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#industry|player-density`}>
                  PLAYER DENSITY
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#industry|progression-of-countries`}>
                  COUNTRY RANKINGS
                </Link>
              </li>
            </ul>
          </div>

          <div className='nav__top-level__i'>
            <div className='nav__top-level__i__inner'>
              <i className='icon-leaderboard'></i>
              Leaderboards
            </div>

            <ul className='nav__second-level'>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#leaderboards|top-games-by-money`}>
                  PRIZE MONEY BY GAME
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#leaderboards|top-games-by-players`}>
                  PLAYER COUNT BY GAME
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#leaderboards|top-games-by-tournaments`}>
                  TOURNAMENTS BY GAME
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#leaderboards|top-earning-teams`}>
                  TOP EARNING TEAMS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link
                  to={`/${t.lang}#leaderboards|top-earning-players-overall`}
                >
                  TOP EARNING PLAYERS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#leaderboards|top-female-players`}>
                  TOP FEMALE PLAYERS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#leaderboards|top-earning-men`}>
                  TOP EARNING MEN
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#leaderboards|top-earning-women`}>
                  TOP EARNING WOMEN
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#leaderboards|top-earning-countries`}>
                  TOP COUNTRY BY WINNINGS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#leaderboards|top-winners`}>
                  MOST PAID FINISHES
                </Link>
              </li>
            </ul>
          </div>

          <div className='nav__top-level__i'>
            <div className='nav__top-level__i__inner'>
              <i className='icon-player'></i>
              Players
            </div>

            <ul className='nav__second-level'>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#players|common-age`}>AGE</Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#players|average-earnings-by-age`}>
                  MOST PROFITABLE AGE
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#players|country-of-origin`}>
                  COUNTRY OF ORIGIN
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#players|male-vs-female`}>
                  MALE VS FEMALE
                </Link>
              </li>
            </ul>
          </div>

          <div className='nav__top-level__i'>
            <div className='nav__top-level__i__inner'>
              <i className='icon-games'></i>
              Games
            </div>

            <ul className='nav__second-level'>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#games|dota-2`}>DOTA 2</Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#games|league-of-legends`}>
                  LEAGUE OF LEGENDS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#games|counter-strike-global-offensive`}>
                  COUNTER-STRIKE: GLOBAL OFFENSIVE
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#games|starcraft-ii`}>STARCRAFT II</Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to={`/${t.lang}#games|hearthstone-heroes-of-war`}>
                  HEARTHSTONE
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
