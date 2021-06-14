import React from 'react';
import { Link } from 'react-router-dom';
// import Header from '../../Component/Header/Header';
import Slider from './Slider/Slider';
import NewItem from './NewItem';
import BestItem from './BestItem';
// import Footer from '../../Component/Footer/Footer';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      newItemList: [],
      bestItemList: [],
    };
  }

  componentDidMount() {
    fetch('/data/NewItemData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          newItemList: data.newProduct.filter(ele => ele.no < 10),
          bestItemList: data.bestProduct,
        });
      });
  }

  render() {
    const { newItemList, bestItemList } = this.state;
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
            {bestItemList?.map((el, index) => (
              <BestItem
                key={index}
                bestNo={el.no}
                bestSrc={el.itemSrc}
                bestName={el.itemName}
                bestPrice={el.itemPrice}
              />
            ))}
          </ul>
        </div>
        <div className="newContainer">
          <div className="sliderControl">
            <span className="sliderCounter">1/2</span>
            <i className="fas fa-chevron-circle-left fa-2x"></i>
            <i className="fas fa-chevron-circle-right fa-2x"></i>
          </div>
          <div className="newProduct1">
            {newItemList?.map((item, index) => (
              <NewItem
                key={index}
                index={index + 1}
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
