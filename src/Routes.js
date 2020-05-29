import React, { useEffect, useContext } from 'react';
import { Route, useLocation } from 'react-router-dom';

import TranslationContext from './contexts/TranslationContext';

import {
  Main,
  IndustryEsportsViewership,
  IndustryTotalPrizeMoneyAwarded,
  IndustryAmountOfEsportsTournaments,
  IndustryNumberOfProEsportsPlayers,
  IndustryAverageTournamentReward,
  IndustryCountryWinningsOverTime,
  IndustryPlayerOriginOverTime,
  IndustryPlayerDensity,
  IndustryProgressionOfCountries,
  LeaderboardsTopGamesByMoney,
  LeaderboardsTopGamesByPlayers,
  LeaderboardsTopGamesByTournaments,
  LeaderboardsTopEarningTeams,
  LeaderboardsTopEarningPlayersOverall,
  LeaderboardsTopFemalePlayers,
  LeaderboardsTopEarningMen,
  LeaderboardsTopEarningWomen,
  LeaderboardsTopEarningCountries,
  PlayersAverageEarningsByAge,
  PlayersCommonAge,
  PlayersCountryOfOrigin,
  PlayersMaleVsFemale,
  GamesDota2,
  GamesLeagueOfLegends,
  GamesCounterStrikeGlobalOffensive,
  GamesStarcraftII,
  GamesHearthstoneHeroesOfWar,
  LeaderboardsTopWinners,
  NotFound
} from './components';

const HashRoute = ({ component: Component, path, ...routeProps }) => (
  <Route
    {...routeProps}
    component={({ location, ...props }) =>
      (location.hash === path || location.hash === path + '|embed') && (
        <Component {...props} />
      )
    }
  />
);

function Routes({ setLanguage }) {
  const { lang } = useContext(TranslationContext);
  const location = useLocation();
  const defaultLanguage = 'en';

  useEffect(() => {
    if (location.pathname !== '/' + lang) {
      location.pathname === '/'
        ? setLanguage(defaultLanguage)
        : setLanguage(location.pathname.slice(1));
    }
  }, [location, lang, setLanguage]);

  console.log(location, lang);

  return (
    <>
      <HashRoute
        exact
        path=''
        component={props => <Main setLanguage={setLanguage} {...props} />}
      />

      <HashRoute
        path='#industry|esports-viewership'
        component={IndustryEsportsViewership}
      />
      <HashRoute
        path='#industry|total-prize-money-awarded'
        component={IndustryTotalPrizeMoneyAwarded}
      />
      <HashRoute
        path='#industry|amount-of-esports-tournaments'
        component={IndustryAmountOfEsportsTournaments}
      />
      <HashRoute
        path='#industry|number-of-pro-esports-players'
        component={IndustryNumberOfProEsportsPlayers}
      />
      <HashRoute
        path='#industry|average-tournament-reward'
        component={IndustryAverageTournamentReward}
      />
      <HashRoute
        path='#industry|country-winnings-over-time'
        component={IndustryCountryWinningsOverTime}
      />
      <HashRoute
        path='#industry|player-origin-over-time'
        component={IndustryPlayerOriginOverTime}
      />
      <HashRoute
        path='#industry|player-density'
        component={IndustryPlayerDensity}
      />
      <HashRoute
        path='#industry|progression-of-countries'
        component={IndustryProgressionOfCountries}
      />
      <HashRoute
        path='#leaderboards|top-games-by-money'
        component={LeaderboardsTopGamesByMoney}
      />
      <HashRoute
        path='#leaderboards|top-games-by-players'
        component={LeaderboardsTopGamesByPlayers}
      />
      <HashRoute
        path='#leaderboards|top-games-by-tournaments'
        component={LeaderboardsTopGamesByTournaments}
      />
      <HashRoute
        path='#leaderboards|top-earning-teams'
        component={LeaderboardsTopEarningTeams}
      />
      <HashRoute
        path='#leaderboards|top-earning-players-overall'
        component={LeaderboardsTopEarningPlayersOverall}
      />
      <HashRoute
        path='#leaderboards|top-female-players'
        component={LeaderboardsTopFemalePlayers}
      />
      <HashRoute
        path='#leaderboards|top-earning-men'
        component={LeaderboardsTopEarningMen}
      />
      <HashRoute
        path='#leaderboards|top-earning-women'
        component={LeaderboardsTopEarningWomen}
      />
      <HashRoute
        path='#leaderboards|top-earning-countries'
        component={LeaderboardsTopEarningCountries}
      />
      <HashRoute
        path='#leaderboards|top-winners'
        component={LeaderboardsTopWinners}
      />
      <HashRoute path='#players|common-age' component={PlayersCommonAge} />
      <HashRoute
        path='#players|average-earnings-by-age'
        component={PlayersAverageEarningsByAge}
      />
      <HashRoute
        path='#players|country-of-origin'
        component={PlayersCountryOfOrigin}
      />
      <HashRoute
        path='#players|male-vs-female'
        component={PlayersMaleVsFemale}
      />
      <HashRoute path='#games|dota-2' component={GamesDota2} />
      <HashRoute
        path='#games|league-of-legends'
        component={GamesLeagueOfLegends}
      />
      <HashRoute
        path='#games|counter-strike-global-offensive'
        component={GamesCounterStrikeGlobalOffensive}
      />
      <HashRoute path='#games|starcraft-ii' component={GamesStarcraftII} />
      <HashRoute
        path='#games|hearthstone-heroes-of-war'
        component={GamesHearthstoneHeroesOfWar}
      />

      <HashRoute path='*' component={NotFound} />
    </>
  );
}

export default Routes;
