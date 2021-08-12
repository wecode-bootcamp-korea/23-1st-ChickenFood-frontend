import React from 'react';
import { withRouter } from 'react-router-dom';
import './nav.scss';

class ListComponent extends React.Component {
  handlePage = () => {
    const { path } = this.props;
    this.props.handlePage(path);
  };
  render() {
    const { classname, src, data } = this.props;
    // console.log(this.props); // history, location 확인
    return (
      <li>
        <div
          className="pageMove"
          id={this.props.id}
          onClick={this.handlePage}
          path={this.props.path}
        >
          <img className={classname} src={src} />
          {data}
        </div>
      </li>
    );
  }
}

export default withRouter(ListComponent);
