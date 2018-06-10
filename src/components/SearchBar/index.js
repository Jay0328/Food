import React, { PureComponent } from 'react';
import withStyle from 'react-jss';
import cx from 'classnames';
import styles from './styles';

@withStyle(styles)
class SearchBar extends PureComponent {
  state = { value: '' }

  onChange = ({ target: { value } }) => this.setState({ value })

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
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
    );
  }
}

export default SearchBar;
