import React from 'react';
import MainNavbar from './MainNavbar';
import './Header.scss';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryList: [],
    };
  }

  componentDidMount() {
    fetch('/data/HeaderCategory.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          categoryList: data,
        });
      });
  }

  render() {
    const { categoryList } = this.state;

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
              {MENUS.map((string, idx) => {
                return (
                  <li key={idx} className="listContainer">
                    <a href="#">{string}</a>
                  </li>
                );
              })}
              <li>
                <div className="dropDown">
                  <button className="dropButton">
                    MY PAGE
                    <i className="fa fa-caret-down"></i>
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
            <img src="/images/common/logo_tm.png" alt="메인로고" />
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
              {CATEGORIES.map((item, idx) => {
                return (
                  <li key={idx} className="allCategory">
                    <a className="categoryName" href="#">
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="bottomCategory no-border" id="no-border">
            <div className="categoryList">
              <div className="categoryContainer">
                {categoryList.map(cate => (
                  <MainNavbar
                    key={cate.no}
                    no={cate.no}
                    categories={cate.categories}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const MENUS = ['LOGIN', 'JOIN', 'CART', 'ORDER'];
const CATEGORIES = [
  'HEADWEAR',
  'BAG',
  'CLOTHES',
  'SHOES',
  'ACC',
  'COMMUNITY',
  'LOOKBOOK',
];

export default Header;
