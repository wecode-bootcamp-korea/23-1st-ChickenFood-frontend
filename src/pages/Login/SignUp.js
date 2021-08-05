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
    this.setState({
      userInfo: { ...this.state.userInfo, [name]: value },
    });
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
    fetch('http://10.58.2.122:8000/members/agreement', {
      method: 'POST',
      body: JSON.stringify(this.state.userInfo),
    })
      .then(res => res.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          alert('회원가입에 성공했습니다. 환영합니다.');
          console.log(response);
        } else {
          alert('다시 입력해주세요!');
          console.log(response);
        }
      });
  };

  render() {
    return (
      <>
        <section className="layoutConfig">
          <div className="configFlexBox">
            <div className="signUpFlexBox">
              <h1>회원가입</h1>
              <div className="layoutInput">
                <h4>회원정보 입력</h4>
                <div className="idInput">
                  <form className="inputFlexBox">
                    <div className="configLabel">
                      <label htmlFor="userId">
                        <span className="required">* </span>
                        <span>아이디 (문자열을 포함해야 합니다.)</span>
                      </label>
                    </div>
                    <input
                      name="name"
                      type="text"
                      id="userId"
                      className="userIdInput"
                      onChange={this.getValue}
                    />
                  </form>
                  <button
                    type="button"
                    className="userIdCheck Btn"
                    onChange={this.getValue}
                  >
                    중복확인
                  </button>
                </div>
                <form className="inputFlexBox">
                  <div className="configLabel">
                    <label htmlFor="userPw">
                      <span className="required">* </span>
                      <span>비밀번호 (8자리 이상 입력해 주세요.)</span>
                    </label>
                  </div>
                  <input
                    name="password"
                    type="password"
                    id="userPw"
                    onChange={this.getValue}
                  />
                </form>
                <form className="inputFlexBox">
                  <div className="configLabel">
                    <label htmlFor="userPwCheck">
                      <span className="required">* </span>
                      <span>비밀번호 확인</span>
                    </label>
                  </div>
                  <input
                    name="passwordCheck"
                    type="password"
                    id="userPwCheck"
                    onBlur={this.pwValidationCheck}
                  />
                </form>
                <form className="inputFlexBox">
                  <div className="configLabel">
                    <label htmlFor="userPhoneNumber">
                      <span className="required">* </span>
                      <span>전화번호 (ex. 010-1234-5678)</span>
                    </label>
                  </div>
                  <input
                    name="phone_number"
                    type="text"
                    id="userPhoneNumber"
                    onChange={this.getValue}
                  />
                </form>
                <form className="inputFlexBox">
                  <div className="configLabel">
                    <label htmlFor="userEmail">
                      <span className="required">* </span>
                      <span>이메일</span>
                    </label>
                  </div>
                  <input
                    name="email"
                    type="text"
                    id="userEmail"
                    onChange={this.getValue}
                  />
                </form>
                <form className="inputFlexBox">
                  <div lassName="configLabel">
                    <label className="configLabel" htmlFor="userAddress">
                      <span>주소</span>
                    </label>
                  </div>
                  <input
                    name="address"
                    type="text"
                    id="userAddress"
                    onChange={this.getValue}
                  />
                </form>
                <form className="inputFlexBox">
                  <div className="configLabel">
                    <label htmlFor="recommendUserId">
                      <span>추천인 아이디</span>
                    </label>
                  </div>
                  <input
                    name="recommender_name"
                    type="text"
                    id="recommendUserId"
                    onChange={this.getValue}
                  />
                </form>
              </div>
              <button
                className="userInfoSubmit Btn"
                placeholder="회원가입"
                onClick={this.submitUserInfo}
              >
                회원가입
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default SignUp;
