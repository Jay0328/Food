import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import withStyle from 'react-jss';
import cx from 'classnames';
import styles from './styles';

@withRouter
@withStyle(styles)
class SearchBar extends PureComponent {
  state = { value: '' }

  onChange = ({ target: { value } }) => this.setState({ value })

  render() {
    const { classes, location } = this.props;
    const { value } = this.state;
    return !location.pathname.includes('/buy/') ? (
      <section className={classes.searchBar}>
        <input
          className={classes.searchInput}
          type="text"
          value={value}
          onChange={this.onChange}
          placeholder="搜尋"
        />
        <i className={cx(classes.searchIcon, 'fas fa-search')}></i>
      </section>
    ) : null;
  }
}

export default SearchBar;
