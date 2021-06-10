import React from 'react';
import Header from '../../Component/Header/Header';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import SubCategory from './SubCategory/SubCategory';
import ProductList from './ProductList/ProductList';
import './Category.scss';

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      info: {},
      subCategories: [],
      currentCategory: '',
      sortBy: '',
      products: [],
      isMoreProducts: false,
    };
  }

  componentDidMount() {
    fetch('/data/CategoryData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          info: data,
          subCategories: data.sub_categories,
          products: data.products,
          isMoreProducts: data.isMoreProducts,
        });
      });
  }

  onSelectProductList = () => {
    fetch('/data/ProductData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: [...this.state.products, ...data.products],
        });
      });
  };

  onChangeSubCategory = id => {
    this.setState({ currentCategory: id });
  };

  render() {
    return (
      <>
        <div className="Category">
          <CategoryHeader
            id={this.state.info.id}
            name={this.state.info.name}
            bannerImage={this.state.info.banner_image}
            categoryPath={this.state.info.category_path}
            itemCount={this.state.products.length}
          />
          <SubCategory
            subCategories={this.state.subCategories}
            currentCategory={this.state.currentCategory}
            sortBy={this.state.sortBy}
            onChangeSubCategory={this.onChangeSubCategory}
          />
          <ProductList products={this.state.products} />
          {this.state.isMoreProducts && (
            <button
              className="button more-content"
              onClick={this.onSelectProductList}
            >
              더보기
            </button>
          )}
        </div>
      </>
    );
  }
}

export default Category;
