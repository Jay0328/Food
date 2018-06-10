const backgroundColor = '#DDD';
const inputPaddingLeft = 10;

export default {
  searchBar: {
    position: 'relative',
    width: '100%',
    marginLeft: 10,
    color: '#707070',
    backgroundColor,
  },
  searchInput: {
    fontFamily: 'ArialUnicodeMS',
    width: `calc(100% - ${inputPaddingLeft}px)`,
    paddingLeft: inputPaddingLeft,
    backgroundColor,
    border: 'none',
    lineHeight: '28px',
    outline: 'none',
  },
  searchIcon: {
    position: 'absolute',
    top: 6,
    right: 8
  }
};
