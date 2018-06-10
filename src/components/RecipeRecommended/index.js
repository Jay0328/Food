import React, { PureComponent } from 'react';
import withStyle from 'react-jss';
import styles from './styles';

@withStyle(styles)
class RecipeRecommended extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <img
        className={classes.recommended}
        src={this.props.src}
      />
    );
  }
}

export default RecipeRecommended;
