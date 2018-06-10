export default {
  header: {
    display: 'flex',
    position: 'relative',
    padding: '16px',
    zIndex: 5,
    opacity: ({ location }) => location.pathname.includes('/recipe/') ? 0.6 : 1
  }
};
