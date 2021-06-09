import { getByDisplayValue } from '@testing-library/dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

class Login extends Component {
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
            <input type="text" className="idInput" placeholder="아이디" />
            <input type="password" className="psInput" placeholder="비밀번호" />
          </div>
          <div>
            <button className="button">기존 회원 로그인</button>
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
