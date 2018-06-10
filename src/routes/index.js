import React, { PureComponent } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import RecipeList from './RecipeList';
import Recipe from './Recipe';

@withRouter
class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact strict path='/' component={RecipeList} />
        <Route exact strict path='/recipe/:index/' component={Recipe} />
      </Switch>
    );
  }
}

export default Routes;
