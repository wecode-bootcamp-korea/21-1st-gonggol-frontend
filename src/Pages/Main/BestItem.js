import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BestItem extends Component {
  render() {
    const { bestNo, bestSrc, bestName, bestPrice } = this.props;
    return (
      <li class={`productList${bestNo}`}>
        <div class="itemWrapper">
          <Link className="itemInfo" to="#">
            <img src={bestSrc} alt="bestseller" />
            <p>{bestName}</p>
          </Link>
          <p className="itemPrice">{bestPrice.toLocaleString()}원</p>
        </div>
      </li>
    );
  }
}

export default BestItem;
