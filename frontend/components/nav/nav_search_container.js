import React from 'react';
import {connect} from 'react-redux';
import NavSearch from './nav_search';
import {withRouter} from 'react-router-dom';

const msp = (state) => {
  return {

  };
};

const mdp = (dispatch, ownProps) => {
  const history = ownProps.history;
  return {
    submitSearch: (searchTerms) => history.push(`/search/${searchTerms}`)
  };
};

export default withRouter(connect(msp, mdp)(NavSearch));
