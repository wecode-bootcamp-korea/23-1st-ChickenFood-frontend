import React from 'react';
import './WishButton.scss';

class WishButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isCheckLike: true,
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

  handleLike = id => {
    console.log(id);
    fetch(`http://10.58.2.249:8000/likes/${id}`, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6N30.dER8tPLi9IvzpsZ_4uxCeTDRHbzBNhSA8dDAVppBayw',
      },
    });
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
          <img
            className="wishIcon"
            src="./images/heart.png"
            alt="like"
            onClick={() => this.handleLike(id)}
          />
        ) : (
          <img
            className="wishIcon"
            src="./images/heart_red.png"
            alt="like"
            // onClick={this.disLike(id)}
            style={{ width: '30px', height: '30px' }}
          />
        )}
      </div>
    );
  }
}

export default WishButton;
