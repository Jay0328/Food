import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import withStyle from 'react-jss';
import styles from './styles';

@withRouter
@withStyle(styles)
class Back extends PureComponent {
  render() {
    const { classes, match: { params } } = this.props;

    return (
      <Link
        className={classes.back}
        to={{
          pathname: '/',
          state: params.index,
        }}
      >
        <i className="fas fa-angle-left"></i>
      </Link>
    );
  }
}

export default Back;
