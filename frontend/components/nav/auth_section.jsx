import React from 'react';
import {Link} from 'react-router-dom';
import ProfileDropdown from './profile_dropdown';


class AuthSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfileDropdown: false,
      showAuthForm: false,
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setProfileBtnRef = this.setProfileBtnRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  profileButton(e) {
    const {showProfileDropdown} = this.state;
    if (!showProfileDropdown) {
      this.setState({showProfileDropdown: !showProfileDropdown});
      document.addEventListener('mousedown', this.handleClickOutside);
    } else {
      this.setState({showProfileDropdown: !showProfileDropdown});
    }
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setProfileBtnRef(node) {
    this.profileBtnRef = node;
  }

  handleClickOutside(e) {
    if (this.wrapperRef && !this.profileBtnRef.contains(e.target) && !this.wrapperRef.contains(e.target)) {
      const {showProfileDropdown} = this.state;
      this.setState({showProfileDropdown: !showProfileDropdown});
      document.removeEventListener('mousedown', this.handleClickOutside);
    }
  }

  showAuthForm(e) {
    const {showAuthForm} = this.state;
    this.setState({showAuthForm: !showAuthForm});
  }

  logout(e) {
    this.profileButton(e);
    this.props.logout();
  }

  render() {
    const {loggedIn,username,email} = this.props;
    const {showProfileDropdown} = this.state;
    return (
      <div className="nav-auth-section">
        {loggedIn ? <button ref={this.setProfileBtnRef} className="profile-btn" onClick={this.profileButton.bind(this)}>S</button> :
      <Link to="/session/new" className="sign-in-btn">SIGN IN</Link>}
        {this.state.showProfileDropdown ? <ProfileDropdown wrapperRef={this.setWrapperRef} username={username} email={email} logout={this.logout.bind(this)}/> : null}
      </div>
    );
  }


};

export default AuthSection;
