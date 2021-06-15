import React from 'react';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import SubCategory from './SubCategory/SubCategory';
import ProductList from './ProductList/ProductList';
import './Category.scss';

class Category extends React.Component {
  constructor() {
    super();
    this.state = {
      info: {},
      products: [],
      currentSubCategoryId: '',
      currentPage: 1,
      currentSortBy: '',
    };

    this.LIMIT = 8; // 한 페이지 당 상품 갯수
  }

  componentDidMount() {
    // 백팩을 눌렀을 경우 Mock데이터로 작업 중
    // 추후 Header 에서 하위 카테고리 선택할 경우 query string 형태로 받을 예정 입니다.
    // ex) /category/2?sub=6
    // let search = JSON.parse(
    //   '{"' +
    //     decodeURI(this.props.location.search.slice(1))
    //       .replace(/"/g, '\\"')
    //       .replace(/&/g, '","')
    //       .replace(/=/g, '":"') +
    //     '"}'
    // );
    //fetch(`${GET_CATEGORY_API}?categoryId=${this.props.match.params.main}&subcategoryId=${search.sub}`)
    fetch(`/data/CategoryData.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          info: data.result,
          //  currentSubCategoryId: search.sub
        });
      });

    //fetch(`${GET_PRODUCTS_API}?categoryId=${this.state.category_no}&subcategoryid=${this.state.currentSubCategoryId}`)
    fetch('/data/ProductData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.product_list,
        });
      });
  }

  onCallProductsApi = () => {
    const { currentSubCategoryId, currentSortBy } = this.state;

    fetch('/data/ProductData.json')
      // fetch(
      //   `${GET_PRODUCTS_API}?categoryId=${this.state.info.category_no}&subcategoryid=${currentSubCategoryId}&sort-method=${currentSortBy}`
      // )
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.product_list,
          currentPage: 1,
        });
      });

    // TODO: 스크롤 이벤트 추가
  };

  // Sub 카테고리 선택 Event
  onChangeSubCategory = currentSubCategoryId => {
    this.setState(
      {
        currentSubCategoryId,
      },
      function () {
        this.onCallProductsApi();
      }
    );
  };

  // 상품정렬 선택 Event
  onChangeFilter = e => {
    this.setState(
      {
        sortBy: e.target.value,
      },
      function () {
        this.onCallProductsApi();
      }
    );
  };

  // 페이지 변경 Event
  onChangeCurrentPage = currentPage => {
    const totalPage = parseInt(this.state.products.length / this.LIMIT) + 1;

    if (currentPage <= 0) currentPage = 1;
    if (currentPage >= totalPage) currentPage = totalPage;

    this.setState({ currentPage });
  };

  render() {
    const totalPageNum = parseInt(this.state.products.length / this.LIMIT) + 1;

    // 페이지 리스트 Make
    let pageList = [];
    for (let i = 1; i <= totalPageNum; i++) {
      pageList.push(i);
    }

    // 페이징용 Products List
    const pagingProducts = this.state.products.slice(
      (this.state.currentPage - 1) * this.LIMIT,
      this.state.currentPage * this.LIMIT
    );

    return (
      <>
        <Header />
        <div className="category">
          <CategoryHeader
            categoryId={this.state.info.category_no}
            categoryName={this.state.info.category_name}
            categoryPath={this.state.info.category_path}
            bannerImage={this.state.info.banner_image}
            itemCount={this.state.products?.length}
          />

          <SubCategory
            subCategories={this.state.info.sub_categories}
            currentCategory={this.state.currentSubCategoryId}
            sortBy={this.state.currentSortBy}
            onChangeSubCategory={this.onChangeSubCategory}
            onChangeFilter={this.onChangeFilter}
          />

          <ProductList products={pagingProducts} />

          {/* paging 부분 컴포넌트 분리 안하겠습니다.. */}
          <div className="pagingnation">
            <i
              className="fas fa-angle-double-left"
              onClick={() => this.onChangeCurrentPage(1)}
            ></i>
            <i
              className="fas fa-angle-left"
              onClick={() =>
                this.onChangeCurrentPage(this.state.currentPage - 1)
              }
            ></i>
            {pageList.map(page => {
              return (
                <div
                  key={page}
                  className={`pagingNum${
                    this.state.currentPage === page ? ' current' : ''
                  }`}
                  onClick={() => this.onChangeCurrentPage(page)}
                >
                  {page}
                </div>
              );
            })}
            <i
              className="fas fa-angle-right"
              onClick={() =>
                this.onChangeCurrentPage(this.state.currentPage + 1)
              }
            ></i>
            <i
              className="fas fa-angle-double-right"
              onClick={() => this.onChangeCurrentPage(totalPageNum)}
            ></i>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Category;
