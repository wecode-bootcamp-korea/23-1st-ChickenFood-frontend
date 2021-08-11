import React from 'react';
import './Productdetails.scss';
import SectionOne from './SectionOne';
import LeftContainer from './LeftContainer';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';

// deleteList =d  => {
//   const { items } = this.state;
//   const filteredList = items.filter(product => product.id !== id);
//   this.setState({
//     items: filteredList,
//   });
// };
// 14:11
// <button className="closeBtn" onClick={() => deleteList(id)}></button>

class Productdetail extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
      emptyList: [],
      type: [],
      totalPrice: 0,
      quantity: 1,
    };
  }

  componentDidMount() {
    fetch('http://localhost:3000/data/mockData_detail_page.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.items });
      });

    // http://10.58.7.206:8000/options

    fetch('data/mockData_detail_page_second.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ type: res.option });
      });
  }

  select = e => {
    const type = this.state.type[e.target.value].name;
    const id = this.state.type[e.target.value].id;
    this.setState({
      emptyList: this.state.emptyList.concat({
        type: type,
        quantity: 1,
        id: id,
      }),
      totalPrice: this.state.totalPrice + this.state.data.price,
    });
  };

  // 상품 수량 조절 함수
  count = () => {
    this.setState({
      quantity: this.state.quantity + 1,
    });
  };

  countMinus = () => {
    if (this.state.quantity === 1) {
      this.setState({ quantity: 1 });
    } else {
      this.setState({
        quantity: this.state.quantity - 1,
      });
    }
  };

  deleteList = id => {
    console.log(id);
    console.log(this.state.type);
    const filteredList = this.state.emptyList.filter(
      product => product.id !== id
    );
    this.setState({
      emptyList: filteredList,
    });
  };

  render() {
    const { name, price } = this.state.data;
    const { quantity } = this.state;
    return (
      <div className="productDetail">
        {/* 왼쪽 */}
        <LeftContainer />
        {/* 오른쪽 */}
        <section className="productRight">
          <div className="sectionsWrapper">
            {/* 섹션1 */}
            <SectionOne
              name={this.state.data.name}
              price={this.state.data.price}
              id={this.state.data.id}
            />
            {/* 섹션2 */}
            <SectionTwo />

            {/* 섹션3 */}
            {/* 셀렉트박스 */}
            <SectionThree select={this.select} itemType={this.state.type} />

            {/* 섹션4 */}
            {/* 수량조절/합계금액 영역 */}
            <SectionFour
              emptyList={this.state.emptyList}
              typeId={this.state.type.id}
              quantity={this.state.quantity}
              countMinus={this.countMinus}
              count={this.count}
              price={this.state.data.price}
              deleteList={this.deleteList}
              emptyListId={this.state.emptyList.id}
              type={this.state.type}
            />
          </div>
        </section>
      </div>
    );
  }
}

export default Productdetail;
