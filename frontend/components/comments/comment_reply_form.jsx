import React from 'react';
import ProfileButton from '../util/profile_button';

class CommentReplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.hideReplyForm(e);
    this.props.createReply({
      body: this.state.body,
      parent_comment_id: this.props.parentCommentId,
      video_id: this.props.videoId,
    });
  }

  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const backgroundBtnColor = this.state.body.length == 0 ? "#d4e9fb" : "#0063d8";
    return (
      <div className="comment-reply">
        <ProfileButton size={"24px"} user={this.props.currentUser} />
        <form className="comment-reply-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="video-show-comments-input-container">
            <textarea
              placeholder="Add a public reply..."
              className="video-show-comments-input"
              onChange={this.update("body")}
              value={this.state.body}/>
          </div>
          <div className="comments-submit-btns">
            <button onClick={this.props.hideReply}>CANCEL</button>
            <input
              style={{ backgroundColor: backgroundBtnColor, color: "#eef3fc" }}
              type="submit"
              disabled={this.state.body.length == 0}
              value="REPLY" />
          </div>
        </form>
      </div>
    );
  }
}

export default CommentReplyForm;