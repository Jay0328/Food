import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import withStyle from 'react-jss';
import styles from './styles';

@withRouter
@withStyle(styles)
class Buy extends PureComponent {
  render() {
    const { classes, match: { params } } = this.props;
    return (
      <Link
        className={classes.buy}
        to={`/buy/${params.index}/`}
      >
        <span>立即購買</span>
      </Link>
    );
  }
}

export default Buy;
