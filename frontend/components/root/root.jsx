import React from 'react';
import App from './app';
import {HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux';

let dropdownShow = false;

const Root = ({store}) => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App/>
      </HashRouter>
    </Provider>
  );
};

export default Root;
