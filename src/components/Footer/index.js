import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import cx from 'classnames';
import withStyle from 'react-jss';
import styles from './styles';

const contacts = [
  'fab fa-twitter',
  'fab fa-facebook-f',
  'fab fa-instagram',
  'fab fa-youtube',
  'fab fa-google-plus'
];

@withRouter
@withStyle(styles)
class Footer extends PureComponent {
  render() {
    const { classes, match: { pathname } } = this.props;
    const show = pathname !== '/buy/';
    return show ? (
      <footer className={classes.footer}>
        <hr />
        <img
          className={classes.img}
          src="/footer.png"
        />
        <section className={classes.contacts}>
          {contacts.map(iconName => (
            <i
              key={iconName}
              className={cx(iconName, classes.icon)}
            />
          ))}
        </section>
      </footer>
    ) : null;
  }
}

export default Footer;
