import React from 'react';
import ListComponent from './ListComponent';
import './nav.scss';

class SubLiComponent extends React.Component {
  render() {
    const { category } = this.props;
    const categoryKey = Object.keys(category);
    return (
      <ul className={categoryKey}>
        {category[categoryKey].map(el => {
          return (
            <ListComponent key={el.id} data={el.subCategory} path={el.path} />
          );
        })}
      </ul>
    );
  }
}

export default SubLiComponent;
