import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import withStyle from 'react-jss';
import styles from './styles';

@withStyle(styles)
class Buy extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Link
        className={classes.buy}
        to="/buy/"
      >
        <span>立即購買</span>
      </Link>
    );
  }
}

export default Buy;
