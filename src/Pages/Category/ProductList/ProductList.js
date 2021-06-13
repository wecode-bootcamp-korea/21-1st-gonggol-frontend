import React from 'react';
import ProductDetail from '../ProductDetail/ProductDetail';
import './ProductList.scss';

class ProductList extends React.Component {
  render() {
    const { products } = this.props;

    return (
      <div className="productList">
        {products?.map(product => (
          <ProductDetail
            key={product.product_id}
            id={product.product_id}
            name={product.product_name}
            price={product.product_price}
            discountRate={product.discount_rate}
            newFlag={true}
            mainImg={product.product_image[0]}
            hoverImg={product.product_image[10]}
          />
        ))}
      </div>
    );
  }
}

export default ProductList;
