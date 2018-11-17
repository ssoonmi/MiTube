import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import ChannelForm from './channel_form';
import {createChannel} from '../../actions/channels/channels_actions';

const msp = (state, ownProps) => {
  return {
    channel: {
      name: "",
      description: "",
      splash: null,
      icon: null,
    },
  };
};

const mdp = (dispatch, ownProps) => {
  const history = ownProps.history;
  return {
    submitForm: (channel) => dispatch(createChannel(channel, history))
  };
};

export default withRouter(connect(msp, mdp)(ChannelForm));
