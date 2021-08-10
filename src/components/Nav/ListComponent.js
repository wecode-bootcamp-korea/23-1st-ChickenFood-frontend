import React from 'react';
import './nav.scss';

class ListComponent extends React.Component {
  render() {
    const { path, classname, src, data } = this.props;
    return (
      <li>
        <a href={path}>
          <img className={classname} src={src} />
          {data}
        </a>
      </li>
    );
  }
}

export default ListComponent;
