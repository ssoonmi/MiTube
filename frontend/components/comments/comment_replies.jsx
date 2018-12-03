import React from 'react';
import CommentReplyContainer from './comment_reply_container';

class CommentReplies extends React.Component {
  render() {
    const {replies, replyIds, users, showReplies} = this.props;
    const repliesLis = replyIds.map((replyId) => {
      const reply = replies[replyId];
      const user = users[reply.user_id];
      return (
        <CommentReplyContainer key={reply.id} comment={reply} user={user} />
      );
    });
    return (
      <ul className="comment-replies-list" style={{display: showReplies ? "flex" : "none"}}>
        {repliesLis}
      </ul>
    );
  }
}

export default CommentReplies;