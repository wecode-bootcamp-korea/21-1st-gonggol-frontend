import React from 'react';
import { Link } from 'react-router-dom';
// import Header from '../../Component/Header/Header';
import Slider from './Slider/Slider';
import NewItem from './NewItem';
// import Footer from '../../Component/Footer/Footer';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      newItemList1: [],
      newItemList2: [],
    };
  }

  componentDidMount() {
    fetch('/data/NewItemData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          newItemList1: data,
        });
      });
  }

  render() {
    const { newItemList1 } = this.state;
    return (
      <>
        {/* <Header /> */}
        <div className="sliderContainer">
          <Slider />
        </div>
        <div className="bestContainer">
          <ul>
            <li className="bestImage">
              <Link className="bestImageLink" to="#">
                <img
                  src="https://www.kangolkorea.com/web/upload/category/shop1_1_show_581577.jpg"
                  alt="bestseller"
                />
              </Link>
            </li>
            <li class="productList1">
              <div class="itemWrapper">
                <Link className="itemInfo" to="#">
                  <img
                    src="https://www.kangolkorea.com/web/product/medium/202102/df3e542563687a5bc9dd06fe2608df0a.jpg"
                    alt="bestseller1"
                  />
                  <p>하트 리액트 모자</p>
                </Link>
                <p className="itemPrice">102,000원</p>
              </div>
            </li>
            <li class="productList2">
              <div class="itemWrapper">
                <Link className="itemInfo" to="#">
                  <img
                    src="https://www.kangolkorea.com/web/product/tiny/202101/70541b82a3b2368061ca12b53d2903b0.jpg"
                    alt="bestseller2"
                  />
                  <p>에코 프랜들리백</p>
                </Link>
                <p className="itemPrice">35,000원</p>
              </div>
            </li>
            <li class="productList3">
              <div class="itemWrapper">
                <Link className="itemInfo" to="#">
                  <img
                    src="https://www.kangolkorea.com/web/product/tiny/202101/fad44a3007dc9ea956814a8603df5bf5.jpg"
                    alt="bestseller3"
                  />
                  <p>컨버스 토트백</p>
                </Link>
                <p className="itemPrice">78,000원</p>
              </div>
            </li>
            <li class="productList4">
              <div class="itemWrapper">
                <Link className="itemInfo" to="#">
                  <img
                    src="https://kangolkorea.com/web/product/tiny/201808/ea4013829f76a5ddaca9693b7522bc83.jpg"
                    alt="bestseller4"
                  />
                  <p>다니엘 2005 블랙</p>
                </Link>
                <p className="itemPrice">29,000원</p>
              </div>
            </li>
            <li class="productList5">
              <div class="itemWrapper">
                <Link className="itemInfo" to="#">
                  <img
                    src="https://kangolkorea.com/web/product/tiny/202103/55d02d65280dd91a2cf0b6528d2c84df.jpg"
                    alt="bestseller5"
                  />
                  <p>우먼스 베이직 티셔츠</p>
                </Link>
                <p className="itemPrice">45,000원</p>
              </div>
            </li>
            <li class="productList6">
              <div class="itemWrapper">
                <Link className="itemInfo" to="#">
                  <img
                    src="https://kangolkorea.com/web/product/tiny/202103/3685fcdff43c12a177703a78b692d3af.jpg"
                    alt="bestseller6"
                  />
                  <p>공골 티셔츠</p>
                </Link>
                <p className="itemPrice">58,000원</p>
              </div>
            </li>
          </ul>
        </div>
        <div className="newContainer">
          <div className="sliderControl">
            <span className="sliderCounter">1/2</span>
            <i className="fas fa-chevron-circle-left fa-2x"></i>
            <i className="fas fa-chevron-circle-right fa-2x"></i>
          </div>
          <div className="newProduct1">
            {newItemList1.map((item, index) => (
              <NewItem
                key={index}
                itemNo={item.no}
                itemSrc={item.itemSrc}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
              />
            ))}
          </div>
        </div>
        <div className="snsContainer">
          <a href="https://instagram.com/kangolkorea">
            <h2>
              <img
                className="instaImage"
                src="/images/main/instaLogo.png"
                alt="인스타 로고"
              />
            </h2>
            <h3>
              #Instagram
              <span>@GONGGOLKOREA</span>
            </h3>
          </a>
          <ul>
            <li>
              <a href="https://facebook.com/KangolKorea">
                <img src="/images/main/facebookLogo.png" alt="페이스북 로고" />
              </a>
            </li>
            <li>
              <a href="https://instagram.com/kangolkorea">
                <img
                  src="/images/main/instagramLogo.png"
                  alt="인스타그램 로고"
                />
              </a>
            </li>
          </ul>
        </div>
        {/* <Footer /> */}
      </>
    );
  }
}

export default Main;
