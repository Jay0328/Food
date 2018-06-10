import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import withStyle from 'react-jss';
import RecipeRecommended from '../../components/RecipeRecommended';
import Gallery from '../../components/Gallery';
import CircleImage from '../../components/CircleImage';
import { recipeRecommendeds, recipes, ingredients } from '../../config';
import styles from './styles';

@withRouter
@withStyle(styles)
class RecipeList extends PureComponent {
  state = { recommendedIndex: 0 }

  onRecommendedChange = (recommendedIndex) => () => this.setState({
    recommendedIndex
  })

  render() {
    const { classes } = this.props;
    const { recommendedIndex } = this.state;
    return (
      <main>
        <RecipeRecommended
          src={recipeRecommendeds[recommendedIndex]}
        />
        <section>
          <h3 className={classes.galleryHeader}>
            其他食譜
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
            單買食材
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
