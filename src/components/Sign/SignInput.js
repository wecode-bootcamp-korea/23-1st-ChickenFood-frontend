import React from 'react';
import './signinput.scss';

class Sign extends React.Component {
  render() {
    const {
      label,
      necessary,
      noti,
      name,
      type,
      classname,
      getValue,
      validation,
    } = this.props;
    return (
      <div className="inputFlexBox">
        <div className="configLabel">
          <label htmlFor={label}>
            <span className={necessary}>* </span>
            <span>{noti}</span>
          </label>
        </div>
        <input
          name={name}
          type={type}
          id={label}
          className={classname}
          onChange={getValue}
          onBlur={name === 'passwordCheck' ? validation : null}
        />
      </div>
    );
  }
}

export default Sign;
