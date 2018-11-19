import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root/root';
import * as sessionActions from './actions/session/session_actions';
import * as channelsActions from './actions/channels/channels_actions';
import * as videosActions from './actions/videos/videos_actions';
import * as commentsActions from './actions/comments/comments_actions';

document.addEventListener('DOMContentLoaded', () => {
  let preloadedState={};
  if (window.currentUserInfo) {
    const {users, session} = window.currentUserInfo;
    preloadedState = {
      entities: {
        users
      },
      session
    };
  }
  delete window.currentUserInfo;
  const store = configureStore(preloadedState);
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);

  window.store = store;
  window.sessionActions = sessionActions;
  window.channelsActions = channelsActions;
  window.videosActions = videosActions;
  window.commentsActions = commentsActions;
});

// git push -u origin auth
