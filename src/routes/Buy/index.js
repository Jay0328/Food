import React, { PureComponent, Fragment } from 'react';
import withStyle from 'react-jss';
import processing from '../../../processing';
import styles from './styles';

@withStyle(styles)
class Buy extends PureComponent {
  constructor(props) {
    super(props);
    this.src = processing.join(' ');
    const isLoad = window.sessionStorage.getItem('isLoad') === 'true';
    window.sessionStorage.setItem('isLoad', !isLoad);
    if (!isLoad) {
      window.location.reload();
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <canvas
          className={classes.processing}
          data-processing-sources={this.src}
        />
      </Fragment>
    );
  }
}

export default Buy;
