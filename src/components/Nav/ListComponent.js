import React from 'react';
import { withRouter } from 'react-router-dom';
import './nav.scss';

class ListComponent extends React.Component {
  render() {
    const TOKEN = localStorage.getItem('TOKEN');
    const { path, classname, src, data } = this.props;

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
