import React from 'react';

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.focusProfileDropdown();
  }

  render() {
    const {wrapperRef, username, email, button, toggleProfileDropdown, logout} = this.props;
    return (
      <ul tabIndex="0" onBlur={toggleProfileDropdown} ref={wrapperRef} className="profile-dropdown">
        <li className="profile-name">
          {button}
          <div>
            <span>{username}</span>
            <span>{email}</span>
          </div>
        </li>
        <li onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>
          Sign Out
        </li>
      </ul>
    );
  }
};

export default ProfileDropdown;
