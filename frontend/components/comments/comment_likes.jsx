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
        const {like, destroyLike, createLike, comment} = this.props;
        switch (fieldVal) {
          case 1:
            like == 1 ? destroyLike(comment.id) : createLike(true, comment.id);
            break;
          case -1:
            like == -1 ? destroyLike(comment.id) : createLike(false, comment.id);
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
