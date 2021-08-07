import React from 'react';
import './nav.scss';

class ListComponent extends React.Component {
  render() {
    return (
      <>
        <li>
          <a href={this.props.path}>{this.props.data}</a>
        </li>
      </>
    );
  }
}

export default ListComponent;
