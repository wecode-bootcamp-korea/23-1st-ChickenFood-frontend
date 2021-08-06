import React from 'react';
import './signbtn.scss';

class SignBtn extends React.Component {
  render() {
    return (
      <>
        <button
          type={this.props.type}
          className={this.props.className}
          onClick={this.props.submit}
        >
          {this.props.text}
        </button>
      </>
    );
  }
}

export default SignBtn;
