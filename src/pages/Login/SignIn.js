import React from 'react';
import './signin.scss';

class SignIn extends React.Component {
  render() {
    return (
      <>
        <section className="layoutLogin">
          <div className="loginFlexBox">
            <h1>로그인</h1>
            <form className="loginForm">
              <div className="loginInputBox">
                <div className="inputFlexBox">
                  <label className="configLabel" for="userId">
                    <span>아이디</span>
                  </label>
                  <input type="text" id="userId" />
                </div>
                <div className="inputFlexBox">
                  <label className="configLabel" for="userPw">
                    <span>비밀번호</span>
                  </label>
                  <input type="password" id="userPw" />
                </div>
              </div>
              <div className="loginBtnBox">
                <input
                  className="idLogin Btn"
                  type="submit"
                  value="아이디 로그인"
                />
                <input
                  className="phoneLogin Btn"
                  type="submit"
                  value="휴대폰 로그인"
                />
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
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default SignIn;
