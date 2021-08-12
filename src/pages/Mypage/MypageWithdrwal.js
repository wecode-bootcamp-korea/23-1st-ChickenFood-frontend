import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import MypageIndex from './MypageIndex';
import './mypage.scss';
import './mypageWithdrwal.scss';

class Mypage extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
    };
  }

  componentDidMount = () => {
    fetch('http://10.58.5.122:8000/members', {
      method: 'GET',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.HoiaDvN9zT9u7eQ7szsnORfIMqs6oByJ5eoXjFoztqc',
      },
    })
      .then(res => res.json())
      .then(res => {
        this.setState({ userName: res.INFO.name });
      });
  };

  render() {
    return (
      <>
        <div className="layoutBody">
          <div className="layoutMyPage">
            <section className="layoutSide">
              <div className="sideFlexBox">
                <div className="aboutUser">
                  <Link to="/mypage">
                    <h2 className="title myPage">마이페이지</h2>
                  </Link>
                  <h3 className="title userName">{this.state.userName} 님</h3>
                </div>
                <div className="aboutAccount">
                  <h3 className="title myAccount">나의 계정</h3>
                  <ul>
                    <li>
                      <Link className="pageMove" to="">
                        위시리스트
                      </Link>
                    </li>
                    <li>
                      <Link className="pageMove" to="">
                        쿠폰
                      </Link>
                    </li>
                    <li>
                      <Link className="pageMove" to="">
                        회원 정보 수정
                      </Link>
                    </li>
                    <li>
                      <Link className="pageMove" to="">
                        회원 탈퇴
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="layoutMyPageBody">
              <div className="myPageMain">
                <article className="layoutWithdrwal">
                  <h3>회원 탈퇴</h3>
                  <div>
                    <div>탈퇴 사유</div>
                    <div>
                      <div onClick>
                        <input name="a" type="radio" checked />
                        배송 불만
                      </div>
                      <div>
                        <input name="a" type="radio" />
                        배송 불만
                      </div>
                      <div>
                        <input name="a" type="radio" />
                        배송 불만
                      </div>
                      <div>
                        <input name="a" type="radio" />
                        배송 불만
                      </div>
                      <div>
                        <input name="a" type="radio" />
                        배송 불만
                      </div>
                      <div>
                        <input name="a" type="radio" />
                        배송 불만
                      </div>
                      <div>
                        <input name="a" type="radio" />
                        배송 불만
                      </div>
                      <div>
                        <input name="a" type="radio" />
                        배송 불만
                      </div>
                      <div>
                        <input name="a" type="radio" />
                        배송 불만
                      </div>
                    </div>
                    <div>
                      <textarea style={{ resize: 'none' }}></textarea>
                    </div>
                    <div>
                      회원탈퇴 시 개인정보, 주문내역, 마일리지, 쿠폰 등 모든
                      정보가 바로 삭제됩니다.
                    </div>
                    <div>
                      <input type="checkbox" />
                      정보삭제에 동의합니다.
                    </div>
                  </div>
                </article>
              </div>
            </section>
          </div>
        </div>
      </>
    );
  }
}

export default Mypage;
