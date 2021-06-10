import { getByDisplayValue } from '@testing-library/dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginId: '',
      loginPw: '',
    };
  }

  handleloginId = e => {
    this.setState({
      loginId: e.target.value,
    });
  };
  handleloginPw = e => {
    this.setState({
      loginPw: e.target.value,
    });
  };

  handleLogin = e => {
    if (this.state.loginId === '') {
      alert('Id를 입력해 주세요');
      return;
    } else if (this.state.loginId.length < 8) {
      alert('Id는 8글자 이상 입력해 주세요.');
      return;
    } else if (this.state.loginId.length > 12) {
      alert('Id는 12글자 이하로 입력해 주세요');
      return;
    } else if (this.state.loginPw === '') {
      alert('비밀번호를 입력해 주세요.');
      return;
    } else if (this.state.loginPw.length < 8) {
      alert('비밀번호는 8글자 이상 입력해 주세요.');
      return;
    } else if (this.state.loginPw.length > 12) {
      alert('비밀번호는 12글자 이하로 입력해 주세요');
      return;
    } else {
      alert('로그인 성공');
    }
  };

  render() {
    return (
      <div className="Login">
        <div className="backBut">
          <Link to="" className="back">
            뒤로가기
          </Link>
        </div>
        <div className="logo">
          <img src="/images/common/logo_tm.png" alt="gonggol" />
        </div>
        <div className="container">
          <div className="logintext">
            <h1>로그인</h1>
          </div>
          <div className="loginInput">
            <input
              type="text"
              className="idInput"
              placeholder="아이디"
              value={this.state.loginId}
              onChange={this.handleloginId}
            />
            <input
              type="password"
              className="psInput"
              placeholder="비밀번호"
              value={this.state.loginPw}
              onChange={this.handleloginPw}
            />
          </div>
          <div>
            <button className="button" onClick={this.handleLogin}>
              기존 회원 로그인
            </button>
          </div>
          <div className="link">
            <div>
              <Link to="" className="memberJoin">
                가입하기
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
