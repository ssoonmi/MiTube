import React from 'react';

const ProfileButton = ({user, size}) => {
  if (user) {
    const {username, iconUrl, channelIds} = user;
    const content = iconUrl ? undefined : username[0].toUpperCase();
    const style = {
      backgroundImage: content ? "" : `url(${iconUrl})`,
      width: size,
      height: size,
    }
    return (
      <button
      style={style}
      className="profile-btn">
      {content}
      </button>
    )
  } else {
    const style = {
      backgroundColor: "gray",
      width: size,
      height: size,
    }
    return (
      <button
      style={style}
      className="profile-btn">
      </button>
    );
  }
};

export default ProfileButton;
