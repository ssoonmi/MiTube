import React from 'react';
import {Redirect} from 'react-router-dom';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[url]', this.state.url);
    formData.append('video[thumbnail_url]', this.state.thumbnail_url);
    formData.append('video[file]', this.state.file);
    formData.append('video[thumbnail]', this.state.thumbnail);
    this.props.submitForm(formData, this.props.channelId);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleFile(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.files[0]});
    }
  }

  render() {
    return (
      <div className="video-form-container">
        <form onSubmit={this.handleSubmit.bind(this)} className="video-form">
          <label>Video File</label>
          <input onChange={this.handleFile("file")} type="file" className="video-upload-field" accept="video/*"/>
          <label>Thumbnail File</label>
          <input onChange={this.handleFile("thumbnail")} type="file" className="thumbnail-upload-field" accept="image/*"/>
          <label>Title</label>
          <input type="text" onChange={this.update("title")} value={this.state.title}/>
          <label>Description</label>
          <textarea onChange={this.update("description")} value={this.state.description}/>
          <input type="submit" value="Publish"/>
        </form>
      </div>
    );
  }
}

export default VideoForm;
