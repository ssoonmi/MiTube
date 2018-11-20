import React from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      body: this.props.body,
      showSubmitBtns: false,
    };
    this.hideSubmitBtns = this.hideSubmitBtns.bind(this);
    this.showSubmitBtns = this.showSubmitBtns.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = {
      body: this.state.body,
    };
    if (this.props.video) {
      formData.video_id = this.props.video.id;
    }
    if (this.props.id) {
      formData.id = this.props.id;
    }
    this.props.submitCommentForm(formData);
  }

  showSubmitBtns(e) {
    const show = this.state.showSubmitBtns;
    this.setState({showSubmitBtns: true});
  }

  hideSubmitBtns(e) {
    this.props.cancelEditComment();
    this.setState({showSubmitBtns: false});
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
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
              value="SAVE"/>
          </div>) : (
            null
          )}
      </form>
    );
  }
}

export default CommentForm;
