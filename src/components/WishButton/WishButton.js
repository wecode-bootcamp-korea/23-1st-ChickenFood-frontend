import React from 'react';
import { LIKES_MYPAGE } from '../../config.js';

class WishButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCheckLike: true,
    };
  }

  componentDidMount() {
    this.getData();
  }
  getData = () => {
    // fetch(`${LIKES_MYPAGE}`)
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       likeCheck: data.items,
    //     });
    //   });
  };
  handleLike = () => {
    this.setState({
      isCheckLike: !this.state.isCheckLike,
    });
  };

  render() {
    const { isCheckLike } = this.state;
    return (
      <div>
        {isCheckLike ? (
          <img
            className="wishIcon"
            src="./images/heart.png"
            alt="like"
            onClick={this.handleLike}
            style={{ width: '30px', height: '30px' }}
          />
        ) : (
          <img
            className="wishIcon"
            src="./images/heart_red.png"
            alt="like"
            onClick={this.handleLike}
            style={{ width: '30px', height: '30px' }}
          />
        )}
      </div>
    );
  }
}

export default WishButton;
