import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import Slider from './Slider/Slider';
import NewItem from './NewItem';
import BestItem from './BestItem';
import Footer from '../../Component/Footer/Footer';
import './Main.scss';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      newItemList: [],
      bestItemList: [],
      sliderList: [],
      transLocation: -1370,
      transEffect: '',
      scrollTop: 0,
    };
  }

  componentDidMount() {
    fetch('http://10.58.5.27:8000/main')
      .then(res => res.json())
      .then(data => {
        this.setState({
          newItemList: data.result.new,
          bestItemList: data.result.best,
        });
      });

    fetch('/data/SliderImage.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          sliderList: data.sliderSrc,
        });
      });

    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnMount = () => {
    window.removeEventListener('scroll', this.handleScroll);
  };

  nextBtn = () => {
    console.log(this.state.transLocation);
    if (this.state.transLocation > -4110) {
      this.setState({
        transLocation: this.state.transLocation - 1370,
        transEffect: '1s ease-in-out',
      });
    }
  };

  prevBtn = () => {
    console.log(this.state.transLocation);

    if (this.state.transLocation < 0) {
      this.setState({
        transLocation: this.state.transLocation + 1370,
        transEffect: '1s ease-in-out',
      });
    }
  };

  componentDidUpdate() {
    if (this.state.transLocation === 0) {
      setTimeout(() => {
        this.setState({
          transLocation: -2740,
          transEffect: '0s',
        });
      }, 1000);
    }
    if (this.state.transLocation === -4110) {
      setTimeout(() => {
        this.setState({
          transLocation: -1370,
          transEffect: '0s',
        });
      }, 1000);
    }
  }

  handleScroll = e => {
    console.log(e.srcElement.scrollingElement.scrollTop);
    const scrollTop = ('scroll', e.srcElement.scrollingElement.scrollTop);
    this.setState({
      scrollTop,
    });
  };
  render() {
    const {
      sliderList,
      newItemList,
      bestItemList,
      transLocation,
      transEffect,
    } = this.state;

    console.log(newItemList, bestItemList);
    return (
      <>
        <Header />
        <div className="sliderContainer">
          <Slider sliderList={sliderList} />
        </div>
        <div className="mainContainer">
          <div className="mainWrapper">
            <div className="contentTitle">
              <h1>
                <span className="bestTitle">best</span>
                <span>seller</span>
              </h1>
            </div>
            <Link onClick={() => window.scrollTo(0, 0)}>
              <i className="fas fa-chevron-up fa-3x"></i>
            </Link>
            <div className="bestContainer">
              <ul>
                <li className="bestImage">
                  <Link className="bestImageLink" to="#">
                    <img
                      src="https://i.imgur.com/WAwlvZQ.png"
                      alt="bestseller"
                    />
                  </Link>
                </li>
                {bestItemList?.map((el, index) => (
                  <BestItem
                    key={index}
                    bestNo={el.product_id}
                    bestSrc={el.product_image}
                    bestName={el.product_name}
                    bestPrice={el.product_price}
                  />
                ))}
              </ul>
            </div>
            <div className="contentTitle">
              <h1>
                <span className="newTitle">new</span>
                <span>arrival</span>
              </h1>
            </div>
            <div className="newContainer">
              <div className="sliderControl">
                <span className="sliderCounter">
                  {this.state.transLocation === -1370 ? `${1}` : `${2}`}/2
                </span>
                <button onClick={this.prevBtn}>
                  <i className="fas fa-chevron-circle-left fa-2x" />
                </button>
                <button onClick={this.nextBtn}>
                  <i className="fas fa-chevron-circle-right fa-2x" />
                </button>
              </div>
              <div
                className="slider"
                style={{
                  transform: `translateX(${transLocation}px)`,
                  transition: `${transEffect}`,
                }}
              >
                <NewItem images={newItemList.slice(9, 18)} />
                <NewItem images={newItemList.slice(0, 9)} />
                <NewItem images={newItemList.slice(9, 18)} />
                <NewItem images={newItemList.slice(0, 9)} />
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
                    <img
                      src="/images/main/facebookLogo.png"
                      alt="페이스북 로고"
                    />
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
            <div
              className="rightSidebar"
              style={{ top: this.state?.scrollTop, transition: 'top 1s' }}
            >
              <div className="recentlyViewed">
                <h3>
                  <Link to="#" className="recentItemText">
                    최근 본 상품
                  </Link>
                </h3>
                <div className="viewedList">
                  <ul>
                    <li className="viewedItem">
                      <Link to="#" className="recentImage">
                        <img
                          src="https://kangolkorea.com/web/product/medium/202101/223f3005abb3d7be13dfa5766c48003c.jpg"
                          alt="최근본상품"
                        />
                      </Link>
                    </li>
                    <li className="viewedItem">
                      <Link to="#" className="recentImage">
                        <img
                          src="https://www.kangolkorea.com/web/product/tiny/202101/fad44a3007dc9ea956814a8603df5bf5.jpg"
                          alt="최근본상품"
                        />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="buttonWrapper">
                <Link to="#" className="reviewButton">
                  REVIEW
                </Link>
                <Link to="#" className="questionButton">
                  Q&A
                </Link>
                <Link to="#" className="saleButton">
                  SALE
                </Link>
                <Link to="#" className="onlineButton">
                  ONLINE
                </Link>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </>
    );
  }
}

export default Main;
