import React, { PureComponent } from 'react';
import withStyle from 'react-jss';
import styles from './styles';

@withStyle(styles)
class Ingredients extends PureComponent {
  static defaultProps = {
    ingredients: []
  }

  render() {
    const { classes, ingredients } = this.props;
    return (
      <p className={classes.ingredients}>
        {ingredients.map(i => (
          i ? <span key={i}>{i}</span> : <br key={i} />
        ))}
      </p>
    );
  }
}

export default Ingredients;
