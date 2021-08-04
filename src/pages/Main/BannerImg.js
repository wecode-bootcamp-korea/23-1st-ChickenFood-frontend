import React from 'react';

class BannerImg extends React.Component {
  render() {
    const { src, bannerName } = this.props;
    return (
      <li className="bannerImg">
        <img src={src} alt={bannerName} />
      </li>
    );
  }
}

export default BannerImg;
