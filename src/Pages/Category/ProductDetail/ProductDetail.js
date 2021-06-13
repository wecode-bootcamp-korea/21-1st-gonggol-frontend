import React from 'react';
import { Link } from 'react-router-dom';
import './ProductDetail.scss';

class ProductDetail extends React.Component {
  render() {
    const {
      id,
      name,
      price,
      discountRate,
      newFlag,
      likeFlag,
      mainImg,
      hoverImg,
    } = this.props;

    return (
      <div className="productDetail">
        <div className="productThumbnail">
          <Link to="/product">
            <img alt={`${name}의 이미지`} src={mainImg} />
            {hoverImg && (
              <img
                alt={`${name}의 마우스오버 이미지`}
                src={hoverImg}
                class="hoverImage"
              />
            )}
          </Link>
        </div>
        <div className="description">
          <div className="icon">
            {newFlag && <span className="new">신상품</span>}
            {discountRate < 1 && <span className="sale">세일</span>}
          </div>
          <div className="name">
            <Link to="/product">{name}</Link>
          </div>
          <div className="spec">
            {discountRate < 1 && (
              <div className="originalPrice">{price.toLocaleString()}원</div>
            )}
            <div className="salesPrice">
              {(price * (discountRate ? discountRate : 1)).toLocaleString()}원
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductDetail;
