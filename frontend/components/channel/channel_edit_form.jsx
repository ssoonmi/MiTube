import React from 'react';

class ChannelForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.props.channel, {
      iconHover: false,
      splashHover: false,
      iconDrag: false,
      splashDrag: false,
      disabled: false,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('channel[name]', this.state.name);
    formData.append('channel[description]', this.state.description);
    if (this.state.icon) {
      formData.append('channel[icon]', this.state.icon);
    }
    if (this.state.splash) {
      formData.append('channel[splash]', this.state.splash);
    }
    this.setState({disabled: true});
    this.props.submitForm(formData);
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
    return (
      <div className="channel-form-background">
        <div className="channel-form-container">
          <form onSubmit={this.handleSubmit.bind(this)} className="channel-form">
            <h2>Edit Channel</h2>
            <label>Name</label>
            <input placeholder="Name" type="text" onChange={this.update("name")} value={this.state.name}/>
            <label>Description</label>
            <textarea placeholder="Description" onChange={this.update("description")} value={this.state.description}/>
            <div className="channel-file-submit-container">
              <div className="submit-file-container">
                <label
                  onDragEnter={this.dragEnterFile("iconDrag")}
                  onDragLeave={this.dragLeaveFile("iconDrag")}
                  onDragOver={this.dragOverFile("iconDrag")}
                  onDrop={this.dropFile("file", "iconDrag")}
                  onMouseEnter={this.mouseEnterFile("iconHover")}
                  onMouseLeave={this.mouseLeaveFile("iconHover")}
                  className="submit-file">
                  {this.state.icon ?
                    (
                      <h5>{this.state.icon.name}</h5>
                    ) :
                    (
                      <>
                        <i className={"fas fa-upload" + (this.state.iconHover ? " submit-file-hover" : "")}></i>
                        <span>OPTIONAL</span>
                        <h4>Select channel's new icon file to upload</h4>
                        <div className={this.state.iconDrag ? "submit-file-drag" : ""}>Or drag and drop image files</div>
                      </>
                    )
                  }
                  <input onChange={this.handleFile("icon")} type="file" className="icon-upload-field" accept="channel/*"/>
                </label>
              </div>
              <div className="submit-file-container">
                <label
                  onDragEnter={this.dragEnterFile("splashDrag")}
                  onDragLeave={this.dragLeaveFile("splashDrag")}
                  onDragOver={this.dragOverFile("splashDrag")}
                  onDrop={this.dropFile("splash", "splashDrag")}
                  onMouseEnter={this.mouseEnterFile("splashHover")}
                  onMouseLeave={this.mouseLeaveFile("splashHover")}
                  className="submit-file">
                  {this.state.splash ?
                    (
                      <h5>{this.state.splash.name}</h5>
                    ) :
                    (
                      <>
                        <i className={"fas fa-upload" + (this.state.splashHover ? " submit-file-hover" : "")}></i>
                        <span>OPTIONAL</span>
                        <h4>Select channel's new splash file to upload</h4>
                        <div className={this.state.splashDrag ? "submit-file-drag" : ""}>Or drag and drop image files</div>
                      </>
                    )
                  }
                  <input onChange={this.handleFile("splash")} type="file" className="splash-upload-field" accept="image/*"/>
                </label>
              </div>
            </div>
            <input disabled={this.state.disabled} type="submit" value={this.state.disabled ? "UPDATING CHANNEL" : "UPDATE CHANNEL"}/>
          </form>
        </div>
      </div>
    );
  }

}

export default ChannelForm;
