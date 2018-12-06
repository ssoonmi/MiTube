import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import { createSubscription, deleteSubscription } from '../../actions/subscriptions/subscriptions_actions';
import ChannelSubscriptionBtn from './channel_subscription_btn';

const msp = (state, ownProps) => {
  const channel = ownProps.channel;
  let currentUserId;
  if (state.session.id) {
    currentUserId = state.session.id;
  }
  return {
    currentUserId,
    channel,
  };
};

const mdp = (dispatch, ownProps) => {
  return {
    history: ownProps.history,
    subscribe: (currentUserId, channelId) => dispatch(createSubscription(currentUserId, channelId)),
    unsubscribe: (currentUserId, channelId) => dispatch(deleteSubscription(currentUserId, channelId)),
  };
};

export default withRouter(connect(msp, mdp)(ChannelSubscriptionBtn));