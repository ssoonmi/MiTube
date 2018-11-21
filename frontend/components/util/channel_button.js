import React from 'react';

const ChannelButton = ({channel, size, classNames}) => {
  if (channel) {
    const {name, iconUrl} = channel;
    const content = iconUrl ? undefined : name[0].toUpperCase();
    if (!classNames) {
      classNames = "";
    }
    const style = {
      backgroundImage: content ? "" : `url(${iconUrl})`,
      width: size,
      height: size,
    }
    return (
      <div
      style={style}
      className={classNames + " channel-button"}>
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
