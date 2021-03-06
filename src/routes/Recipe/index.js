import React, { PureComponent, Fragment } from 'react';
import { withRouter } from 'react-router-dom';
import withStyle from 'react-jss';
import Recipe from '../../components/Recipe';
import Footer from '../../components/Footer';
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
      <Fragment>
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
        <Footer />
      </Fragment>
    );
  }
}

export default RecipePage;
