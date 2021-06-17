import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewItem extends Component {
  render() {
    const { images } = this.props;

    return (
      <div className="newProduct">
        {images?.map((img, index) => {
          return (
            <div key={index} className={`newInfoWrapper${index}`}>
              <Link className="newInfo" to={`/product/${img.product_id}`}>
                <img src={img.product_image} alt="newproduct1" />
                <div className="overlayContainer" />
                <div className="overlayText">
                  <span>{img.product_name}</span>
                  <strong>{img.product_price.toLocaleString()}원</strong>
                  <span className="viewDetail">more</span>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default NewItem;
