import React from 'react';

class CommentLikes extends React.Component {
  constructor(props) {
    super(props);
  }

  highlight(fieldVal) {
    return () => {
      if (!this.props.loggedIn) {
        this.props.logIn();
      } else {
        const likeValue = this.props.like;
        switch (fieldVal) {
          case 1:
            if (likeValue == 1) {
              this.props.destroyLike(this.props.comment.id);
            } else {
              this.props.createLike(true, this.props.comment.id);
            }
            break;
          case -1:
            if (likeValue == -1) {
              this.props.destroyLike(this.props.comment.id);
            } else {
              this.props.createLike(false, this.props.comment.id);
            }
            break;
        }
      }
    }
  }

  render() {
    const { numDislikes, numLikes, like } = this.props;
    return (
      <>
        <li onClick={this.highlight(1)} className="comment-likes">
          <i style={like == 1 ? { color: "#065fd4" } : {}} className="fas fa-thumbs-up"></i>
          <span style={like == 1 ? { color: "#065fd4" } : {}}>{numLikes}</span>
        </li>
        <li onClick={this.highlight(-1)} className="comment-likes">
          <i style={like == -1 ? { color: "#065fd4" } : {}} className="fas fa-thumbs-down"></i>
          <span style={like == -1 ? { color: "#065fd4" } : {}}>{numDislikes}</span>
        </li>
      </>
    );
  }
}

export default CommentLikes;
