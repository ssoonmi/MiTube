import React from 'react';

const ChannelButton = ({channel, size, classNames}) => {
  if (channel) {
    const {name, iconUrl} = channel;
    const content = iconUrl ? undefined : name[0].toUpperCase();
    const style = {
      backgroundImage: content ? "" : `url(${iconUrl})`,
      width: size,
      height: size,
    }
    return (
      <div
      style={style}
      className={classNames}>
      {content}
      </div>
    )
  } else {
    const style = {
      backgroundColor: "gray",
      width: size,
      height: size,
    }
    return (
      <div
      style={style}>
      </div>
    );
  }
};

export default ChannelButton;
