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
    currentIndex = currentIndex + n;
    if (currentIndex === -1) {
      currentIndex = imageLength - 1;
    } else if (currentIndex > imageLength - 1) {
      currentIndex = 0;
    }

    this.setState({
      slideIndex: currentIndex,
    });
  };

  render() {
    const { slideImage, slideIndex } = this.state;
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
      </div>
    );
  }
}

export default ImageSlider;
