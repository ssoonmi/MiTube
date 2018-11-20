import React from 'react';
import CommentListItemContainer from './comment_list_item_container';
import ProfileButton from '../util/profile_button';
import {Link} from 'react-router-dom';

class VideoShowComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: "",
      showSubmitBtns: false,
    };
    this.hideSubmitBtns = this.hideSubmitBtns.bind(this);
    this.showSubmitBtns = this.showSubmitBtns.bind(this);
  }

  componentDidMount() {
    this.props.fetchComments(this.props.video.id);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment({
      body: this.state.body,
      video_id: this.props.video.id
    });
    this.setState({body: "", showSubmitBtns: false});
  }

  showSubmitBtns(e) {
    if (!this.props.loggedIn) {
      this.props.history.push("/session/new");
    } else {
      const show = this.state.showSubmitBtns;
      this.setState({showSubmitBtns: true});
    }
  }

  hideSubmitBtns(e) {
    this.setState({showSubmitBtns: false});
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    const {user} = this.props;
    const commentLis = this.props.comments.map((comment) => {
      return (
        <CommentListItemContainer comment={comment} key={comment.id}/>
      );
    });
    return (
      <section className="video-show-comments">
        <div className="video-show-comments-header">
          <h2>{commentLis.length} Comments</h2>
          <div className="video-show-comments-form">
            <Link to={user && user.channelIds ? `/channels/${user.channelIds[0]}` : ""}>
              <ProfileButton user={user} size={"40px"} />
            </Link>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <div className="video-show-comments-input-container">
                <textarea
                  onFocus={this.showSubmitBtns}
                  placeholder="Add a public comment..."
                  className="video-show-comments-input"
                  onChange={this.update("body")}
                  value={this.state.body}/>
              </div>
              {this.state.showSubmitBtns ?
                (<div className="comments-submit-btns">
                  <button onClick={this.hideSubmitBtns}>CANCEL</button>
                  <input
                    type="submit"
                    disabled={this.state.body.length == 0}
                    value="COMMENT"/>
                </div>) : (
                  null
                )}
            </form>
          </div>
        </div>
        <ul className="video-show-comments-list">
          {commentLis}
        </ul>
      </section>
    );
  }
}

export default VideoShowComments;
