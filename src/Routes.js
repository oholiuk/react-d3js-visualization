import React from 'react';
import { Switch, Route } from 'react-router-dom';

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
  GamesDota2,
  GamesLeagueOfLegends,
  GamesCounterStrikeGlobalOffensive,
  GamesStarcraftII,
  GamesHearthstoneHeroesOfWar,
  LeaderboardsTopWinners,
  NotFound
} from './components';

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Main} />

      <Route
        path='/screen_industry_esports-viewership'
        component={IndustryEsportsViewership}
      />
      <Route
        path='/screen_industry_total-prize-money-awarded'
        component={IndustryTotalPrizeMoneyAwarded}
      />
      <Route
        path='/screen_industry_amount-of-esports-tournaments'
        component={IndustryAmountOfEsportsTournaments}
      />
      <Route
        path='/screen_industry_number-of-pro-esports-players'
        component={IndustryNumberOfProEsportsPlayers}
      />
      <Route
        path='/screen_industry_average-tournament-reward'
        component={IndustryAverageTournamentReward}
      />
      <Route
        path='/screen_industry_country-winnings-over-time'
        component={IndustryCountryWinningsOverTime}
      />
      <Route
        path='/screen_industry_player-origin-over-time'
        component={IndustryPlayerOriginOverTime}
      />
      <Route
        path='/screen_industry_player-density'
        component={IndustryPlayerDensity}
      />
      <Route
        path='/screen_industry_progression-of-countries'
        component={IndustryProgressionOfCountries}
      />
      <Route
        path='/screen_leaderboards_top-games-by-money'
        component={LeaderboardsTopGamesByMoney}
      />
      <Route
        path='/screen_leaderboards_top-games-by-players'
        component={LeaderboardsTopGamesByPlayers}
      />
      <Route
        path='/screen_leaderboards_top-games-by-tournaments'
        component={LeaderboardsTopGamesByTournaments}
      />
      <Route
        path='/screen_leaderboards_top-earning-teams'
        component={LeaderboardsTopEarningTeams}
      />
      <Route
        path='/screen_leaderboards_top-earning-players-overall'
        component={LeaderboardsTopEarningPlayersOverall}
      />
      <Route
        path='/screen_leaderboards_top-female-players'
        component={LeaderboardsTopFemalePlayers}
      />
      <Route
        path='/screen_leaderboards_top-earning-men'
        component={LeaderboardsTopEarningMen}
      />
      <Route
        path='/screen_leaderboards_top-earning-women'
        component={LeaderboardsTopEarningWomen}
      />
      <Route
        path='/screen_leaderboards_top-earning-countries'
        component={LeaderboardsTopEarningCountries}
      />
      <Route path='/screen_players_common-age' component={PlayersCommonAge} />
      <Route
        path='/screen_players_average-earnings-by-age'
        component={PlayersAverageEarningsByAge}
      />
      <Route path='/screen_games_dota-2' component={GamesDota2} />
      <Route
        path='/screen_games_league-of-legends'
        component={GamesLeagueOfLegends}
      />
      <Route
        path='/screen_games_counter-strike-global-offensive'
        component={GamesCounterStrikeGlobalOffensive}
      />
      <Route path='/screen_games_starcraft-ii' component={GamesStarcraftII} />
      <Route
        path='/screen_games_hearthstone-heroes-of-war'
        component={GamesHearthstoneHeroesOfWar}
      />
      <Route
        path='/screen_leaderboards_top-winners'
        component={LeaderboardsTopWinners}
      />

      <Route component={NotFound}>
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}

export default Routes;
