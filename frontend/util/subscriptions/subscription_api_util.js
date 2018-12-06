export const createSubscription = channelId => {
  return $.ajax({
    method: "POST",
    url: `/api/channels/${channelId}/subscriptions`
  });
};

export const fetchSubscribedChannels = () => {
  return $.ajax({
    method: "GET",
    url: `/api/subscriptions`
  });
};

export const deleteSubscription = channelId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/channels/${channelId}/subscriptions`
  });
};