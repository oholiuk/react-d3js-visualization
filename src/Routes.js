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

      <Route component={NotFound}>
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}

export default Routes;
