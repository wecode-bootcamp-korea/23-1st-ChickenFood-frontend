import React, { Component } from 'react';
import './LeftContainer.scss';

export class LeftContainer extends Component {
  render() {
    return (
      <div>
        <section className="productLeft">
          <div className="imageWrapper">
            <img
              className="sampleImage"
              alt="product"
              src={this.props.thumbnail}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default LeftContainer;
