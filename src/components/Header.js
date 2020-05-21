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
              <li className='nav__second-level__i'>NUMBER OF TOURNAMENTS</li>
              <li className='nav__second-level__i'>NUMBER OF PROS</li>
              <li className='nav__second-level__i'>
                AVERAGE TOURNAMENT WINNINGS
              </li>
              <li className='nav__second-level__i'>COUNTRY WINNINGS</li>
              <li className='nav__second-level__i'>PLAYER NATIONALITIES</li>
              <li className='nav__second-level__i'>PLAYER DENSITY</li>
              <li className='nav__second-level__i'>COUNTRY RANKINGS</li>
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

{
  /* <h1>
        <span style={{ color: '#00ffcc' }}>Kindred</span>{' '}
        <span style={{ color: '#ff3366' }}>E-Sports</span>
      </h1>

      <h2>Pages</h2>
      <ul style={{ fontSize: '1em' }}>
        <li>
          <Link to='/index_en'>Index (English)</Link>
        </li>
        <li>
          <Link to='/index_fi'>Index (Finnish)</Link>
        </li>
      </ul>

      <h2>Screens</h2>

      <ul style={{ fontSize: '1em' }}>
        <li>
          <Link to='/screen_main'>Main</Link>
        </li>
        <li>
          <Link to='/info_popup'>Info Popup</Link>
        </li>
        <li>
          <Link to='/embed_popup1'>Embed Popup 1</Link>
        </li>
        <li>
          <Link to='/embed_popup2'>Embed Popup 2</Link>
        </li>
        <li>
          <strong>Vertical Bar Charts</strong>
          <ul>
            <li>
              <Link to='/screen_industry_esports-viewership'>
                industry_esports-viewership
              </Link>
            </li>
            <li>
              <Link to='/screen_industry_total-prize-money-awarded'>
                industry_total-prize-money-awarded
              </Link>
            </li>
            <li>
              <Link to='/screen_industry_amount-of-esports-tournaments'>
                industry_amount-of-esports-tournaments
              </Link>
            </li>
            <li>
              <Link to='/screen_industry_number-of-pro-esports-players'>
                industry_number-of-pro-esports-players
              </Link>
            </li>
            <li>
              <Link to='/screen_industry_average-tournament-reward'>
                industry_average-tournament-reward
              </Link>
            </li>
            <li>
              <Link to='/screen_players_average-earnings-by-age'>
                players_average-earnings-by-age
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <strong>Horizontal Bar Charts</strong>
          <ul>
            <li>
              <Link to='/screen_leaderboards_top-games-by-money'>
                leaderboards_top-games-by-money
              </Link>
            </li>
            <li>
              <Link to='/screen_leaderboards_top-games-by-players'>
                leaderboards_top-games-by-players
              </Link>
            </li>
            <li>
              <Link to='/screen_leaderboards_top-games-by-tournaments'>
                leaderboards_top-games-by-tournaments
              </Link>
            </li>
            <li>
              <Link to='/screen_leaderboards_top-earning-teams'>
                leaderboards_top-earning-teams
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <strong>Area Charts</strong>
          <ul>
            <li>
              <Link to='/screen_players_common-age'>players_common-age</Link>
            </li>
          </ul>
        </li>

        <li>
          <strong>Line Charts</strong>
          <ul>
            <li>
              <Link to='/screen_industry_country-winnings-over-time'>
                industry_country-winnings-over-time
              </Link>
            </li>
            <li>
              <Link to='/screen_industry_player-origin-over-time'>
                industry_player-origin-over-time
              </Link>
            </li>
            <li>
              <Link to='/screen_industry_player-density'>
                industry_player-density
              </Link>
            </li>
            <li>
              <Link to='/screen_industry_progression-of-countries'>
                industry_progression-of-countries
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <strong>Bar-Line Charts</strong>
          <ul>
            <li>
              <Link to='/screen_games_dota-2'>games_dota-2</Link>
            </li>
            <li>
              <Link to='/screen_games_league-of-legends'>
                games_league-of-legends
              </Link>
            </li>
            <li>
              <Link to='/screen_games_counter-strike-global-offensive'>
                games_counter-strike-global-offensive
              </Link>
            </li>
            <li>
              <Link to='/screen_games_starcraft-ii'>games_starcraft-ii</Link>
            </li>
            <li>
              <Link to='/screen_games_hearthstone-heroes-of-war'>
                games_hearthstone-heroes-of-war
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <strong>Tables</strong>
          <ul>
            <li>
              <Link to='/screen_leaderboards_top-earning-players-overall'>
                leaderboards_top-earning-players-overall
              </Link>
            </li>
            <li>
              <Link to='/screen_leaderboards_top-female-players'>
                leaderboards_top-female-players
              </Link>
            </li>
            <li>
              <Link to='/screen_leaderboards_top-winners'>
                leaderboards_top-winners
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <strong>Player Profiles</strong>
          <ul>
            <li>
              <Link to='/screen_leaderboards_top-earning-men'>
                leaderboards_top-earning-men
              </Link>
            </li>
            <li>
              <Link to='/screen_leaderboards_top-earning-women'>
                leaderboards_top-earning-women
              </Link>
            </li>
          </ul>
        </li>

        <li>
          <strong>Maps</strong>
          <ul>
            <li>
              <Link to='/screen_leaderboards_top-earning-countries'>
                leaderboards_top-earning-countries
              </Link>
            </li>
            <li>
              <Link to='/screen_players_country-of-origin'>
                players_country-of-origin
              </Link>
            </li>
            <li>
              <Link to='/screen_players_male-vs-female'>
                players_male-vs-female
              </Link>
            </li>
          </ul>
        </li>
      </ul>

       */
}
