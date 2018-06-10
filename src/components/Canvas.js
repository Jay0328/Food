import React, { PureComponent } from 'react';
import processing from '../../processing';

class Canvas extends PureComponent {
  constructor(props) {
    super(props);
    this.src = processing.join(' ');
  }

  render() {
    return (
      <canvas data-processing-sources={this.src} />
    );
  }
}

export default Canvas;
