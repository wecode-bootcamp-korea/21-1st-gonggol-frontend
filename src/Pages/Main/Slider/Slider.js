import React, { Component } from 'react';
import './Slider.scss';

class Slider extends Component {
  constructor() {
    super();
    this.state = {
      transLocation: -100,
      transEffect: '',
      currentButton: 1,
    };
  }

  infiniteMove = () => {
    if (this.state.transLocation > -600) {
      this.setState({
        currentButton:
          this.state.currentButton + 1 === 6 ? 1 : this.state.currentButton + 1,
        transLocation: this.state.transLocation - 100,
        transEffect: '1s ease-in-out',
      });
    }
  };

  activeButton = page => {
    clearInterval(this.infiniteSlider);
    this.setState({
      currentButton: page,
      transLocation: page * -100,
      transEffect: '1s ease-in-out',
    });

    this.infiniteSlider = setInterval(this.infiniteMove, 3000);
  };

  nextBtn = () => {
    if (this.state.transLocation > -600) {
      this.setState({
        transLocation: this.state.transLocation - 100,
        transEffect: '1s ease-in-out',
      });
    }
  };

  prevBtn = () => {
    if (this.state.transLocation < 0) {
      this.setState({
        transLocation: this.state.transLocation + 100,
        transEffect: '1s ease-in-out',
      });
    }
  };

  componentDidMount() {
    this.infiniteSlider = setInterval(this.infiniteMove, 3000);
  }

  componentDidClear() {
    clearInterval(this.infiniteSlider);
  }

  componentDidUpdate() {
    if (this.state.transLocation === -600) {
      setTimeout(() => {
        this.setState({
          transLocation: -100,
          transEffect: '0s',
        });
      }, 1000);
    }
    if (this.state.transLocation === 0) {
      setTimeout(() => {
        this.setState({
          transLocation: -500,
          transEffect: '0s',
        });
      }, 1000);
    }
  }
  render() {
    const { transLocation, transEffect } = this.state;
    const { sliderList } = this.props;
    return (
      <div className="imageSlider">
        <ul
          className="imageContainer"
          style={{
            transform: `translateX(${transLocation}vw)`,
            transition: `${transEffect}`,
          }}
        >
          <li>
            <img alt="슬라이드 이미지" src="/images/main/5.png" />
          </li>
          <li>
            {sliderList.map((el, index) => {
              return (
                <img key={index} alt="슬라이드 이미지" src={el.imageSrc} />
              );
            })}
          </li>
          <li>
            <img alt="슬라이드 이미지" src="/images/main/3.png" />
          </li>
        </ul>
        <div className="arrowButton">
          <button onClick={this.prevBtn}>
            <i className="fas fa-chevron-left fa-4x" />
          </button>
          <button onClick={this.nextBtn}>
            <i className="fas fa-chevron-right fa-4x" />
          </button>
        </div>
        <div className="radioContainer">
          {sliderList.map((el, index) => {
            return (
              <input
                key={index}
                type="radio"
                name="radioButton"
                onClick={() => this.activeButton(index + 1)}
                checked={this.state.currentButton === index + 1 ? true : false}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Slider;
