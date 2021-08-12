import React from 'react';
import './Banner.scss';

class Banner extends React.Component {
  constructor() {
    super();

    this.state = {
      bannerImg: [],
      pageNum: 1,
    };
  }

  componentDidMount() {
    fetch('/data/bannerImg.json')
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
    let transNum = BANNER_WIDTH * ((bannerImg.length - 1) / 2);

    if (pageNum > 1) {
      transNum =
        BANNER_WIDTH * ((bannerImg.length - 1) / 2) -
        BANNER_WIDTH * (pageNum - 1);
    }

    return (
      <div className="mainBanner">
        <ul
          className="bannerBox"
          style={{ transform: `translate(${transNum}px)` }}
        >
          {bannerImg.map(el => (
            <li className="bannerImg" key={el.id}>
              <img src={el.imgSrc} alt={el.imgName} />
            </li>
          ))}
        </ul>
        <div className="arrowBox">
          <span className="left" onClick={prvBtn} />
          <span className="right" onClick={nextBtn} />
        </div>
      </div>
    );
  }
}

export default Banner;

const BANNER_WIDTH = 1920;
