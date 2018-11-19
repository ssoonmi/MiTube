import React from 'react';

class VideoShowComments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {comment: ""};
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  render() {
    return (
      <section className="video-show-comments">
        <h2>803 Comments</h2>
        <form>
          <textarea className="video-show-comments-input" onChange={this.update("comment")} value={this.state.comment}/>
        </form>
        <ul className="video-show-comments-list">
        </ul>
      </section>
    );
  }
}

export default VideoShowComments;
