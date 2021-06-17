import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Join.scss';

class Join extends Component {
  render() {
    return (
      <div className="Join">
        <div className="tittle">
          <h1>기본정보</h1>
        </div>
        <div className="container">
          <div className="item">
            아이디<span className="required">*</span>
          </div>
          <div className="item">
            <input type="text" className="idInput" />
            <span>(영문소문자/숫자, 4~16자)</span>
          </div>
          <div className="item">
            비밀번호<span className="required">*</span>
          </div>
          <div className="item">
            <input type="password" className="psInput" />
            <span>
              (영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 8자~16자)
            </span>
          </div>
          <div className="item">
            이름<span className="required">*</span>
          </div>
          <div className="item">
            <input type="text" />
          </div>
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
          <div className="item" classNam="flex">
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
          <div className="item">
            SMS 수신여부<span className="required">*</span>
          </div>
          <div className="item">
            <label>
              <input type="checkbox" />
              동의함
            </label>
            <p className="text">
              쇼핑몰에서 제공하는 유익한 이벤트 소식을 SMS로 받으실 수 있습니다.
            </p>
          </div>
          <div className="item">
            이메일<span className="required">*</span>
          </div>
          <div className="item">
            <input type="text" className="mailInput" />
          </div>
          <div className="item">
            이메일 수신여부<span className="required">*</span>
          </div>
          <div className="item">
            <div className="check-wrap">
              <label>
                <input type="checkbox" />
                <span>동의함</span>
              </label>
            </div>
            <p className="text">
              쇼핑몰에서 제공하는 유익한 이벤트 소식을 이메일로 받으실 수
              있습니다.
            </p>
          </div>
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

export default Join;
