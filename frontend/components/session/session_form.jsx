import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user;
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submitForm(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    }
  }

  render() {
    let emailField;
    if (this.props.formType == "Sign Up") {
      emailField = (
        <label> Email:
          <input type="text" onChange={this.update("email")} value={this.state.email}/>
        </label>
      );
    }
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="sessionForm">
        {emailField}
        <label> Username:
          <input type="text" onChange={this.update("username")} value={this.state.username}/>
        </label>
        <label> Password:
          <input type="password" onChange={this.update("password")} value={this.state.password}/>
        </label>
        <input type="submit" value={this.props.formType}/>
      </form>
    );
  }
}

export default SessionForm;
