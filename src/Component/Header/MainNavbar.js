import React, { Component } from 'react';

class MainNavbar extends Component {
  render() {
    const { no, categories } = this.props;
    return (
      <div className="categoryDropdown">
        <div className={`listWrapper ${no === 1 && 'firstList'}`}>
          <ul className="listMenu">
            <li>
              {categories.map((el, index) => {
                return (
                  <a key={index} href={el.url}>
                    {el.name}
                  </a>
                );
              })}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default MainNavbar;
