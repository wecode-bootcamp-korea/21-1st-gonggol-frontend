import React from 'react';
import './ContentTitle.scss';

class ContentTitle extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="contentTitle">
        <h1>
          <span>{children}</span>
        </h1>
      </div>
    );
  }
}
export default ContentTitle;
