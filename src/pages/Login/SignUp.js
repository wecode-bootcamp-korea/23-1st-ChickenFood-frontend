import React from 'react';
import './signup.scss';

class SignUp extends React.Component {
  render() {
    return (
      <>
        <section className="layoutConfig">
          <div className="configFlexBox">
            <form className="signUpFlexBox">
              <h1>회원가입</h1>
              <div className="inputFlexBox">
                <h4>회원정보 입력</h4>
                <div className="userIdPw">
                  <div className="idFlexBox">
                    <label className="configLabel" for="userId">
                      <span>아이디</span>
                      <span className="required"> *</span>
                    </label>
                    <input type="text" id="userId" className="userIdInput" />
                    <input
                      type="button"
                      className="userIdCheck Btn"
                      value="중복확인"
                    />
                  </div>
                  <div className="idFlexBox">
                    <label className="configLabel" for="userPw">
                      <span>비밀번호</span>
                      <span className="required"> *</span>
                    </label>
                    <input type="password" id="userPw" />
                  </div>
                  <div className="idFlexBox">
                    <label className="configLabel" for="userPwCheck">
                      <span>비밀번호 확인</span>
                      <span className="required"> *</span>
                    </label>
                    <input type="password" id="userPwCheck" />
                  </div>
                </div>
                <div className="natlAddress">
                  <div className="idFlexBox">
                    <label className="configLabel" for="userPhoneNumber">
                      <span>전화번호</span>
                      <span className="required"> *</span>
                    </label>
                    <input type="number" id="userPhoneNumber" />
                  </div>
                  <div className="idFlexBox">
                    <label className="configLabel" for="userEmail">
                      <span>이메일</span>
                      <span className="required"> *</span>
                    </label>
                    <input type="text" id="userEmail" />
                  </div>
                  <div className="idFlexBox">
                    <label className="configLabel" for="userAddress">
                      <span>주소</span>
                      <span className="required"> *</span>
                    </label>
                    <input type="text" id="userAddress" />
                  </div>
                  <div className="idFlexBox">
                    <label className="configLabel" for="recommendUserId">
                      <span>추천인 아이디</span>
                    </label>
                    <input type="text" id="recommendUserId" />
                  </div>
                </div>
              </div>
              <input
                type="submit"
                className="userInfoSubmit Btn"
                value="회원가입"
              />
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default SignUp;
