import React from 'react';

class UserEditForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.state.iconHover = false;
    this.state.iconDrag = false;
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[username]', this.state.username);
    formData.append('user[email]', this.state.email);
    if (this.state.icon) {
      formData.append('user[icon]', this.state.icon);
    }
    this.setState({disabled: true});
    this.props.submitForm(formData, this.props.userId);
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
            <h2>Edit User Info</h2>
            <label>Username</label>
            <input placeholder="Username" type="text" onChange={this.update("username")} value={this.state.username}/>
            <label>Email</label>
            <input placeholder="Email" type="text" onChange={this.update("email")} value={this.state.email}/>
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
                        <h4>Select a new user's icon file to upload</h4>
                        <div className={this.state.iconDrag ? "submit-file-drag" : ""}>Or drag and drop image files</div>
                      </>
                    )
                  }
                  <input onChange={this.handleFile("icon")} type="file" className="icon-upload-field" accept="user/*"/>
                </label>
              </div>
            </div>
            <input disabled={this.state.disabled} type="submit" value={"EDIT INFO"}/>
          </form>
        </div>
      </div>
    );
  }

}

export default UserEditForm;
