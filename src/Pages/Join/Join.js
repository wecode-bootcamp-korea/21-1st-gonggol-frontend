import React, { Component, useState } from 'react';
import InputBox from './InputBox/InputBox';
import CheckBox from './CheckBox/CheckBox';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import './Join.scss';

class Join extends Component {
  constructor() {
    super();
    this.state = {
      userId: '',
      password: '',
      pwCheck: '',
      name: '',
      postal: '',
      address: '',
      addressDetail: '',
      phoneInput1: '',
      phoneInput2: '',
      phoneInput3: '',
      email: '',
      checkSms: false,
      checkEmail: false,
    };
  }

  handleJoinInput = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };

  handleJoin = e => {
    const { userId, password, pwCheck, name, address, addressDetail, email } =
      this.state;
    if (userId === '') {
      alert('아이디를 입력해주세요.');
      return;
    } else if (userId.length < 8 || userId.length > 12) {
      alert('아이디는 8~12자 사이로 입력해주세요.');
      return;
    } else if (password === '') {
      alert('비밀번호를 입력해주세요.');
      return;
    } else if (password.length < 8 || password.length > 12) {
      alert('비밀번호는 8~12자 사이로 입력해주세요.');
      return;
    } else if (pwCheck === '') {
      alert('비밀번호 확인을 입력해주세요.');
      return;
    } else if (password !== pwCheck) {
      alert('비밀번호를 다시 한 번 확인해주세요.');
      return;
    } else if (name === '') {
      alert('이름을 입력해주세요.');
      return;
    } else if (address === '' || addressDetail === '') {
      alert('주소를 입력해주세요.');
      return;
    } else if (email === '') {
      alert('이메일을 입력해주세요.');
      return;
    }

    let phone =
      this.state.phoneInput1 + this.state.phoneInput2 + this.state.phoneInput3;

    fetch('http://10.58.4.15:8000/users/joinin', {
      method: 'post',
      body: JSON.stringify({
        account: this.state.userId,
        password: this.state.password,
        name: this.state.name,
        postal: this.state.postal,
        address: this.state.address,
        address_detail: this.state.addressDetail,
        phone_number: phone,
        sms_reception: this.state.checkSms,
        email_reception: this.state.checkEmail,
        email: this.state.email,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.message === 'SUCCESE') {
          alert('회원가입완료');
        } else {
          alert(data.message);
        }
      });
  };

  handlePhone = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleCheck = e => {
    //const target = e.target;
    //const value = target.type === 'checkbox' ? target.checked : target.value;
    //const name = target.name;
    const { name, checked } = e.target;
    this.setState({
      [name]: checked,
    });
  };

  render() {
    console.log(this.state.phoneInput1);
    let pwValidation =
      this.state.password.length > 0 &&
      this.state.password === this.state.pwCheck;

    return (
      <>
        <Header />
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
                  checkText={ele.checkText}
                  validation={pwValidation}
                  value={this.state[ele.name]}
                  onChange={this.handleJoinInput}
                />
              );
            })}
            <div className="item">
              주소<span className="required">*</span>
            </div>
            <div className="item">
              <input
                type="text"
                name="postal"
                value={this.state.postal}
                onChange={this.handleJoinInput}
              />
              <button className="add">우편번호</button>
              <div>
                <input
                  type="text"
                  className="add2"
                  name="address"
                  value={this.state.address}
                  onChange={this.handleJoinInput}
                />
                <span>기본주소</span>
              </div>
              <div>
                <input
                  type="text"
                  className="add3"
                  name="addressDetail"
                  value={this.state.addressDetail}
                  onChange={this.handleJoinInput}
                />
                <span>나머지주소</span>
              </div>
            </div>
            <div className="item">
              휴대전화<span className="required">*</span>
            </div>
            <div className="item">
              <select
                className="phoneSelect"
                name="phoneInput1"
                value={this.state.phoneInput1}
                onChange={this.handlePhone}
              >
                <option value="010">010</option>
                <option value="011">011</option>
                <option value="016">016</option>
                <option value="017">017</option>
                <option value="018">018</option>
                <option value="019">019</option>
              </select>
              -
              <input
                type="text"
                className="phoneInput"
                name="phoneInput2"
                value={this.state.phoneInput2}
                onChange={this.handlePhone}
              />
              -
              <input
                type="text"
                className="phoneInput"
                name="phoneInput3"
                value={this.state.phoneInput3}
                onChange={this.handlePhone}
              />
            </div>

            <CheckBox
              title="SMS 수신여부"
              type="checkbox"
              name="checkSms"
              consent="동의함"
              text="쇼핑몰에서 제공하는 유익한 이벤트 소식을 SMS로 받으실 수 있습니다."
              checked={this.state.checkSms}
              onClick={this.handleCheck}
            />
            <InputBox
              title="이메일"
              type="text"
              name="email"
              onChange={this.handleJoinInput}
            />
            <CheckBox
              title="이메일 수신여부"
              type="checkbox"
              name="checkEmail"
              consent="동의함"
              text="쇼핑몰에서 제공하는 유익한 이벤트 소식을 SMS로 받으실 수 있습니다."
              checked={this.state.checkEmail}
              onClick={this.handleCheck}
            />
          </div>
          <div className="joinMain">
            <button
              type="submitJoin"
              className="goMain1"
              onClick={this.handleJoin}
            >
              회원가입
            </button>

            <button className="goMain2">회원가입 취소</button>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

const INPUTS = [
  {
    title: '아이디',
    name: 'userId',
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
    checkText: '비밀번호가 일치하지 않습니다.',
  },
  {
    title: '이름',
    name: 'name',
    type: 'text',
  },
];

export default Join;
