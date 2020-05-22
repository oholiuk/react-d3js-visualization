import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <div className='header__home' id='header__home'>
        <Link to='/'>
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
                <Link to='/screen_industry_esports-viewership'>VIEWERSHIP</Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to='/screen_industry_total-prize-money-awarded'>
                  PRIZE MONEY
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to='/screen_industry_amount-of-esports-tournaments'>
                  NUMBER OF TOURNAMENTS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to='/screen_industry_number-of-pro-esports-players'>
                  NUMBER OF PROS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to='screen_industry_average-tournament-reward'>
                  AVERAGE TOURNAMENT WINNINGS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to='screen_industry_country-winnings-over-time'>
                  COUNTRY WINNINGS
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to='screen_industry_player-origin-over-time'>
                  PLAYER NATIONALITIES
                </Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to='screen_industry_player-density'>PLAYER DENSITY</Link>
              </li>
              <li className='nav__second-level__i'>
                <Link to='screen_industry_progression-of-countries'>
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
              <li className='nav__second-level__i'>PRIZE MONEY BY GAME</li>
              <li className='nav__second-level__i'>PLAYER COUNT BY GAME</li>
              <li className='nav__second-level__i'>TOURNAMENTS BY GAME</li>
              <li className='nav__second-level__i'>TOP EARNING TEAMS</li>
              <li className='nav__second-level__i'>TOP EARNING PLAYERS</li>
              <li className='nav__second-level__i'>TOP FEMALE PLAYERS</li>
              <li className='nav__second-level__i'>TOP EARNING MEN</li>
              <li className='nav__second-level__i'>TOP EARNING WOMEN</li>
              <li className='nav__second-level__i'>TOP COUNTRY BY WINNINGS</li>
              <li className='nav__second-level__i'>MOST PAID FINISHES</li>
            </ul>
          </div>

          <div className='nav__top-level__i'>
            <div className='nav__top-level__i__inner'>
              <i className='icon-player'></i>
              Players
            </div>

            <ul className='nav__second-level'>
              <li className='nav__second-level__i'>AGE</li>
              <li className='nav__second-level__i'>MOST PROFITABLE AGE</li>
              <li className='nav__second-level__i'>COUNTRY OF ORIGIN</li>
              <li className='nav__second-level__i'>MALE VS FEMALE</li>
            </ul>
          </div>

          <div className='nav__top-level__i'>
            <div className='nav__top-level__i__inner'>
              <i className='icon-games'></i>
              Games
            </div>

            <ul className='nav__second-level'>
              <li className='nav__second-level__i'>DOTA 2</li>
              <li className='nav__second-level__i'>LEAGUE OF LEGENDS</li>
              <li className='nav__second-level__i'>
                COUNTER-STRIKE: GLOBAL OFFENSIVE
              </li>
              <li className='nav__second-level__i'>STARCRAFT II</li>
              <li className='nav__second-level__i'>HEARTHSTONE</li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
