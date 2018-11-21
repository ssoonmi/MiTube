import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ChannelEditForm from './channel_edit_form';
import {updateChannel} from '../../actions/channels/channels_actions';

const msp = (state, ownProps) => {
  const channelId = ownProps.match.params.channelId;
  const channel = state.entities.channels[channelId]
  return {
    channel,
    channelId,
  };
};

const mdp = (dispatch, ownProps) => {
  const channelId = ownProps.match.params.channelId;
  const history = ownProps.history;
  return {
    submitForm: (channel) => dispatch(updateChannel(channel, channelId, history))
  };
};

export default withRouter(connect(msp, mdp)(ChannelEditForm));
