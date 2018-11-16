import React from 'react';

const ProfileDropdown = ({wrapperRef, username, email, button, logout}) => {
  return (
    <ul ref={wrapperRef} className="profile-dropdown">
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
};

export default ProfileDropdown;
