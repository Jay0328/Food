import React, { PureComponent } from 'react';
import { findDOMNode } from 'react-dom';
import withStyle from 'react-jss';
import styles from './styles';

@withStyle(styles)
class Gallery extends PureComponent {
  constructor(props) {
    super(props);

    const { size, count, children } = props;
    const gap = this.getGap();
    this.state = {
      gap,
      transform: 0,
    };
    this.min = -(gap + size) * (children.length - count);
  }

  componentDidUpdate(prevProps, prevState, resize) {
    if (resize) {
      const { size, count, children } = this.props;
      const gap = this.getGap();
      this.setState = ({
        gap,
        transform: 0,
      });
      this.min = -(gap + size) * (children.length - count);
    }
  }

  getSnapshotBeforeUpdate(prevProps) {
    const { width, size, count } = this.props;
    if (
      width !== prevProps.width ||
      size !== prevProps.size ||
      count !== prevProps.count
    ) {
      return true;
    }
    return null;
  }

  onDragStart = (e) => e.preventDefault()

  onMouseDown = (e) => {
    const clientX = this.getClientX(e);
    this.isDragging = true;
    this.clientX = clientX;
  }

  onMouseMove = (e) => {
    if (this.isDragging) {
      const clientX = this.getClientX(e);
      const transform = this.getTransform(clientX);
      this.clientX = clientX;
      this.setState({ transform });
    }
  }

  onMouseUp = () => {
    this.isDragging = false;
  }

  getGap = () => {
    const { width, size, count } = this.props;
    return (width - (size * count)) / (count + 1);
  }

  getClientX = (e) => e.clientX || e.changedTouches[0].clientX

  getTransform = (clientX) => {
    const transform = this.state.transform + (clientX - this.clientX);
    if (transform < this.min) {
      return this.min;
    } else if (transform > this.max) {
      return this.max;
    }
    return transform;
  }

  isDragging = false

  clientX = 0

  max = 0

  render() {
    const { classes, children } = this.props;
    const { gap, transform } = this.state;
    const style = { padding: `0 ${gap}px` };
    return (
      <section
        className={classes.gallery}
        style={style}
        onMouseDown={this.onMouseDown}
        onTouchStart={this.onMouseDown}
        onMouseMove={this.onMouseMove}
        onTouchMove={this.onMouseMove}
        onMouseUp={this.onMouseUp}
        onTouchEnd={this.onMouseUp}
      >
        {React.Children.map(children, el =>
          React.cloneElement(el, {
            onDragStart: this.onDragStart,
            style: {
              marginRight: gap,
              transform: `translateX(${transform}px)`
            }
          })
        )}
      </section>
    );
  }
}

export default Gallery;
