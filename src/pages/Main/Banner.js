import React from 'react';
import BannerImg from './BannerImg';

class Banner extends React.Component {
  // constructor() {
  //   super();

  //   this.state = {
  //     bannerImgs: [],
  //   };
  // }

  // componentDidMount() {
  //   fetch(),
  //     {
  //       method: 'GET',
  //     };
  // }

  render() {
    return (
      <>
        <div className="mainBanner">
          <BannerImg />
          <div className="arrowBox">
            <span
              className="left"
              style={{ backgroundImage: 'url(/images/left.png)' }}
            />
            <span
              className="right"
              style={{ backgroundImage: 'url(/images/right.png)' }}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
