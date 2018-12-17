import * as SubscriptionAPIUtil from '../../util/subscriptions/subscription_api_util';

export const RECEIVE_SUBSCRIPTION = "RECEIVE_SUBSCRIPTION";
export const REMOVE_SUBSCRIPTION = "REMOVE_SUBSCRIPTION";
export const RECEIVE_SUBSCRIBED_CHANNELS = "RECEIVE_SUBSCRIBED_CHANNELS";

export const createSubscription = (userId, channelId) => dispatch => {
  return SubscriptionAPIUtil.createSubscription(channelId).then((payload) => {
    dispatch({
      type: RECEIVE_SUBSCRIPTION,
      channelId,
      userId
    });
  }, (response) => console.log(response.responseJSON));
};

export const fetchSubscriptions = (userId) => dispatch => {
  return SubscriptionAPIUtil.fetchSubscribedChannels().then((payload) => {
    dispatch({
      type: RECEIVE_SUBSCRIBED_CHANNELS,
      userId,
      payload
    });
  }, (response) => console.log(response.responseJSON));
};

export const deleteSubscription = (userId, channelId) => dispatch => {
  return SubscriptionAPIUtil.deleteSubscription(channelId).then((payload) => {
    dispatch({
      type: REMOVE_SUBSCRIPTION,
      channelId,
      userId
    });
  }, (response) => console.log(response.responseJSON));
};