import React from 'react';
import { withRouter } from 'react-router-dom';
import './nav.scss';

class ListComponent extends React.Component {
  render() {
    const TOKEN = localStorage.getItem('TOKEN');
    const { path, classname, imgClassName, src, data } = this.props;

    const test = e => {
      const { id } = e.target;
      const btnClassName = e.target.className;

      if (id) {
        this.props.handlePath(id);
      } else {
        console.log('error');
      }

      if (btnClassName === 'pageMove logout') {
        return localStorage.removeItem(TOKEN);
      } else {
        return this.props.history.push(path);
      }
    };

    return (
      <li>
        <div className={classname} id={this.props.name} onClick={test}>
          <img className={imgClassName} src={src} />
          {data}
        </div>
      </li>
    );
  }
}

export default withRouter(ListComponent);
