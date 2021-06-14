import { getByDisplayValue } from '@testing-library/dom';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { INPUTS } from 'react-router-dom';
import InputBox from './InputBox/InputBox';
import './Login.scss';

class Login extends Component {
  constructor() {
    super();
    this.state = {
      loginId: '',
      loginPw: '',
    };
  }

  handleloginInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleLogin = e => {
    if (this.state.loginId === '') {
      alert('아이디 항목은 필수 입력값입니다.');
      return;
    } else if (this.state.loginId.length < 8) {
      alert('Id는 8글자 이상 입력해 주세요.');
      return;
    } else if (this.state.loginId.length > 12) {
      alert('Id는 12글자 이하로 입력해 주세요');
      return;
    } else if (this.state.loginPw === '') {
      alert('패스워드 항목은 필수 입력값입니다.');
      return;
    } else if (this.state.loginPw.length < 8) {
      alert('비밀번호는 8글자 이상 입력해 주세요.');
      return;
    } else if (this.state.loginPw.length > 12) {
      alert('비밀번호는 12글자 이하로 입력해 주세요');
      return;
    }

    //로그인 버튼 클릭시 서버로 데이터 전송
    fetch('http://10.58.4.15:8000/users/login', {
      method: 'Post',
      body: JSON.stringify({
        account: this.state.loginId,
        password: this.state.loginPw,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message === 'SUCCESE!') {
          // 토큰을 로컬스토리에 저장
          // 메인으로 이동
        } else {
          // 로그인 안된 경우 에러메세지 표시!
          alert(data.message);
        }
      });
  };

  render() {
    return (
      <div className="login">
        <div className="loginInner">
          <div className="backBut">
            <Link to="" className="back">
              뒤로가기
            </Link>
          </div>
          <div className="logo">
            <img src="/images/common/logo_tm.png" alt="gonggol" />
          </div>
          <div className="container">
            <div className="tittle">로그인</div>
            <div className="loginInput">
              {INPUTS.map((ele, idx) => {
                return (
                  <InputBox
                    key={idx}
                    type={ele.type}
                    name={ele.name}
                    placeholder={ele.placeholder}
                    value={ele.value}
                    onChange={ele.onChange}
                  />
                  );
                })}
              <InputBox
                type="text"
                name="loginId"
                placeholder="아이디"
                value={this.state.loginId}
                onChange={this.handleloginInput}
              />
              <input
                type="password"
                name="loginPw"
                className="psIuput"
                placeholder="비밀번호"
                value={this.state.loginPw}
                onChange={this.handleloginIput}
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
      </div>
    );
  }
}

const INPUTS = [
  {
    type: 'text',
    name: 'loginId',
    placeholder: '아이디',
    value: '{this.state.loginId}',
    onChange: '{this.handleloginInput}',
  },
  {
    type: 'password',
    name: 'loginPw'
    placeholder: '비밀번호'
    value: '{this.state.loginPw}'
  }
];

export default Login;
