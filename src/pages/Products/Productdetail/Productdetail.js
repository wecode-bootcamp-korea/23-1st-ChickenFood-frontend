import React from 'react';
import './Productdetails.scss';
import SectionOne from './SectionOne';
import LeftContainer from './LeftContainer';
import SectionTwo from './SectionTwo';
import SectionThree from './SectionThree';
import SectionFour from './SectionFour';

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
    //ip주소 /url/{this.props.location.state}
    //ip주소 //url/{this.props.match.params}

    //fetch
    // 'products//private'
    fetch('http://localhost:3000/data/mockData_detail_page.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ data: res.item });
      });

    //fetch
    // options
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
  count = e => {
    const btnId = e.target.id;
    const emptyList = [...this.state.emptyList];

    emptyList.map(el => {
      if (btnId === el.id) {
        el.quantity += 1;
        this.setState({
          emptyList,
          quantity: el.quantity,
        });
      }
    });
  };

  countMinus = e => {
    const btnId = e.target.id;
    const emptyList = [...this.state.emptyList];

    emptyList.map(el => {
      if (btnId === el.id && el.quantity > 1) {
        el.quantity -= 1;
        this.setState({
          emptyList,
          quantity: el.quantity,
        });
      }
    });
  };

  deleteList = id => {
    const filteredList = this.state.emptyList.filter(
      product => product.id !== id
    );
    this.setState({
      emptyList: filteredList,
    });
  };

  render() {
    // const emptyList = this.state.emptyList;
    // const { name, price } = this.state.data;
    // const { quantity } = this.state;
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
