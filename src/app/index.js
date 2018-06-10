import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import withStyle from 'react-jss';
import ShoppingCart from '../components/ShoppingCart';
import Header from '../components/Header';
import Routes from '../routes';
import styles from './styles';

@withRouter
@withStyle(styles)
class App extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main}>
        <ShoppingCart />
        <Header />
        <Routes />
      </main>
    );
  }
}

export default App;
