import React, { Component } from 'react';
import './Slider.scss';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      transLoctation: 0,
    };
  }
  render() {
    return (
      <div className="imageSlider">
        <ul className="imageContainer">
          <li>
            <img
              className="slide1"
              alt="슬라이드 이미지1"
              src="/images/main/3.png"
            />
            <img
              className="slide2"
              alt="슬라이드 이미지2"
              src="/images/main/1.png"
            />
            <img
              className="slide3"
              alt="슬라이드 이미지3"
              src="/images/main/2.png"
            />
            <img
              className="slide4"
              alt="슬라이드 이미지4"
              src="/images/main/4.png"
            />
            <img
              className="slide5"
              alt="슬라이드 이미지5"
              src="/images/main/5.png"
            />
          </li>
        </ul>
        <div className="arrowButton">
          <button>
            <i className="fas fa-chevron-left fa-4x" />
          </button>
          <button>
            <i className="fas fa-chevron-right fa-4x" />
          </button>
        </div>
      </div>
    );
  }
}

export default Slider;
