import React from 'react';

class VideoComponent extends React.Component {
  componentDidUpdate(oldProps) {
    if (oldProps.file != this.props.file) {
      window.location.reload();
    }
  }

  render() {
    const {file, thumbnail, dropdownShow} = this.props;
    return (
      <video
        style={{pointerEvents: dropdownShow ? "none" : "auto"}}
        poster={thumbnail}
        controls >
        <source src={file} type="video/mp4" />
      </video>
    );
  }
}

export default VideoComponent;
