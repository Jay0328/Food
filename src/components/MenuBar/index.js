import React, { PureComponent } from 'react';
import cx from 'classnames';
import withStyle from 'react-jss';
import styles from './styles';

@withStyle(styles)
class MenuBar extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <i className={cx(classes.menuBar, 'fas fa-align-justify')} />
    );
  }
}

export default MenuBar;
