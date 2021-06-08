import React from 'react';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <div className="headerContainer">
        <div className="headerTop">
          <div className="topWrapper">
            <div className="headerLogo">
              <a href="#" className="logoName">
                GONGGOL
              </a>
            </div>
            <ul className="headerMenu">
              <li className="listContainer">
                <a href="#login">LOGIN</a>
              </li>
              <li className="listContainer">
                <a href="#join">JOIN</a>
              </li>
              <li className="listContainer">
                <a href="#cart">CART</a>
              </li>
              <li className="listContainer">
                <a href="#order">ORDER</a>
              </li>
              <li>
                <div className="dropDown">
                  <button className="dropButton">
                    MY PAGE
                    <i class="fa fa-caret-down"></i>
                  </button>
                  <div className="dropContent">
                    <a href="#">구매정보</a>
                    <a href="#">배송조회</a>
                    <a href="#">개인정보</a>
                    <a href="#">나의리뷰</a>
                    <a href="#" className="lastContent">
                      1:1문의
                    </a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
