import React from 'react';

class VideoShowLikes extends React.Component {
  constructor(props) {
    super(props);
  }

  highlight(fieldVal) {
    return () => {
      if (!this.props.loggedIn) {
        this.props.logIn();
      } else {
        const likeValue = this.props.like;
        const {numLikes, numDislikes} = this.props;
        switch (fieldVal) {
          case 1:
            if (likeValue == 0 || likeValue == null) {
              this.props.createLike(true, this.props.video.id);
            } else {
              this.props.destroyLike(this.props.video.id);
            }
            break;
          case -1:
            if (likeValue == 0 || likeValue == null) {
              this.props.createLike(false, this.props.video.id);
            } else {
              this.props.destroyLike(this.props.video.id);
            }
            break;
        }
      }
    }
  }

  render() {
    return (
      <ul className="video-show-info-header-details-btns">
        <li onClick={this.highlight(1)} className="video-show-likes">
          <i style={this.props.like == 1 ? {color: "#065fd4"} : {}} className="fas fa-thumbs-up"></i>
          <span style={this.props.like == 1 ? {color: "#065fd4"} : {}}>{this.props.numLikes}</span>
          <div style={this.props.like == 1 ? {borderColor: "#065fd4"} : {}} className="video-show-likes-border"></div>
        </li>
        <li onClick={this.highlight(-1)} className="video-show-likes">
          <i style={this.props.like == -1 ? {color: "#065fd4"} : {}} className="fas fa-thumbs-down"></i>
          <span style={this.props.like == -1 ? {color: "#065fd4"} : {}}>{this.props.numDislikes}</span>
          <div style={this.props.like == -1 ? {borderColor: "#065fd4"} : {}} className="video-show-likes-border"></div>
        </li>
      </ul>
    );
  }
}

export default VideoShowLikes;
