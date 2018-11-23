import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {fetchVideo, fetchNextVideoSuggestions} from '../../actions/videos/videos_actions';
import {createView} from '../../actions/views/views_actions';
import VideoShow from './video_show';
import {resetSearch} from '../../actions/search/search_actions';

const msp = (state, ownProps) => {
  const videoId = ownProps.match.params.videoId;
  const video = state.entities.videos[videoId];
  let channel;
  let like = 0;
  if (video) {
    channel = state.entities.channels[video.channel_id];
    if (video.userLike) {
      like = video.userLike;
    }
  }
  return {
    video,
    channel,
    videoId,
    dropdownShow: state.ui.dropdown,
    like,
    searchVideoIds: state.search.videoIds,
    videos: state.entities.videos,
    channels: state.entities.channels,
  };
};

const mdp = dispatch => {
  return {
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    createView: (videoId) => dispatch(createView(videoId)),
    resetSearch: () => dispatch(resetSearch()),
    fetchNextVideoSuggestions: (videoId) => dispatch(fetchNextVideoSuggestions(videoId))
  };
};

export default withRouter(connect(msp, mdp)(VideoShow));
