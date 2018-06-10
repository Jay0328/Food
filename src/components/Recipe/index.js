import React, { PureComponent } from 'react';
import cx from 'classnames';
import withStyle from 'react-jss';
import { recipesData } from '../../config';
import CircleImage from '../CircleImage';
import Ingredients from '../Ingredients';
import Buy from '../Buy';
import styles from './styles';

@withStyle(styles)
class Recipe extends PureComponent {
  render() {
    const { className, classes, index, showImage, showIngredients, showBuy } = this.props;
    const { name, src, ingredients, price, discount } = recipesData[index];
    return (
      <main className={cx(className, classes.recipe)}>
        <h2 className={classes.header}>{name}</h2>
        <main className={classes.content}>
          <section className={classes.section}>
            {
              showImage &&
              <CircleImage
                src={src}
                size={180}
              />
            }
            {
              showIngredients &&
              <Ingredients ingredients={ingredients} />
            }
            {
              showBuy &&
              <Buy />
            }
          </section>
          <aside className={classes.info}>
            <p className={classes.price}>
              <span>${price}</span>
              <span>/ 1 人份</span>
            </p>
            <p className={classes.discount}>
              <span>比在超市買</span>
              <span>省{discount}%</span>
            </p>
          </aside>
        </main>
      </main>
    );
  }
}

export default Recipe;
