import React, { Component } from 'react';
import './SectionOne.scss';
import WishButton from '../../../components/WishButton/WishButton';

export class SectionOne extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id } = this.props;
    return (
      <div>
        <div className="sectionOne sections">
          <div className="productName">
            {this.props.name}
            <div className="iconsWrapper">
              {/* <img className="heart" alt="heart" src="./images/heart.png" /> */}
              <div className="wishBtnWrapper">
                <WishButton id={id} />
              </div>
              <img className="share" alt="share" src="/images/share.png" />
            </div>
          </div>
          <div className="productPrice">
            ₩{Math.floor(this.props.price).toLocaleString('ko-KR')}
          </div>
        </div>
      </div>
    );
  }
}

export default SectionOne;
