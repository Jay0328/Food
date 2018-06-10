export default {
  image: ({ size }) => ({
    width: size,
    height: size,
    borderRadius: window.innerWidth < 500 ? '50%' : 0,
    userSelect: 'none',
  })
};
