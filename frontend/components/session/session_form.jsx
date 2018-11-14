import React from 'react';
import {Link} from 'react-router-dom'

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.user
    this.handleLoginDemo = this.handleLoginDemo.bind(this);
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

  handleLoginDemo(e) {
    e.preventDefault();
    this.props.loginDemo();
  }

  render() {
    let emailField;
    let otherAuthLink = (<Link to="/users/new">Sign Up</Link>);
    let usernamePlaceholder = "username/email";
    if (this.props.formType == "Sign Up") {
      usernamePlaceholder = "username"
      emailField = (
        <>
          <label>Enter your email</label>
          <input placeholder="email" type="text" onChange={this.update("email")} value={this.state.email}/>
        </>
      );
      otherAuthLink = (<Link to="/session/new">Sign In</Link>);
    }
    let errorsLi;
    if (this.props.errors) {
      errorsLi = this.props.errors.map((error, idx) => {
        return <li key={idx}>{error}</li>;
      });
    }
    return (
      <article className="session-form">
        <h2>{this.props.formType}</h2>
        <ul className="session-errors">
          {errorsLi}
        </ul>
        <form onSubmit={this.handleSubmit.bind(this)}>
          {emailField}
          <label>Enter your username or email</label>
          <input type="text" placeholder={usernamePlaceholder} onChange={this.update("username")} value={this.state.username}/>
          <label>Enter your password</label>
          <input type="password" placeholder="password" onChange={this.update("password")} value={this.state.password}/>
          <div className="session-form-btns">
            {otherAuthLink}
            <div className="demo-user-btn" onClick={this.handleLoginDemo}>Sign in as Demo User</div>
            <input type="submit" value={this.props.formType}/>
          </div>
        </form>
      </article>
    );
  }
}

export default SessionForm;
