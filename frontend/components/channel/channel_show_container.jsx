import React from 'react';
import {connect} from 'react-redux';
import ChannelShow from './channel_show';
import {fetchChannel} from '../../actions/channels/channels_actions';

const msp = (state, ownProps) => {
  // const username = ownProps.match.params.username;
  const channelId = ownProps.match.params.channelId;
  const channel = state.entities.channels[channelId];
  let owner;
  let user;
  if (channel) {
    user = state.entities.users[channel.user_id];
    owner = state.session.id == channel.user_id;
  }
  return {
    channelId,
    channel: state.entities.channels[channelId],
    user,
    owner,
  };
};

const mdp = dispatch => {
  return {
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId))
  };
};

export default connect(msp, mdp)(ChannelShow);
