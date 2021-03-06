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
        const {like, destroyLike, createLike, video} = this.props;
        switch (fieldVal) {
          case 1:
            like == 1 ? destroyLike(video.id) : createLike(true, video.id);
            break;
          case -1:
            like == -1 ? destroyLike(video.id) : createLike(false, video.id);
            break;
        }
      }
    }
  }

  render() {
    const {numDislikes, numLikes} = this.props;
    const totalLikes = numDislikes + numLikes;
    return (
      <ul className="video-show-info-header-details-btns">
        <div className="video-show-likes-border-bar">
          <div style={{ borderColor: "#065fd4", width: `${(numLikes / totalLikes) * 100}%` }}
            className="video-show-likes-border"></div>
          <div style={{ width: `${(numDislikes / totalLikes) * 100}%` }}
            className="video-show-likes-border"></div>
        </div>
        <li onClick={this.highlight(1)} className="video-show-likes">
          <i style={this.props.like == 1 ? {color: "#065fd4"} : {}} className="fas fa-thumbs-up"></i>
          <span style={this.props.like == 1 ? {color: "#065fd4"} : {}}>{this.props.numLikes}</span>
        </li>
        <li onClick={this.highlight(-1)} className="video-show-likes">
          <i style={this.props.like == -1 ? {color: "#065fd4"} : {}} className="fas fa-thumbs-down"></i>
          <span style={this.props.like == -1 ? {color: "#065fd4"} : {}}>{this.props.numDislikes}</span>
        </li>
      </ul>
    );
  }
}

export default VideoShowLikes;
