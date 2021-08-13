import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SignBtn from '../../components/Sign/SignBtn';
import SignInput from '../../components/Sign/SignInput';
import signInData_list from '../../components/Sign/SignInData';
import ListComponent from '../../components/Nav/ListComponent';
import '../../config';
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
    console.log(this.state.userInfo);
    fetch('http://10.58.2.134:8000/members/signin', {
      method: 'POST',
      body: JSON.stringify(this.state.userInfo),
    })
      .then(res => res.json())
      .then(response => {
        if (response.message === 'SUCCESS') {
          localStorage.setItem('TOKEN', response.token);
          this.props.history.push('/main');
        } else {
          alert('아이디와 비밀번호를 확인해주세요!');
        }
      });
  };

  render() {
    return (
      <section className="layoutLogin">
        <div className="loginFlexBox">
          <h1>로그인</h1>
          <div className="loginForm">
            <div className="loginInputBox">
              {signInData_list.inputData.map(el => {
                return (
                  <SignInput
                    key={el.id}
                    label={el.label}
                    name={el.name}
                    type={el.type}
                    noti={el.noti}
                    necessary={el.necessary}
                    getValue={this.getValue}
                  />
                );
              })}
            </div>
            <div className="loginBtnBox">
              <SignBtn
                type="submit"
                classname="id loginBtn"
                text="아이디 로그인"
                submit={this.submitUserInfo}
              />
              <SignBtn
                type="submit"
                classname="phone loginBtn"
                text="휴대폰 로그인"
              />
            </div>
            <ul className="signUpFindIdPw">
              {signInData_list.listData.map(el => {
                return (
                  <ListComponent key={el.id} path={el.path} data={el.data} />
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default withRouter(SignIn);
