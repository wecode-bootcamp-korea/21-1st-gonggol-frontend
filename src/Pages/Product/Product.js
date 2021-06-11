import React, { Fragment } from 'react';
import Breadcrumbs from '../../Component/Breadcrumbs/Breadcrumbs';
import QuantityController from '../../Component/QuantityController/QuantityController';
import './Product.scss';

class Product extends React.Component {
  constructor() {
    super();

    this.state = {
      productInfo: {},
      imageCurrentNo: 1,
      selectedProducts: [],
    };
  }

  componentDidMount() {
    fetch('/data/ProductInfoData.json')
      .then(res => res.json())
      .then(data => {
        this.setState({
          productInfo: data.result,
          selectedProducts: [],
        });
      });
  }

  // 수량 변경 Event
  onChangeQuantity = (no, size, operation, isOverwrite) => {
    const { selectedProducts } = this.state;

    this.setState({
      selectedProducts: this.state.selectedProducts.map(product => {
        return product.no !== no || product.size !== size
          ? product
          : {
              ...product,
              stock: isOverwrite
                ? parseInt(operation)
                : parseInt(product.stock + operation),
            };
      }),
    });
  };

  // 사이즈 선택 Event
  onSelectOptionItem = e => {
    const { options } = e.target;
    let value = options[options.selectedIndex].value;

    // 선택전일 경우에는 아무 동작 안함
    if (options.selectedIndex === 0) return;

    // 품절일 경우
    if (!value) {
      alert('품절된 상품입니다!');
      return;
    }

    // 이미 추가된 옵션일 경우
    if (
      this.state.selectedProducts.filter(product =>
        product.size === value ? product : null
      ).length > 0
    ) {
      alert('이미 추가된 옵션이 있습니다.');
      return;
    }

    this.setState({
      selectedProducts: [
        ...this.state.selectedProducts,
        {
          no: this.state.productInfo.product_id,
          name: this.state.productInfo.product_name,
          stock: 1,
          price: this.state.productInfo.product_price,
          size: value,
        },
      ],
    });
  };

  render() {
    const { product_image } = this.state.productInfo;

    return (
      <div className="product">
        <main className="productContainer">
          <div className="productDetail">
            <div className="breadcrumbsWrapper">
              <Breadcrumbs paths={this.state.productInfo.paths} />
            </div>
            <div className="productImage">
              <span>{this.state.imageCurrentNo}</span>
              <span>/</span>
              <span>{product_image && product_image.length}</span>
              <div>
                <img src={product_image && product_image[0]} />
              </div>
            </div>
            <div className="productDescription">
              <h2 className="name">{this.state.productInfo.product_name}</h2>
              <dl className="descTable">
                <dt>판매가</dt>
                <dd>
                  {this.state.productInfo.product_price?.toLocaleString()}원
                </dd>
                <dt>상품소재</dt>
                <dd>겉감: 면 100%</dd>
                <dt>사이즈</dt>
                <dd>
                  <select
                    class="selectOption"
                    onChange={e => {
                      this.onSelectOptionItem(e);
                    }}
                  >
                    <option>- [필수] 옵션을 선택해 주세요 -</option>
                    {this.state.productInfo.size_option?.map(size => (
                      <option
                        key={size.option_id}
                        value={size.option_stock === 0 ? '' : size.option_name}
                      >
                        {size.option_name}
                        {size.option_stock === 0 && ' [품절]'}
                      </option>
                    ))}
                  </select>
                </dd>
              </dl>
              <hr />
              {this.state.selectedProducts.length > 0 && (
                <>
                  <dl className="selectedProducts">
                    {this.state.selectedProducts?.map(product => (
                      <Fragment key={product.no}>
                        <dd>
                          {product.name}-{product.size}
                        </dd>
                        <dd className="gridQuanControl">
                          <QuantityController
                            quantityNumber={product.stock}
                            plus={() =>
                              this.onChangeQuantity(
                                product.no,
                                product.size,
                                1,
                                false
                              )
                            }
                            minus={() =>
                              this.onChangeQuantity(
                                product.no,
                                product.size,
                                -1,
                                false
                              )
                            }
                            insert={num =>
                              this.onChangeQuantity(
                                product.no,
                                product.size,
                                num,
                                true
                              )
                            }
                          />
                          <button className="delete">
                            <i class="far fa-times-circle"></i>
                          </button>
                        </dd>
                        <dd className="gridPrice">
                          {(product.price * product.stock).toLocaleString()}원
                        </dd>
                      </Fragment>
                    ))}
                  </dl>
                </>
              )}
              <dl className="descTable">
                <dt>총 상품금액(수량)</dt>
                <dd className="price">
                  {this.state.selectedProducts
                    ?.reduce((acc, cur) => acc + cur.price * cur.stock, 0)
                    .toLocaleString()}
                  원
                </dd>
              </dl>
              <dl>
                <dd className="btnArea">
                  <button className="productButton order">바로구매</button>
                  <button className="productButton">장바구니</button>
                  <button className="productButton">
                    <i class="far fa-heart"></i>
                  </button>
                </dd>
              </dl>
            </div>
          </div>
          <div className="productAdditional">상품상세 예정</div>
        </main>
      </div>
    );
  }
}

export default Product;
