import React from 'react';
import './ImageSlide.scss';

class ImageSlide extends React.Component {
  constructor() {
    super();
    this.state = {
      imageCurrentNo: 0,
    };

    // 슬라이드 이미지 크기 고정
    this.WIDTH = 550;
    this.HEIGHT = 550;
  }

  onChangeImage = index => {
    if (this.props.images.length <= index) index = 0;
    if (index < 0) index = this.props.images.length - 1;

    this.setState({ imageCurrentNo: index });
  };

  render() {
    const { images } = this.props;
    return (
      <div className="imageSlide" style={{ width: `${this.WIDTH}px` }}>
        <div className="navBox">
          <span>{this.state.imageCurrentNo + 1}</span>
          <span>/</span>
          <span>{images && images.length}</span>
        </div>
        <div className="slideBox">
          <div
            className="slideList"
            style={{
              transform: `translate3d(
                ${this.state.imageCurrentNo * -this.WIDTH}px, 0px, 0px`,
            }}
          >
            {images?.map((image, no) => (
              <div
                className="slideContent"
                key={no}
                style={{ width: `${this.WIDTH}px`, height: `${this.HEIGHT}px` }}
              >
                <picture>
                  <img alt="상품 이미지" src={image} />
                </picture>
              </div>
            ))}
          </div>

          <div
            className="buttonPrev"
            style={{ top: `${this.height / 2 + 25}px` }}
            onClick={() => this.onChangeImage(this.state.imageCurrentNo - 1)}
          >
            <i className="fas fa-chevron-left"></i>
          </div>
          <div
            className="buttonNext"
            style={{ top: `${this.height / 2 + 25}px` }}
            onClick={() => this.onChangeImage(this.state.imageCurrentNo + 1)}
          >
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="paginationBox">
          {images?.map((image, no) => (
            <div
              key={no}
              onClick={() => {
                this.onChangeImage(no);
              }}
            >
              <picture>
                <img alt="상품 이미지 섬네일" src={image} />
              </picture>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ImageSlide;
