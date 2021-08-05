import React from 'react';
import BannerImg from './BannerImg';

class Banner extends React.Component {
  constructor() {
    super();

    this.state = {
      bannerImg: [],
      pageNum: 1,
    };
  }

  componentDidMount() {
    fetch('/data/bannerImg.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        this.setState({
          bannerImg: res,
        });
      });
  }

  nextBtn = () => {
    const { pageNum, bannerImg } = this.state;
    let index = pageNum;
    if (index === bannerImg.length) {
      index = 0;
    }
    index = index + 1;
    this.setState({
      pageNum: index,
    });
  };

  prvBtn = () => {
    const { pageNum, bannerImg } = this.state;
    let index = pageNum;
    if (index === 1) {
      index = bannerImg.length + 1;
    }
    index = index - 1;
    this.setState({
      pageNum: index,
    });
  };

  render() {
    const { bannerImg, pageNum } = this.state;
    const { prvBtn, nextBtn } = this;
    let transNum = 1920 * ((bannerImg.length - 1) / 2);

    if (pageNum > 1) {
      transNum = 1920 * ((bannerImg.length - 1) / 2) - 1920 * (pageNum - 1);
    }

    return (
      <>
        <div className="mainBanner">
          <ul
            className="bannerBox"
            style={{ transform: `translate(${transNum}px)` }}
          >
            {bannerImg.map((el, index) => (
              <BannerImg
                key={index + el.imgName}
                src={el.imgSrc}
                bannerName={el.imgName}
              />
            ))}
          </ul>
          <div className="arrowBox">
            <span
              className="left"
              style={{ backgroundImage: 'url(/images/left.png)' }}
              onClick={prvBtn}
            />
            <span
              className="right"
              style={{ backgroundImage: 'url(/images/right.png)' }}
              onClick={nextBtn}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Banner;
