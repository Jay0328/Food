export default {
  recipe: {
    position: 'relative',
    fontSize: ({ fontSize = 16 }) => fontSize,
    width: ({ width }) => width,
    height: ({ height }) => height,
    padding: 25,
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    opacity: ({ opacity = 1 }) => opacity,
    userSelect: 'none',
  },
  content: {
    display: 'flex',
    height: 'calc(100% - 50px)',
  },
  header: {
    color: '#414141',
    fontSize: '1.5em',
    fontFamily: 'ArialUnicodeMS',
    marginTop: 0,
    marginBottom: 20,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 'auto',
    fontFamily: 'ArialRoundedMT',
  },
  price: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    margin: 0,
    color: '#f15a24',
    fontWeight: 900,
    '& span': {
      '&:first-child': {
        fontSize: '3em',
        marginBottom: 5
      },
      '&:last-child': {
        fontSize: '0.9em'
      }
    }
  },
  discount: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    color: '#777',
    marginTop: 'auto',
    marginBottom: 0,
    '& span': {
      '&:last-child': {
        fontSize: '1.6em'
      }
    }
  }
};
