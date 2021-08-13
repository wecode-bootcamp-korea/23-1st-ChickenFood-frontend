import React from 'react';

class OneProduct extends React.Component {
  goDetail = id => {
    this.props.history.push(`/productdetail/${id}`);
    // this.props.history.push('/productdetail', id);
  };
  render() {
    const { id, name, thumbnail, price } = this.props.products;
    return (
      <div className="product">
        <img src={thumbnail} alt="product" onClick={() => this.goDetail(id)} />
        <div className="productInfo">
          <li key={id}>{name}</li>
          <p className="productPrice">
            ₩{Number(price).toLocaleString('ko-KR')}
          </p>
        </div>
      </div>
    );
  }
}

export default OneProduct;
