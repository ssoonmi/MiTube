import React from 'react';
import {Redirect} from 'react-router-dom';

class VideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
    this.state.videoIcon = false;
    this.state.thumbnailIcon = false;
    this.state.videoDrag = false;
    this.state.thumbnailDrag = false;
    this.state.disabled = false;

    this.enableSubmit = this.enableSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.props.channelId) {
      this.props.history.push(`/channels/new`);
    }
    const formData = new FormData();
    formData.append('video[title]', this.state.title);
    formData.append('video[description]', this.state.description);
    formData.append('video[url]', this.state.url);
    formData.append('video[thumbnail_url]', this.state.thumbnail_url);
    formData.append('video[file]', this.state.file);
    formData.append('video[thumbnail]', this.state.thumbnail);
    this.setState({disabled: true});
    this.props.submitForm(formData, this.props.channelId, this.enableSubmit);
  }

  enableSubmit() {
    this.setState({disabled: false});
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  handleFile(field) {
    return (e) => {
      if (e.currentTarget.files[0]) {
        this.setState({[field]: e.currentTarget.files[0]});
      }
    }
  }

  mouseEnterFile(field) {
    return (e) => {
      this.preventDefault(e);
      this.setState({[field]: true});
    }
  }

  mouseLeaveFile(field) {
    return (e) => {
      this.preventDefault(e);
      this.setState({[field]: false});
    }
  }

  dragEnterFile(field) {
    return e => {
      this.preventDefault(e);
      this.highlight(e, field);
    }
  }

  dragOverFile(field) {
    return e => {
      this.preventDefault(e);
      this.highlight(e, field)
    }
  }

  dragLeaveFile(field) {
    return e => {
      this.preventDefault(e);
      this.unhighlight(e, field);
    }
  }

  dropFile(field, highlightField) {
    return (e) => {
      this.preventDefault(e);
      this.unhighlight(e, highlightField);
      this.setState({[field]: e.dataTransfer.files[0]});
    }
  }

  highlight(e, field) {
    this.setState({[field]: true});
  }

  unhighlight(e, field) {
    this.setState({[field]: false});
  }

  preventDefault(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    const {errors} = this.props;
    let errorsLis;
    if (errors.length != 0) {
      errorsLis = (
        <ul className="video-form-errors">
          {errors.map((error, idx) => {
            return (
              <li key={idx}>{error}</li>
            )
          })}
        </ul>
      );
    }
    return (
      <div className="video-form-background">
        <div className="video-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} className="video-form">
            <h2>Upload a New Video</h2>
            {errorsLis}
            <div className="submit-file-container">
              <label
                onDragEnter={this.dragEnterFile("videoDrag")}
                onDragLeave={this.dragLeaveFile("videoDrag")}
                onDragOver={this.dragOverFile("videoDrag")}
                onDrop={this.dropFile("file", "videoDrag")}
                onMouseEnter={this.mouseEnterFile("videoIcon")}
                onMouseLeave={this.mouseLeaveFile("videoIcon")}
                className="submit-file">
                {this.state.file ?
                  (
                    <h5>{this.state.file.name}</h5>
                  ) :
                  (
                    <>
                      <i className={"fas fa-upload" + (this.state.videoIcon ? " submit-file-hover" : "")}></i>
                      <h4>Select video file to upload</h4>
                      <div className={this.state.videoDrag ? "submit-file-drag" : ""}>Or drag and drop video files</div>
                    </>
                  )
                }
                <input disabled={this.state.disabled} onChange={this.handleFile("file")} type="file" className="video-upload-field" accept="video/*"/>
              </label>
            </div>
            <div className="submit-file-container">
              <label
                onDragEnter={this.dragEnterFile("thumbnailDrag")}
                onDragLeave={this.dragLeaveFile("thumbnailDrag")}
                onDragOver={this.dragOverFile("thumbnailDrag")}
                onDrop={this.dropFile("thumbnail", "thumbnailDrag")}
                onMouseEnter={this.mouseEnterFile("thumbnailIcon")}
                onMouseLeave={this.mouseLeaveFile("thumbnailIcon")}
                className="submit-file">
                {this.state.thumbnail ?
                  (
                    <h5>{this.state.thumbnail.name}</h5>
                  ) :
                  (
                    <>
                      <i className={"fas fa-upload" + (this.state.thumbnailIcon ? " submit-file-hover" : "")}></i>
                      <h4>Select thumbnail file to upload</h4>
                      <div className={this.state.thumbnailDrag ? "submit-file-drag" : ""}>Or drag and drop image files</div>
                    </>
                  )
                }
                <input disabled={this.state.disabled} onChange={this.handleFile("thumbnail")} type="file" className="thumbnail-upload-field" accept="image/*"/>
              </label>
            </div>
            <input placeholder="Title" type="text" onChange={this.update("title")} value={this.state.title}/>
            <textarea placeholder="Description" onChange={this.update("description")} value={this.state.description}/>
            <input disabled={this.state.disabled} type="submit" value={this.state.disabled ? "PUBLISHING" : "PUBLISH"}/>
          </form>
        </div>
      </div>
    );
  }
}

export default VideoForm;
