import React from 'react';
import './ContentTitle.scss';

class ContentTitle extends React.Component {
  render() {
    const { children } = this.props;
    return (
      <div className="ContentTitle">
        <h2>
          <span>{children}</span>
        </h2>
      </div>
    );
  }
}
export default ContentTitle;
