import React from 'react';
import Product from '../Product/Product';
import './Products.scss';

class Products extends React.Component {
  render() {
    const { products } = this.props;
    return (
      <div class="Products">
        {products?.map(product => (
          <Product
            id={product.productId}
            name={product.productName}
            price={product.original_price}
            discountRate={product.discount_rate}
            newFlag={product.new_flag}
            likeFlag={product.likeFlag}
            mainImg={product.productImage.main}
            hoverImg={product.productImage.hover_img}
          />
        ))}
      </div>
    );
  }
}

export default Products;
