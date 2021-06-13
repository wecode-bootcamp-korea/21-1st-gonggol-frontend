import React from 'react';
import { Link } from 'react-router-dom';
import './SubCategory.scss';

class SubCategory extends React.Component {
  render() {
    const { subCategories, currentCategory, sortBy, onChangeSubCategory } =
      this.props;
    return (
      <div className="subCategory">
        <ul className="subCategoryNav">
          {subCategories?.map(category => (
            <li key={category.categoryNo}>
              <Link
                onClick={() => onChangeSubCategory(category.categoryNo)}
                className={
                  category.categoryNo === currentCategory && 'selected'
                }
              >
                {category.categoryName}
              </Link>
            </li>
          ))}
        </ul>
        <div className="productFilter">
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
