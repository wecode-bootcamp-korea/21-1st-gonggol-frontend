import React from 'react';
import './Header.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      menu: ['LOGIN', 'JOIN', 'CART', 'ORDER'],
    };
  }
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
              {this.state.menu.map(string => {
                return (
                  <li className="listContainer">
                    <a href="#">{string}</a>
                  </li>
                );
              })}
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
        <div className="headerMiddle">
          <div className="mainLogo">
            <img src="../../../images/common/logo_tm.png" alt="메인로고" />
          </div>
          <div className="searchContainer">
            <div className="searchWrapper">
              <input className="searchBox" type="text" />
              <span>
                <i className="fas fa-search fa-lg"></i>
              </span>
            </div>
          </div>
        </div>
        <div className="headerBottom">
          <div className="bottomCategory">
            <ul className="categoryContainer">
              <li className="allCategory">
                <a className="categoryName" href="#">
                  HEADWEAR
                </a>
              </li>
              <li className="allCategory">
                <a className="categoryName" href="#">
                  BAG
                </a>
              </li>
              <li className="allCategory">
                <a className="categoryName" href="#">
                  CLOTHES
                </a>
              </li>
              <li className="allCategory">
                <a className="categoryName" href="#">
                  SHOES
                </a>
              </li>
              <li className="allCategory">
                <a className="categoryName" href="#">
                  ACC
                </a>
              </li>
              <li className="allCategory">
                <a className="categoryName" href="#">
                  COMMUNITY
                </a>
              </li>
              <li className="allCategory">
                <a className="categoryName" href="#">
                  LOOKBOOK
                </a>
              </li>
            </ul>
          </div>
          <div className="bottomCategory no-border" id="no-border">
            <div className="categoryList">
              <div className="categoryContainer">
                <div className="categoryDropdown">
                  <div className="listWrapper firstList">
                    <ul className="listMenu">
                      <li>
                        <a href="#">야구모자</a>
                        <a href="#">헌팅캡</a>
                        <a href="#">버킷햇</a>
                        <a href="#">베레</a>
                        <a href="#">ETC</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="categoryDropdown">
                  <div className="listWrapper">
                    <ul className="listMenu">
                      <li>
                        <a href="#">백팩</a>
                        <a href="#">크로스백</a>
                        <a href="#">메신저백</a>
                        <a href="#">슬링백/클러치백</a>
                        <a href="#">토트백</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="categoryDropdown">
                  <div className="listWrapper">
                    <ul className="listMenu">
                      <li>
                        <a href="#">아웃웨어</a>
                        <a href="#">후디/집업</a>
                        <a href="#">니트/가디건</a>
                        <a href="#">긴팔티셔츠</a>
                        <a href="#">반팔티셔츠</a>
                        <a href="#">셔츠</a>
                        <a href="#">바지</a>
                        <a href="#">WOMEN</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="categoryDropdown">
                  <div className="listWrapper">
                    <ul className="listMenu">
                      <li>
                        <a href="#">스니커즈</a>
                        <a href="#">ETC</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="categoryDropdown">
                  <div className="listWrapper">
                    <ul className="listMenu">
                      <li>
                        <a href="#">선글라스</a>
                        <a href="#">지갑/카드홀더</a>
                        <a href="#">키홀더</a>
                        <a href="#">ETC</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="categoryDropdown">
                  <div className="listWrapper">
                    <ul className="listMenu">
                      <li>
                        <a href="#">이벤트</a>
                        <a href="#">고객리뷰</a>
                        <a href="#">페이스북</a>
                        <a href="#">what's news</a>
                        <a href="#">홍대스토어</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="categoryDropdown">
                  <div className="listWrapper">
                    <ul className="listMenu">
                      <li>
                        <a href="#">룩북</a>
                        <a href="#">영상</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="backCategory"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
