import React from 'react';
import TimeAgo from '../util/time_ago';
import {Link} from 'react-router-dom';
import EditMenu from './edit-comment-menu';
import CommentForm from './comment-form';

class CommentListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEditMenuBtn: false,
      showEditMenu: false,
      editComment: false,
    };
    this.showEditMenuBtn = this.showEditMenuBtn.bind(this);
    this.hideEditMenuBtn = this.hideEditMenuBtn.bind(this);
    this.toggleEditMenu = this.toggleEditMenu.bind(this);
    this.hideEditMenu = this.hideEditMenu.bind(this);
    this.showEditMenu = this.showEditMenu.bind(this);
    this.editComment = this.editComment.bind(this);
    this.deleteComment = this.deleteComment.bind(this);
    this.updateComment = this.updateComment.bind(this);
    this.setEditMenuBtn = this.setEditMenuBtn.bind(this);
    this.cancelEditComment = this.cancelEditComment.bind(this);
    this.focus = this.focus.bind(this);
    this.blur = this.blur.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  editComment() {
    this.blur();
    this.setState({editComment: true});
  }

  cancelEditComment() {
    this.setState({editComment: false});
  }

  updateComment(formData) {
    this.props.updateComment(formData);
    this.setState({editComment: false});
  }

  deleteComment() {
    this.blur();
    this.props.deleteComment(this.props.comment.id);
  }

  setEditMenuBtn(node) {
    this.editMenuBtn = node;
  }

  focus() {
    this.editMenuBtn.focus();
  }

  blur() {
    this.editMenuBtn.blur();
  }

  showEditMenuBtn(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({showEditMenuBtn: true});
  }

  hideEditMenuBtn(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({showEditMenuBtn: false});
  }

  showEditMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({showEditMenu: true});
  }

  hideEditMenu(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({showEditMenu: false});
  }

  toggleEditMenu(e) {
    e.preventDefault();
    const {showEditMenu} = this.state;
    this.setState({showEditMenu: !showEditMenu});
  }

  render() {
    const {comment, user, currentUserId} = this.props;
    const {showEditMenu, showEditMenuBtn, editComment} = this.state;
    return (
      <li
        onMouseEnter={this.showEditMenuBtn}
        onMouseLeave={this.hideEditMenuBtn}>
        <Link to={user && user.channelIds ? `/channels/${user.channelIds[0]}` : ""}>
          <button className="profile-btn">S</button>
        </Link>
        <div className="video-show-comments-list-item-comment">
          <div className="comment-details">
            <Link to={user && user.channelIds ? `/channels/${user.channelIds[0]}` : ""}>
              <h5>{user ? user.username : ""}</h5>
              <span><TimeAgo time={comment.created_at}/></span>
            </Link>
            {(currentUserId && currentUserId == comment.user_id) && (showEditMenuBtn || showEditMenu) ?
              (
                <>
                  <i
                    onClick={this.showEditMenu}
                    className="fas fa-ellipsis-v comment-details-menu-btn"
                  ></i>
                  {showEditMenu ?
                    (
                      <EditMenu
                      focus={this.focus}
                      setEditMenuBtn={this.setEditMenuBtn}
                      hideEditMenu = {this.hideEditMenu}
                      deleteComment = {this.deleteComment}
                      editComment = {this.editComment} />
                    ) : (null)
                  }
                </>
              ) :
              null
            }
          </div>
          {editComment ?
            (
              <CommentForm
              body={this.props.comment.body}
              id={this.props.comment.id}
              submitCommentForm = {this.updateComment}
              cancelEditComment = {this.cancelEditComment}/>
            ) : (
              <pre className="comment-body">{comment.body}</pre>
            )
          }
        </div>
      </li>
    );
  }
}

export default CommentListItem;
