import React from 'react';
import {connect} from 'react-redux';

import ChannelShowHome from './channel_show_home';

const msp = (state, ownProps) => {
  return {
    videos: state.entities.videos,
    channel: ownProps.channel,
    videoIds: state.search.mostPopularVideoIds,
  };
};

const mdp = (dispatch) => {
  return {

  };
}

export default connect(msp, mdp)(ChannelShowHome);
