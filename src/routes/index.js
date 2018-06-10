import React, { PureComponent } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import RecipeList from './RecipeList';
import Recipe from './Recipe';
import Buy from './Buy';

@withRouter
class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact strict path='/' component={RecipeList} />
        <Route exact strict path='/recipe/:index/' component={Recipe} />
        <Route exact strict path='/buy/' component={Buy} />
      </Switch>
    );
  }
}

export default Routes;
