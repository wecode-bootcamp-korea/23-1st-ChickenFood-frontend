import React from 'react';
import './WishButton.scss';

class WishButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCheckLike: true,
    };
  }

  handleLike = (id, event) => {
    // 찜하기
    if (event.target.name === 'like_white') {
      fetch(`http://10.58.2.134:8000/likes/${id}`, {
        method: 'POST',
        headers: {
          Authorization: localStorage.getItem('TOKEN'),
        },
      });
    }

    // 찜해제
    else if (event.target.name === 'like_red') {
      fetch(`http://10.58.2.134:8000/likes/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: localStorage.getItem('TOKEN'),
        },
      });
    }

    this.setState({
      isCheckLike: !this.state.isCheckLike,
    });
  };

  render() {
    const { id } = this.props;
    const { isCheckLike } = this.state;
    return (
      <div className="icon">
        {isCheckLike ? (
          <div onClick={event => this.handleLike(id, event)}>
            <img
              className="wishIcon"
              name="like_white"
              src="/images/heart.png"
              alt="like"
              id={id}
            />
          </div>
        ) : (
          <div onClick={event => this.handleLike(id, event)}>
            <img
              className="wishIcon"
              name="like_red"
              src="/images/heart_red.png"
              alt="like"
              id={id}
            />
          </div>
        )}
      </div>
    );
  }
}

export default WishButton;
