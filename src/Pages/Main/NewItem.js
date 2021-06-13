import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NewItem extends Component {
  render() {
    const { itemSrc, itemName, itemPrice, itemNo } = this.props;
    return (
      <div className={`newInfoWrapper${itemNo}`}>
        <Link className="newInfo" to="#">
          <img src={itemSrc} alt="newproduct1" />
          <div className="overlayContainer" />
          <div className="overlayText">
            <span>{itemName}</span>
            <strong>{itemPrice}</strong>
            <span className="viewDetail">more</span>
          </div>
        </Link>
      </div>
    );
  }
}

export default NewItem;
