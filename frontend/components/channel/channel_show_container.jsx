import React from 'react';
import {connect} from 'react-redux';
import ChannelShow from './channel_show';
import {fetchChannel} from '../../actions/channels/channels_actions';
import {resetSearch} from '../../actions/search/search_actions';
import {showSideNav, hideSideNav, hideSideNavModal} from '../../actions/ui/side_nav_actions';
import {closeModal} from '../../actions/ui/modal_actions';

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
    fetchChannel: (channelId) => dispatch(fetchChannel(channelId)),
    resetSearch: () => dispatch(resetSearch()),
    closeModal: () => dispatch(closeModal()),
    showSideNav: () => dispatch(showSideNav()),
    hideSideNav: () => dispatch(hideSideNav()),
    hideSideNavModal: () => dispatch(hideSideNavModal()),
  };
};

export default connect(msp, mdp)(ChannelShow);
