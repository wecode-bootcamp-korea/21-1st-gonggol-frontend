import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import InputBox from './InputBox/InputBox';
import CheckBox from './CheckBox/CheckBox';
import './Join.scss';

class Join extends Component {
  this.state = {
    loginId: ''
    loginPw: ''
  }
  render() {
    return (
      <div className="join">
        <div className="tittle">기본정보</div>
        <div className="container">
          {INPUTS.map((ele, idx) => {
            return (
              <InputBox
                key={idx}
                name={ele.name}
                type={ele.type}
                text={ele.text}
                value={this.state.value}
                onChange={
                  (e) => {
                    this.setState({
                    
                    })
                  }
                }
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
          <div className="item">
            이메일<span className="required">*</span>
          </div>
          <div className="item">
            <input type="text" className="mailInput" />
          </div>
          <CheckBox
            name="이메일 수신여부"
            type="checkbox"
            consent="동의함"
            text="쇼핑몰에서 제공하는 유익한 이벤트 소식을 SMS로 받으실 수 있습니다."
          />
        </div>
        <div className="joinMain">
          <Link to="" className="goMain1">
            회원가입
          </Link>
          <Link to="" className="goMain2">
            회원가입 취소
          </Link>
        </div>
      </div>
    );
  }
}

const INPUTS = [
  { name: '아이디', type: 'text', text: '(영문소문자/숫자, 8~12자)' },
  {
    name: '비밀번호',
    type: 'password',
    text: '(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~12자)',
  },
  {
    name: '비밀번호 확인',
    type: 'password',
  },
  {
    name: '이름',
    type: 'text',
  },
];

export default Join;
