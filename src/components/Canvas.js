import React, { PureComponent } from 'react';

class Canvas extends PureComponent {
    state = { src: '/main.pde' }

    render() {
        return (
            <canvas data-processing-sources={this.state.src} />
        );
    }
}

export default Canvas;
