import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import withStyle from 'react-jss';
import styles from './styles';

@withStyle(styles)
class Back extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <Link
        className={classes.back}
        to="/"
      >
        <i class="fas fa-angle-left"></i>
      </Link>
    );
  }
}

export default Back;
