import React, { PureComponent } from 'react';
import { withRouter, Switch, Route } from 'react-router-dom';
import withStyle from 'react-jss';
import MenuBar from '../MenuBar';
import Back from '../Back';
import SearchBar from '../SearchBar';
import styles from './styles';

@withRouter
@withStyle(styles)
class Header extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <header className={classes.header}>
        <Switch>
          <Route exact strict path='/' component={MenuBar} />
          <Route exact strict path='/recipe/' component={Back} />
        </Switch>
        <SearchBar />
      </header>
    );
  }
}

export default Header;
