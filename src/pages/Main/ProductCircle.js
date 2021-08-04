import React from 'react';

class ProductCircle extends React.Component {
  render() {
    const { src, name } = this.props;
    return (
      <li>
        <img className="circle" src={src} alt="circle" />
        <p>{name}</p>
      </li>
    );
  }
}

export default ProductCircle;
