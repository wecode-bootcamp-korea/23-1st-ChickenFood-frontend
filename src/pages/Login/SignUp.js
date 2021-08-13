import React from 'react';
import { withRouter } from 'react-router-dom';
import SignInput from '../../components/Sign/SignInput';
import SignBtn from '../../components/Sign/SignBtn';
import inputData_list from '../../components/Sign/InputData';
import '../../config.js';
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
    const { password } = this.state.userInfo;
    if (password !== value) {
      alert('비밀번호가 일치하지 않습니다.');
    }
  };

  idValidationCheck = () => {
    fetch('http://10.58.2.134:8000/members/membercheck', {
      method: 'POST',
      body: JSON.stringify(this.state.userInfo),
    })
      .then(res => res.json())
      .then(response => {
        if (response.message === 'EXIST_MEMBER') {
          alert('이미 사용 중인 아이디입니다.');
        } else {
          alert('사용 가능한 아이디입니다.');
        }
      });
  };

  submitUserInfo = e => {
    fetch('http://10.58.2.134:8000/members/signup', {
      method: 'POST',
      body: JSON.stringify(this.state.userInfo),
    })
      .then(res => res.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          alert('회원가입에 성공했습니다. 환영합니다.');
          // localStorage.setItem('token', response.access_token);
          this.props.history.push('/signin');
        } else if (response.message === 'INVALID_RECOMMEND') {
          alert('존재하지 않는 추천인 아이디입니다!');
        } else {
          alert('다시 입력해주세요!');
        }
      });
  };

  render() {
    return (
      <section className="layoutConfig">
        <div className="configFlexBox">
          <div className="signUpFlexBox">
            <h1>회원가입</h1>
            <div className="layoutInput">
              <h4>회원정보 입력</h4>
              <div className="idInput">
                <SignInput
                  label="userId"
                  name="name"
                  type="text"
                  classname="userIdInput"
                  noti="아이디 (문자열을 포함해야 합니다.)"
                  necessary="required"
                  getValue={this.getValue}
                />

                <SignBtn
                  type="button"
                  classname="userIdCheck Btn"
                  submit={this.idValidationCheck}
                  text="중복확인"
                />
              </div>

              {inputData_list.map(el => {
                return (
                  <SignInput
                    key={el.id}
                    label={el.label}
                    name={el.name}
                    type={el.type}
                    classname={el.className}
                    noti={el.noti}
                    necessary={el.necessary}
                    getValue={this.getValue}
                    validation={this.pwValidationCheck}
                  />
                );
              })}
            </div>

            <SignBtn
              type="button"
              classname="userInfoSubmit Btn"
              submit={this.submitUserInfo}
              text="회원가입"
            />
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(SignUp);
