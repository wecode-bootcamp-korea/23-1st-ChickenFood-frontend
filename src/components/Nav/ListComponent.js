import React from 'react';
import './nav.scss';

class ListComponent extends React.Component {
  render() {
    return (
      <>
        <li>
          <a href={this.props.path}>
            <img className={this.props.classname} src={this.props.src} />
            {this.props.data}
          </a>
        </li>
      </>
    );
  }
}

export default ListComponent;
