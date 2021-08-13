import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Mypage.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    fetch('http://10.58.2.249:8000/members', {
      method: 'GET',
      headers: {
        Authorization: localStorage.getItem('TOKEN'),
      },
    })
      .then(res => res.json())
      .then(res => {
        console.log('res', res);
        this.setState({ userName: res.result.name });
      });
  };

  render() {
    const TOKEN = localStorage.getItem('TOKEN');
    if (!TOKEN) {
      this.props.history.push('/signin');
    }

    return (
      <div className="layoutBody">
        <div className="layoutMyPage">
          <section className="layoutSide">
            <div className="sideFlexBox">
              <div className="aboutUser">
                <Link>
                  <h2 className="title myPage">마이페이지</h2>
                </Link>
                <h3 className="title userName">{this.state.userName} 님</h3>
              </div>
              <div className="aboutAccount">
                <h3 className="title myAccount">나의 계정</h3>
                <ul>
                  <li>
                    <Link className="pageMove wishlist" to="/wishlist">
                      위시리스트
                    </Link>
                  </li>
                  <li>
                    <Link className="pageMove" to="#">
                      회원 정보 수정
                    </Link>
                  </li>
                  <li>
                    <Link className="pageMove" to="#">
                      회원 탈퇴
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          <section className="layoutMyPageBody">
            <div className="myPageMain">
              <div>
                <article className="levelBox">
                  <div className="levelBoxCircleContainer">
                    <div className="circle">
                      <p>현재 등급</p>
                      <p className="level">일반</p>
                    </div>
                    <p className="untilNextLevel">
                      다음 등급인 VIP까지 80,000원 남았습니다.
                    </p>
                    <div className="levelStepBar">
                      <img src="images/levelStepBar.png" />
                    </div>
                  </div>
                  <div className="levelBoxInnerContainer">
                    <div className="iconList">
                      <img src="images/point.png" />
                      <div className="textBox">
                        <span>포인트</span>
                        <span className="textSize">0p</span>
                      </div>
                    </div>
                    <div className="iconList">
                      <img src="images/voucher.png" />
                      <div className="textBox">
                        <span>쿠폰</span>
                        <span className="textSize">1</span>
                      </div>
                    </div>
                  </div>
                </article>
                <article className="deliveryCheckBox">
                  <div className="title">주문/배송</div>
                  <ul className="deliverProcess">
                    <li>
                      <div className="productNums">0</div>
                      <div>주문접수</div>
                    </li>
                    <li className="sign">&#62;</li>
                    <li>
                      <div className="productNums">0</div>
                      <div>결제완료</div>
                    </li>
                    <li className="sign">&#62;</li>
                    <li>
                      <div className="productNums">0</div>
                      <div>상품준비중</div>
                    </li>
                    <li className="sign">&#62;</li>
                    <li>
                      <div className="productNums">0</div>
                      <div>배송중</div>
                    </li>
                    <li className="sign">&#62;</li>
                    <li>
                      <div className="productNums">0</div>
                      <div>배송완료</div>
                    </li>
                  </ul>
                </article>
                <article className="reviewBox">
                  <div className="title">작성 가능한 리뷰</div>
                  <div className="reviewBoard">
                    <p>리뷰를 작성할 수 있는 주문내역이 없습니다.</p>
                  </div>
                </article>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default withRouter(Mypage);
