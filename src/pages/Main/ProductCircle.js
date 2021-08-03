import React from 'react';

class ProductCircle extends React.Component {
  render() {
    return (
      <li>
        <img className="circle" src={this.props.src} alt="circle" />
        <p>{this.props.name}</p>
      </li>
    );
  }
}

export default ProductCircle;
