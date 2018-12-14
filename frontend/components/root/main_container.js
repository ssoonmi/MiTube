import Main from './main';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
  return {
    modal: state.ui.modal,
    sideNav: state.ui.sideNav,
    path: ownProps.location.pathname,
  };
};

export default withRouter(connect(msp, null)(Main));