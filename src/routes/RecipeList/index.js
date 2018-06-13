import React, { PureComponent } from 'react';
import { withRouter, Link } from 'react-router-dom';
import withStyle from 'react-jss';
import Recipe from '../../components/Recipe';
import Gallery from '../../components/Gallery';
import CircleImage from '../../components/CircleImage';
import { recipes, ingredients } from '../../config';
import styles from './styles';

@withRouter
@withStyle(styles)
class RecipeList extends PureComponent {
  state = { recipeIndex: 0 }

  onRecommendedChange = (recipeIndex) => () => this.setState({
    recipeIndex
  })

  render() {
    const { classes } = this.props;
    const { recipeIndex } = this.state;
    return (
      <main className={classes.recipeList}>
        <Link
          className={classes.recommended}
          to={`recipe/${recipeIndex}/`}
        >
          <Recipe
            width="100%"
            height={280}
            backgroundColor="#f4f4f4"
            showImage
            index={recipeIndex}
          />
        </Link>
        <section>
          <h3 className={classes.galleryHeader}>
            推薦食譜
          </h3>
          <Gallery
            width={window.innerWidth}
            size={80}
            count={3}
          >
            {recipes.map((src, index) => (
              <CircleImage
                key={src}
                src={src}
                size={80}
                onClick={this.onRecommendedChange(index)}
              />
            ))}
          </Gallery>
        </section>
        <section>
          <h3 className={classes.galleryHeader}>
            推薦食材
          </h3>
          <Gallery
            width={window.innerWidth}
            size={60}
            count={4}
          >
            {ingredients.map(src => (
              <CircleImage
                key={src}
                src={src}
                size={60}
              />
            ))}
          </Gallery>
        </section>
      </main>
    );
  }
}

export default RecipeList;
