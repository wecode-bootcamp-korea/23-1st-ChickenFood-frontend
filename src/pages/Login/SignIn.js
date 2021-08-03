import React from 'react';
import './signin.scss';

class SignIn extends React.Component {
  render() {
    return (
      <>
        <section className="layout_login">
          <div className="loginFlexBox">
            <h1>로그인</h1>
            <form className="loginForm">
              <div className="loginInputBox">
                <div className="inputFlexBox">
                  <label className="configLabel" for="userId">
                    <span>아이디</span>
                    <input type="text" />
                  </label>
                </div>
                <label className="configLabel" for="userId">
                  <span>아이디</span>
                  <input type="password" placeholder="비밀번호"></input>
                </label>
              </div>
              <div className="loginBtnBox">
                <input type="submit" value="아이디 로그인" />
                <input type="submit" value="휴대폰 로그인" />
              </div>
              <ul>
                <li>
                  <a href="#">회원가입</a>
                </li>
                <li>
                  <a href="#">아이디 찾기</a>
                </li>
                <li>
                  <a href="#">비밀번호 찾기</a>
                </li>
              </ul>
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default SignIn;
