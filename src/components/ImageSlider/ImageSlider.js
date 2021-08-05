import React from 'react';
class ImageSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slideImage: [],
      slideIndex: 0,
      bestData: {},
    };
  }
  componentDidMount() {
    const data = [
      'https://www.w3schools.com/w3css/img_nature_wide.jpg',
      'https://www.w3schools.com/w3css/img_snow_wide.jpg',
      'https://www.w3schools.com/w3css/img_mountains_wide.jpg',
    ];
    const images = data;
    this.setState({
      slideImage: images,
      slideIndex: 0,
    });
  }

  moveButton = n => {
    let currentIndex = this.state.slideIndex;
    let imageLength = this.state.slideImage.length;

    n = currentIndex + n;
    if (currentIndex === 0) {
      n = imageLength - 1;
    } else if (currentIndex > imageLength) {
      n = 0;
    }
    this.setState({
      slideIndex: n,
    });
    // console.log('예외처리', n);
  };

  selectIndex = () => {};

  render() {
    const { slideImage, slideIndex } = this.state;
    console.log('현재 인덱스', slideIndex);
    return (
      <div className="slideContainer">
        <div className="slider">
          <span className="moveButton left" onClick={() => this.moveButton(-1)}>
            ❮
          </span>
          <img src={slideImage[slideIndex]} alt="productslide" />
          <span className="moveButton right" onClick={() => this.moveButton(1)}>
            ❯
          </span>
        </div>
        <div className="buttonContainer">
          {/* <div className="clickButtonContainer">
            <button
              className="circleButton"
              onClick={() => this.selectIndex}
            ></button>
            <button
              className="circleButton"
              onClick={() => this.selectIndex}
            ></button>
            <button
              className="circleButton"
              onClick={() => this.selectIndex}
            ></button>
          </div> */}
        </div>
      </div>
    );
  }
}

export default ImageSlider;
