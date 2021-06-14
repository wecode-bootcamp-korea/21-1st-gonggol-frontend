import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputBox from './InputBox/InputBox';
import CheckBox from './CheckBox/CheckBox';
import './Join.scss';

class Join extends Component {
  constructor() {
    super();
    this.state = {
      user_id: '',
      password: '',
      pwCheck: '',
      name: '',
      address: '',
      email: '',
    };
  }

  handleJoinInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleJoin = e => {
    if (this.state.user_id === '') {
      alert('아이디를 입력해주세요.');
      return;
    } else if (
      this.state.user_id.length < 8 ||
      this.state.user_id.length > 12
    ) {
      alert('아이디는 8~12자 사이로 입력해주세요.');
      return;
    } else if (this.state.password === '') {
      alert('비밀번호를 입력해주세요.');
    } else if (
      this.state.password.length < 8 ||
      this.state.password.length > 12
    ) {
      alert('비밀번호는 8~12자 사이로 입력해주세요.');
      return;
    } else if (this.state.name === '') {
      alert('이름을 입력해주세요.');
    } else if (this.state.email === '') {
      alert('이메일을 입력해주세요.');
    }
  };
  render() {
    console.log(this.state);
    return (
      <div className="join">
        <div className="tittle">기본정보</div>
        <div className="container">
          {INPUTS.map((ele, idx) => {
            return (
              <InputBox
                key={idx}
                name={ele.name}
                title={ele.title}
                type={ele.type}
                text={ele.text}
                value={this.state[ele.name]}
                onChange={this.handleJoinInput}
              />
            );
          })}
          <div className="item">
            주소<span className="required">*</span>
          </div>
          <div className="item">
            <input type="text" readonly="readonly" />
            <button className="add1">우편번호</button>
            <div className="add2">
              <input type="text" className="phoneInput" readonly="readonly" />
              <span>기본주소</span>
            </div>
            <div className="add2">
              <input type="text" className="phoneInput" />
              <span>나머지주소</span>
            </div>
          </div>
          <div className="item">
            휴대전화<span className="required">*</span>
          </div>
          <div className="item">
            <select className="phone-select">
              <option value="010">010</option>
              <option value="011">011</option>
              <option value="016">016</option>
              <option value="017">017</option>
              <option value="018">018</option>
              <option value="019">019</option>
            </select>
            -
            <input type="text" className="phone-input" />
            -
            <input type="text" className="phone-input" />
          </div>
          <CheckBox
            name="SMS 수신여부"
            type="checkbox"
            consent="동의함"
            text="쇼핑몰에서 제공하는 유익한 이벤트 소식을 SMS로 받으실 수 있습니다."
          />
          <InputBox
            title="이메일"
            type="text"
            name="email"
            onChange={this.handleJoinInput}
          />
          <CheckBox
            name="이메일 수신여부"
            type="checkbox"
            consent="동의함"
            text="쇼핑몰에서 제공하는 유익한 이벤트 소식을 SMS로 받으실 수 있습니다."
          />
        </div>
        <div className="joinMain">
          <button className="goMain1" onClick={this.handleJoin}>
            회원가입
          </button>
          <button className="goMain2">회원가입 취소</button>
        </div>
      </div>
    );
  }
}

const INPUTS = [
  {
    title: '아이디',
    name: 'user_id',
    type: 'text',
    text: '(영문소문자/숫자, 8~12자)',
  },
  {
    title: '비밀번호',
    name: 'password',
    type: 'password',
    text: '(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~12자)',
  },
  {
    title: '비밀번호 확인',
    name: 'pwCheck',
    type: 'password',
  },
  {
    title: '이름',
    name: 'name',
    type: 'text',
  },
];

export default Join;
