import React from 'react';
import './signbtn.scss';

class SignBtn extends React.Component {
  render() {
    const { type, classname, submit, text } = this.props;
    return (
      <button type={type} className={classname} onClick={submit}>
        {text}
      </button>
    );
  }
}

export default SignBtn;
