import React from 'react';
import './signinput.scss';

class Sign extends React.Component {
  render() {
    return (
      <>
        <div className="inputFlexBox">
          <div className="configLabel">
            <label htmlFor={this.props.label}>
              <span className={this.props.necessary}>* </span>
              <span>{this.props.noti}</span>
            </label>
          </div>
          <input
            name={this.props.name}
            type={this.props.type}
            id={this.props.label}
            className={this.props.className}
            onChange={this.props.getValue}
            onBlur={
              this.props.name === 'passwordCheck'
                ? this.props.validation
                : undefined
            }
          />
        </div>
      </>
    );
  }
}

export default Sign;
