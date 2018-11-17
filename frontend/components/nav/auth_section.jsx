import React from 'react';
import {Link} from 'react-router-dom';
import ProfileDropdown from './profile_dropdown';


class AuthSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showProfileDropdown: false,
    };
    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.setProfileBtnRef = this.setProfileBtnRef.bind(this);
    this.focusProfileDropdown = this.focusProfileDropdown.bind(this);
    this.toggleProfileDropdown = this.toggleProfileDropdown.bind(this);

    this.logout = this.logout.bind(this);
    // this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  setProfileBtnRef(node) {
    this.profileBtnRef = node;
  }
  //
  // profileButton(e) {
  //   const {showProfileDropdown} = this.state;
  //   if (!showProfileDropdown) {
  //     this.setState({showProfileDropdown: !showProfileDropdown});
  //     document.addEventListener('mousedown', this.handleClickOutside);
  //   } else {
  //     this.setState({showProfileDropdown: !showProfileDropdown});
  //   }
  // }
  //
  // handleClickOutside(e) {
  //   e.stopPropagation();
  //   if (this.wrapperRef && !this.profileBtnRef.contains(e.target) && !this.wrapperRef.contains(e.target)) {
  //     const {showProfileDropdown} = this.state;
  //     this.setState({showProfileDropdown: !showProfileDropdown});
  //     document.removeEventListener('mousedown', this.handleClickOutside);
  //   }
  // }
  //
  // showAuthForm(e) {
  //   const {showAuthForm} = this.state;
  //   this.setState({showAuthForm: !showAuthForm});
  // }

  logout(e) {
    e.stopPropagation();
    this.props.logout();
    this.toggleProfileDropdown();
  }

  toggleProfileDropdown(e) {
    const {showProfileDropdown} = this.state;
    this.setState({showProfileDropdown: !showProfileDropdown});
  }

  focusProfileDropdown() {
    this.wrapperRef.focus();
  }

  render() {
    const {loggedIn,username,email,iconUrl, channelId} = this.props;
    const {showProfileDropdown} = this.state;
    const newVideoLink = channelId ? `/channels/${channelId}/videos/new` : `/channels/new`;
    const newVideoBtn = (
      <Link to={newVideoLink} className="new-video-btn">
        <i className="fas fa-video">
          <span>+</span>
        </i>
      </Link>
    );
    let button;
    if (loggedIn) {
      let content;
      if (iconUrl) {
        // content = <img className="profile-image" src={iconUrl}></img>
      } else {
        content = username[0].toUpperCase()
      }
      button = <button style={{backgroundImage: `url(${iconUrl})`}} ref={this.setProfileBtnRef} className="profile-btn" onClick={this.toggleProfileDropdown}>{content}</button>;
    } else {
      button = <Link to="/session/new" className="sign-in-btn">SIGN IN</Link>;
    }
    return (
      <div className="nav-auth-section">
        {newVideoBtn}
        {button}
        {this.state.showProfileDropdown ? <ProfileDropdown focusProfileDropdown={this.focusProfileDropdown} toggleProfileDropdown={this.toggleProfileDropdown} wrapperRef={this.setWrapperRef} username={username} button={button} email={email} logout={this.logout}/> : null}
      </div>
    );
  }


};

export default AuthSection;
