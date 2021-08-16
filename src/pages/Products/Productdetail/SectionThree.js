import React, { Component } from 'react';
import './SectionThree.scss';

export class SectionThree extends Component {
  render() {
    return (
      <div>
        <div className="sectionThree sections">
          <div>
            <div className="optionWrapper">
              <select className="selectBox" onChange={this.props.select}>
                <option value="옵션선택" id="0">
                  옵션을 선택해주세요
                </option>
                {this.props.itemType.map((item, index) => {
                  return (
                    <option key={index} value={index}>
                      {item.name}
                    </option>
                  );
                })}
              </select>
            </div>
          </div>
          <div>
            <div className="productQuantity"> </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionThree;
