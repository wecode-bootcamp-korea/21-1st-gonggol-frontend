import React from 'react';
import Breadcrumbs from '../../../Component/Breadcrumbs/Breadcrumbs';
import ContentTitle from '../../../Component/ContentTitle/ContentTitle';
import './CategoryHeader.scss';

class CategoryHeader extends React.Component {
  render() {
    const { id, name, bannerImage, categoryPath, itemCount } = this.props;

    return (
      <div className="CategoryHeader">
        <div>
          <img alt={`${name}의 배너 이미지`} src={bannerImage} />
        </div>
        <div className="normalmenu">
          <div>TOTAL PRODUCT: {itemCount}</div>
          <Breadcrumbs paths={categoryPath} />
        </div>
        <ContentTitle>{name}</ContentTitle>
      </div>
    );
  }
}

export default CategoryHeader;
