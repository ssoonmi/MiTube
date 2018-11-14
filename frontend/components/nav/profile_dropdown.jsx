import React from 'react';

const ProfileDropdown = ({wrapperRef, username, email, logout}) => {
  return (
    <ul ref={wrapperRef} className="profile-dropdown">
      <li className="profile-name">
        <button className="profile-btn">S</button>
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
