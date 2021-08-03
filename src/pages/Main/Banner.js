import React from 'react';

class Banner extends React.Component {
  render() {
    return (
      <>
        <div className="mainBanner">
          <ul className="bannerBox">
            <li className="bannerImg">
              <img src="/images/banner1.jpg" alt="bannerImg" />
            </li>
            <div className="arrowBox">
              <span
                className="left"
                style={{ backgroundImage: 'url(/images/left.jpg)' }}
              />
              <span
                className="right"
                style={{ backgroundImage: 'url(/images/right.jpg)' }}
              />
            </div>
          </ul>
        </div>
      </>
    );
  }
}

export default Banner;
