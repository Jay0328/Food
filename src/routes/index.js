import React, { PureComponent } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';

import RecipeList from './RecipeList';

@withRouter
class Routes extends PureComponent {
  render() {
    return (
      <Switch>
        <Route exact strict path='/' component={RecipeList} />
      </Switch>
    );
  }
}

export default Routes;
