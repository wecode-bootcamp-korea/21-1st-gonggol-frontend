import React from 'react';
import Header from '../../Component/Header/Header';
import Footer from '../../Component/Footer/Footer';
import CategoryHeader from './CategoryHeader/CategoryHeader';
import SubCategory from './SubCategory/SubCategory';
import ProductList from './ProductList/ProductList';
import { BASE_URL } from '../../config';
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
      totalCounts: 0,
      pageCount: 12,
      reloadProductList: false,
    };
  }

  componentDidMount() {
    // 백팩을 눌렀을 경우 Mock데이터로 작업 중
    // 추후 Header 에서 하위 카테고리 선택할 경우 query string 형태로 받을 예정 입니다.
    // ex) /category/2?subcategoryId=6

    fetch(`/data/CategoryData.json`)
      .then(res => res.json())
      .then(data => {
        this.setState({
          info: data.result,
          //  currentSubCategoryId: search.sub
        });
      });

    let url = `${BASE_URL}/product`;
    if (this.props.location.search) url += `${this.props.location.search}`;
    //else url += `?categoryId=${this.props.match.params.main}`;
    else url += `?categoryId=2`;

    url += `&page=${this.state.currentPage}`;

    //fetch(`${GET_PRODUCTS_API}?categoryId=${this.state.category_no}&subcategoryid=${this.state.currentSubCategoryId}`)
    //fetch(`/data/ProductData.json`)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.results,
          totalCounts: data.total_counts,
          pageCount: data.page_count,
        });
      });
  }

  onCallProductsApi = reloadPage => {
    const { currentSubCategoryId, currentSortBy } = this.state;

    let url = `${BASE_URL}/product`;

    // Param1. 메인 or 서브카테고리
    if (currentSubCategoryId) url += `?subcategoryId=${currentSubCategoryId}`;
    //else url += `?categoryId=${this.props.match.params.main}`;
    else url += `?categoryId=2`;

    // Param2. 정렬방식 선택한 경우 추가
    if (currentSortBy) url += `&sort-method=${currentSortBy}`;

    // Param3. Paging
    url += `&page=${reloadPage ? 1 : this.state.currentPage}`;

    //fetch(`/data/ProductData.json`)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        this.setState({
          products: data.results,
          currentPage: reloadPage ? 1 : this.state.currentPage,
          totalCounts: data.total_counts,
          pageCount: data.page_count,
          reloadProductList: true,
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
        this.onCallProductsApi(true);
      }
    );
  };

  // 상품정렬 선택 Event
  onChangeFilter = e => {
    this.setState(
      {
        currentSortBy: e.target.value,
      },
      function () {
        this.onCallProductsApi(true);
      }
    );
  };

  // 페이지 변경 Event
  onChangeCurrentPage = currentPage => {
    const totalPage =
      parseInt(this.state.totalCounts / this.state.pageCount) + 1;

    if (currentPage <= 0) currentPage = 1;
    if (currentPage >= totalPage) currentPage = totalPage;

    this.setState({ currentPage }, function () {
      this.onCallProductsApi(false);
    });
  };

  render() {
    const totalPageNum =
      parseInt(this.state.totalCounts / this.state.pageCount) +
      (this.state.totalCounts % this.state.pageCount === 0 ? 0 : 1);

    // 페이지 리스트 Make
    let pageList = [];
    for (let i = 1; i <= totalPageNum; i++) {
      pageList.push(i);
    }

    // 페이징용 Products List
    //const pagingProducts = this.state.products?.slice(
    //  (this.state.currentPage - 1) * this.LIMIT,
    //  this.state.currentPage * this.LIMIT
    //);

    return (
      <>
        <Header />
        <div className="category">
          <CategoryHeader
            categoryId={this.state.info.category_no}
            categoryName={this.state.info.category_name}
            categoryPath={this.state.info.category_path}
            bannerImage={this.state.info.banner_image}
            itemCount={this.state.totalCounts}
          />

          <SubCategory
            subCategories={this.state.info.sub_categories}
            currentCategory={this.state.currentSubCategoryId}
            sortBy={this.state.currentSortBy}
            onChangeSubCategory={this.onChangeSubCategory}
            onChangeFilter={this.onChangeFilter}
          />

          <ProductList
            products={this.state.products}
            reloadProductList={this.state.reloadProductList}
          />

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
