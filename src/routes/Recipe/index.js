import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import withStyle from 'react-jss';
import Recipe from '../../components/Recipe';
import { recipesData } from '../../config';
import styles from './styles';

@withRouter
@withStyle(styles)
class RecipePage extends PureComponent {
  render() {
    const { classes, match } = this.props;
    const { index } = match.params;
    const { src } = recipesData[index];
    return (
      <main className={classes.recipePage}>
        <img
          className={classes.recipeImg}
          src={src}
        />
        <Recipe
          className={classes.recipe}
          width={340}
          height={340}
          backgroundColor="white"
          opacity={0.8}
          showIngredients
          showBuy
          index={index}
        />
      </main>
    );
  }
}

export default RecipePage;
