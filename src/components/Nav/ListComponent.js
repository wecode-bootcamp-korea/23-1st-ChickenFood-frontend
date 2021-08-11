import React from 'react';
import { withRouter } from 'react-router-dom';
import './nav.scss';

class ListComponent extends React.Component {
  render() {
    const { path, classname, src, data } = this.props;
    // console.log(this.props); // history, location 확인
    return (
      <li>
        <div
          className="pageMove"
          onClick={() => {
            this.props.history.push(path);
          }}
        >
          <img className={classname} src={src} />
          {data}
        </div>
      </li>
    );
  }
}

export default withRouter(ListComponent);
