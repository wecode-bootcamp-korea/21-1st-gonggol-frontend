import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

class Product extends React.Component {
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
      <div className="Product">
        <div className="product-thumbnail">
          <Link to="/product">
            <img alt={`${name}의 이미지`} src={mainImg} />
            {hoverImg && (
              <img
                alt={`${name}의 마우스오버 이미지`}
                src={hoverImg}
                class="hover_image"
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
              <div className="original-price">{price.toLocaleString()}원</div>
            )}
            <div className="sales-price">
              {(price * (discountRate ? discountRate : 1)).toLocaleString()}원
            </div>
          </div>
          <div>{likeFlag}</div>
        </div>
      </div>
    );
  }
}

export default Product;
