import React from 'react';
import { Link } from 'react-router-dom';
import './SubCategory.scss';

class SubCategory extends React.Component {
  render() {
    const { subCategories, currentCategory, sortBy, onChangeSubCategory } =
      this.props;
    return (
      <div className="SubCategory">
        <ul className="subcate-nav">
          {subCategories?.map(category => (
            <li key={category.id}>
              <Link
                onClick={() => onChangeSubCategory(category.id)}
                className={category.id === currentCategory && 'selected'}
              >
                {category.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="product-filter">
          <select>
            <option>정렬방식</option>
            <option>신상품</option>
            <option>상품명</option>
            <option>낮은 가격순</option>
            <option>높은 가격순</option>
          </select>
        </div>
      </div>
    );
  }
}

export default SubCategory;
