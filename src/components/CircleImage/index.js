import React, { PureComponent } from 'react';
import withStyle from 'react-jss';
import styles from './styles';

@withStyle(styles)
class CircleImage extends PureComponent {
  render() {
    const { classes, src, ...props } = this.props;
    return (
      <img
        className={classes.image}
        src={src}
        {...props}
      />
    );
  }
}

export default CircleImage;
