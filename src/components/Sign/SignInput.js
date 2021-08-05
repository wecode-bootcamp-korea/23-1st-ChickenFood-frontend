import React from 'react';
import './signinput.scss';

class Sign extends React.Component {
  render() {
    const { nameCheck } = this.props.name;
    const { labelName } = this.props.label;

    return (
      <>
        <div className="inputFlexBox">
          <div className="configLabel">
            <label htmlFor={labelName}>
              <span className={this.props.necessary}>* </span>
              <span>{this.props.noti}</span>
            </label>
          </div>
          <input
            name={nameCheck}
            type={this.props.type}
            id={labelName}
            className={this.props.className}
            onChange={this.props.getValue}
            onBlur={() =>
              nameCheck === 'passwordCheck' && this.props.validation
            }
          />
        </div>
      </>
    );
  }
}

export default Sign;
