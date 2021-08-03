import React from 'react';
import './signup.scss';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
    };
  }

  getValue = e => {
    const { name, value } = e.target;
    let userInfo = this.state.userInfo;
    userInfo[name] = value;
  };

  // 비밀번호 확인 유효성 검사 기능 구현
  pwValidationCheck = e => {
    const { value } = e.target;
    let password = this.state.userInfo.password;
    if (!value) {
      console.log('');
    } else if (password !== value) {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  submitUserInfo = e => {
    e.preventDefault();
    // fetch();
  };

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
                    <label className="configLabel" htmlFor="userId">
                      <span>아이디</span>
                      <span className="required"> *</span>
                    </label>
                    <input
                      name="name"
                      type="text"
                      id="userId"
                      className="userIdInput"
                      onChange={this.getValue}
                    />
                    <input
                      type="button"
                      className="userIdCheck Btn"
                      value="중복확인"
                      onChange={this.getValue}
                    />
                  </div>
                  <div className="idFlexBox">
                    <label className="configLabel" htmlFor="userPw">
                      <span>비밀번호 (8자리 이상 입력해 주세요.)</span>
                      <span className="required"> *</span>
                    </label>
                    <input
                      name="password"
                      type="password"
                      id="userPw"
                      onChange={this.getValue}
                    />
                  </div>
                  <div className="idFlexBox">
                    <label className="configLabel" htmlFor="userPwCheck">
                      <span>비밀번호 확인</span>
                      <span className="required"> *</span>
                    </label>
                    <input
                      name="passwordCheck"
                      type="password"
                      id="userPwCheck"
                      onBlur={this.pwValidationCheck}
                    />
                  </div>
                </div>
                <div className="natlAddress">
                  <div className="idFlexBox">
                    <label className="configLabel" htmlFor="userPhoneNumber">
                      <span>전화번호 (ex. 010-1234-5678)</span>
                      <span className="required"> *</span>
                    </label>
                    <input
                      name="phone_number"
                      type="number"
                      id="userPhoneNumber"
                      onChange={this.getValue}
                    />
                  </div>
                  <div className="idFlexBox">
                    <label className="configLabel" htmlFor="userEmail">
                      <span>이메일</span>
                      <span className="required"> *</span>
                    </label>
                    <input
                      name="email"
                      type="text"
                      id="userEmail"
                      onChange={this.getValue}
                    />
                  </div>
                  <div className="idFlexBox">
                    <label className="configLabel" htmlFor="userAddress">
                      <span>주소</span>
                      <span className="required"> *</span>
                    </label>
                    <input
                      name="address"
                      type="text"
                      id="userAddress"
                      onChange={this.getValue}
                    />
                  </div>
                  <div className="idFlexBox">
                    <label className="configLabel" htmlFor="recommendUserId">
                      <span>추천인 아이디</span>
                    </label>
                    <input
                      name="recommender_name"
                      type="text"
                      id="recommendUserId"
                      onChange={this.getValue}
                    />
                  </div>
                </div>
              </div>
              <input
                type="submit"
                className="userInfoSubmit Btn"
                value="회원가입"
                onClick={this.submitUserInfo}
              />
            </form>
          </div>
        </section>
      </>
    );
  }
}

export default SignUp;
