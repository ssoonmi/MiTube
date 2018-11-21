import React from 'react';
import {Link} from 'react-router-dom';

class ProfileDropdown extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.focusProfileDropdown();
  }

  render() {
    const {wrapperRef, username, email, button, toggleProfileDropdown, logout, channelId, history} = this.props;
    const myChannelLink = channelId ? `/channels/${channelId}` : "/channels/new";
    const myChannelOnClick = () => {
      this.props.toggleProfileDropdown();
      this.props.history.push(myChannelLink);
    };

    const profileNameOnClick = () => {
      this.props.toggleProfileDropdown();
      this.props.history.push("/user/edit");
    };
    return (
      <ul tabIndex="0" onBlur={toggleProfileDropdown} ref={wrapperRef} className="profile-dropdown">
        <li onClick={profileNameOnClick} className="profile-name">
          {button}
          <div>
            <span>{username}</span>
            <span>{email}</span>
          </div>
        </li>
        <li onClick={myChannelOnClick.bind(this)}>
          <i className="fas fa-user-circle"></i>
          <span>My Channel</span>
        </li>
        <li onClick={logout}>
          <i className="fas fa-sign-out-alt"></i>
          <span>Sign Out</span>
        </li>
      </ul>
    );
  }
};

export default ProfileDropdown;
