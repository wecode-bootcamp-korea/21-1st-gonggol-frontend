import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewItem extends Component {
  render() {
    const { itemSrc, itemName, itemPrice, itemNo, index } = this.props;
    console.log(index <= 9 ? index : (index % 10) + 1);
    return (
      <div className={`newInfoWrapper${index <= 9 ? index : (index % 10) + 1}`}>
        <Link className="newInfo" to="#">
          <img src={itemSrc} alt="newproduct1" />
          <div className="overlayContainer" />
          <div className="overlayText">
            <span>{itemName}</span>
            <strong>{itemPrice.toLocaleString()}원</strong>
            <span className="viewDetail">more</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default NewItem;
