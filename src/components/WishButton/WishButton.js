import React from 'react';
import './WishButton.scss';

class WishButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCheckLike: false,
    };
  }

  componentDidMount() {
    // this.getData();
  }
  getData = () => {
    // fetch()
    //   .then(res => res.json())
    //   .then(data => {
    //     this.setState({
    //       likeCheck: data.items,
    //     });
    //   });
  };

  handleLike = event => {
    // 찜하기
    if (event.target.name === 'like_red') {
      // fetch('');
      console.log(event.target.id, event.target.name);
    }
    // 찜해제
    else if (event.target.name === 'like_white') {
      // fetch('');
      console.log(event.target.id, event.target.name);
      // fetch('');
    }
    // fetch(`http://10.58.2.249:8000/likes/${id}`, {
    //   method: 'POST',
    //   headers: {
    //     Authorization:
    //       'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.dER8tPLi9IvzpsZ_4uxCeTDRHbzBNhSA8dDAVppBayw',
    //   },
    // });
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
          <div onClick={this.handleLike}>
            <img
              className="wishIcon"
              name="like_red"
              src="./images/heart_red.png"
              alt="like"
              id={id}
            />
          </div>
        ) : (
          <div onClick={this.handleLike}>
            <img
              className="wishIcon"
              name="like_white"
              src="./images/heart.png"
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
