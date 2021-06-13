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
      categoryId: 1,
      sortBy: '',
      products: [],
    };
  }

  componentDidMount() {
    fetch('/data/ProductData.json')
      // fetch('http://10.58.6.178:8000/products?category=BAG')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.product_list,
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
    this.setState({ categoryId: id });
  };

  render() {
    const { categoryName, categoryPath, subCategories, bannerImage } =
      CATEGORY[this.state.categoryId];

    return (
      <div className="category">
        <CategoryHeader
          categoryId={this.state.categoryId}
          categoryName={categoryName}
          categoryPath={categoryPath}
          bannerImage={bannerImage}
          itemCount={this.state.products?.length}
        />
        <SubCategory
          subCategories={subCategories}
          currentCategory={this.state.categoryId}
          sortBy={this.state.sortBy}
          onChangeSubCategory={this.onChangeSubCategory}
        />
        <ProductList products={this.state.products} />
        {this.state.isMoreProducts && (
          <button
            className="button moreContent"
            onClick={this.onSelectProductList}
          >
            더보기
          </button>
        )}
      </div>
    );
  }
}

//카테고리 정보를 API 조회가 가능하면 추후 변경 예정입니다.
const CATEGORY = {
  1: {
    categoryName: 'HEADWARE',
    isMainCategory: true,
    bannerImage: '/images/shop1_12_top.jpeg',
    categoryPath: [{ name: 'HEADWEAR', no: 2, url: '/category/1' }],
    subCategories: [
      { categoryName: '야구모자', categoryNo: 11 },
      { categoryName: '헌팅캡', categoryNo: 12 },
      { categoryName: '버킷햇', categoryNo: 13 },
      { categoryName: '베레', categoryNo: 14 },
      { categoryName: 'ETC', categoryNo: 15 },
    ],
  },

  11: {
    categoryName: 'HEADWARE',
    bannerImage: '/images/shop1_12_top.jpeg',
    categoryPath: [
      { name: 'HEADWEAR', no: 1, url: '/category/1' },
      { name: '야구모자', no: 11, url: '/category/11' },
    ],
    subCategories: [
      { categoryName: '야구모자', categoryNo: 11 },
      { categoryName: '헌팅캡', categoryNo: 12 },
      { categoryName: '버킷햇', categoryNo: 13 },
      { categoryName: '베레', categoryNo: 14 },
      { categoryName: 'ETC', categoryNo: 15 },
    ],
  },

  12: {
    categoryName: 'HEADWARE',
    bannerImage: '/images/shop1_12_top.jpeg',
    categoryPath: [
      { name: 'HEADWEAR', no: 1, url: '/category/1' },
      { name: '헌팅캡', no: 12, url: '/category/12' },
    ],
    subCategories: [
      { categoryName: '야구모자', categoryNo: 11 },
      { categoryName: '헌팅캡', categoryNo: 12 },
      { categoryName: '버킷햇', categoryNo: 13 },
      { categoryName: '베레', categoryNo: 14 },
      { categoryName: 'ETC', categoryNo: 15 },
    ],
  },

  13: {
    categoryName: 'HEADWARE',
    bannerImage: '/images/shop1_12_top.jpeg',
    categoryPath: [
      { name: 'HEADWEAR', no: 1, url: '/category/1' },
      { name: '버킷햇', no: 13, url: '/category/13' },
    ],
    subCategories: [
      { categoryName: '야구모자', categoryNo: 11 },
      { categoryName: '헌팅캡', categoryNo: 12 },
      { categoryName: '버킷햇', categoryNo: 13 },
      { categoryName: '베레', categoryNo: 14 },
      { categoryName: 'ETC', categoryNo: 15 },
    ],
  },

  14: {
    categoryName: 'HEADWARE',
    bannerImage: '/images/shop1_12_top.jpeg',
    categoryPath: [
      { name: 'HEADWEAR', no: 1, url: '/category/1' },
      { name: '베레', no: 14, url: '/category/14' },
    ],
    subCategories: [
      { categoryName: '야구모자', categoryNo: 11 },
      { categoryName: '헌팅캡', categoryNo: 12 },
      { categoryName: '버킷햇', categoryNo: 13 },
      { categoryName: '베레', categoryNo: 14 },
      { categoryName: 'ETC', categoryNo: 15 },
    ],
  },

  15: {
    categoryName: 'HEADWARE',
    bannerImage: '/images/shop1_12_top.jpeg',
    categoryPath: [
      { name: 'HEADWEAR', no: 1, url: '/category/1' },
      { name: 'ETC', no: 15, url: '/category/15' },
    ],
    subCategories: [
      { categoryName: '야구모자', categoryNo: 11 },
      { categoryName: '헌팅캡', categoryNo: 12 },
      { categoryName: '버킷햇', categoryNo: 13 },
      { categoryName: '베레', categoryNo: 14 },
      { categoryName: 'ETC', categoryNo: 15 },
    ],
  },
};
export default Category;
