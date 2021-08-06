import React, { Component } from 'react';
import './signin.scss';

class SignIn extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
    };
  }

  getValue = e => {
    const { name, value } = e.target;
    this.setState({
      userInfo: { ...this.state.userInfo, [name]: value },
    });
  };

  submitUserInfo = e => {
    fetch('http://10.58.2.122:8000/members/login', {
      method: 'POST',
      body: JSON.stringify(this.state.userInfo),
    })
      .then(res => res.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          alert('로그인되었습니다.');
          console.log(response);
        } else {
          alert('아이디와 비밀번호를 확인해주세요!');
          console.log(response);
        }
      });
  };

  render() {
    return (
      <>
        <section className="layoutLogin">
          <div className="loginFlexBox">
            <h1>로그인</h1>
            <div className="loginForm">
              <div className="loginInputBox">
                <div className="inputFlexBox">
                  <div className="configLabel">
                    <label for="userId">아이디</label>
                  </div>
                  <input
                    name="member"
                    type="text"
                    id="userId"
                    onChange={this.getValue}
                  />
                </div>
                <div className="inputFlexBox">
                  <div className="configLabel">
                    <label for="userPw">비밀번호</label>
                  </div>
                  <input
                    name="password"
                    type="password"
                    id="userPw"
                    onChange={this.getValue}
                  />
                </div>
              </div>
              <div className="loginBtnBox">
                <button
                  className="id loginBtn"
                  type="submit"
                  onClick={this.submitUserInfo}
                >
                  아이디 로그인
                </button>
                <button className="phone loginBtn" type="submit">
                  휴대폰 로그인
                </button>
              </div>
              <ul className="signUpFindIdPw">
                <li>
                  <a className="border" href="#">
                    회원가입
                  </a>
                </li>
                <li>
                  <a className="border" href="#">
                    아이디 찾기
                  </a>
                </li>
                <li>
                  <a href="#">비밀번호 찾기</a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SignIn;
