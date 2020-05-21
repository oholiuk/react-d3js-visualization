import React from 'react';
import { Switch, Route } from 'react-router-dom';

import {
  Main,
  IndustryEsportsViewership,
  IndustryTotalPrizeMoneyAwarded,
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

      {/* <Route path='/index_en'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/index_fi'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_main'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/info_popup'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/embed_popup1'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/embed_popup2'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_industry_amount-of-esports-tournaments'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_industry_number-of-pro-esports-players'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_industry_average-tournament-reward'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_players_average-earnings-by-age'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_leaderboards_top-games-by-money'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_leaderboards_top-games-by-players'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_leaderboards_top-games-by-tournaments'>
        <IndustryEsportsViewership />
      </Route>

      <Route path='/screen_leaderboards_top-earning-teams'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_players_common-age'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_industry_country-winnings-over-time'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_industry_player-origin-over-time'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_industry_player-density'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_industry_progression-of-countries'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_games_dota-2'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_games_league-of-legends'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_games_counter-strike-global-offensive'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_games_starcraft-ii'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_games_hearthstone-heroes-of-war'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_leaderboards_top-earning-players-overall'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_leaderboards_top-female-players'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_leaderboards_top-winners'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_leaderboards_top-earning-men'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_leaderboards_top-earning-women'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_leaderboards_top-earning-countries'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_players_country-of-origin'>
        <IndustryEsportsViewership />
      </Route>
      <Route path='/screen_players_male-vs-female'>
        <IndustryEsportsViewership />
      </Route> */}

      <Route component={NotFound}>
        <div>Not Found</div>
      </Route>
    </Switch>
  );
}

export default Routes;
