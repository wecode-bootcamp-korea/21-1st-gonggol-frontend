import React from 'react';
import { Link } from 'react-router-dom';
import './Breadcrumbs.scss';

class Breadcrumbs extends React.Component {
  render() {
    const { paths } = this.props;
    return (
      <div className="Breadcrumbs">
        <ul>
          <li>
            <i class="fas fa-home"></i>
            <Link to="/">HOME</Link>
          </li>
          {paths?.map(path => (
            <li key={path.no}>
              <Link to={path.url}>{path.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Breadcrumbs;
