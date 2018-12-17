import SideNav from './side_nav';
import {connect} from 'react-redux';
import {hideSideNav, showSideNav} from '../../actions/ui/side_nav_actions';
import { openModal, closeModal } from '../../actions/ui/modal_actions';
import {withRouter} from 'react-router-dom';
import {fetchSubscriptions} from '../../actions/subscriptions/subscriptions_actions';

const msp = (state, ownProps) => {
  let subscribedChannelIds;
  const currentUserId = state.session.id;
  if (currentUserId) {
    subscribedChannelIds = state.entities.users[currentUserId].subscribedChannelIds;
  }
  return {
    showModal: state.ui.sideNavModal,
    sideNav: state.ui.sideNav,
    modal: state.ui.modal,
    currentUserId,
    channels: state.entities.channels,
    subscribedChannelIds,
  };
};

const mdp = (dispatch) => {
  return {
    showSideNav: () => dispatch(showSideNav()),
    hideSideNav: () => dispatch(hideSideNav()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
    fetchSubscriptions: (userId) => dispatch(fetchSubscriptions(userId)),
  };
};

export default withRouter(connect(msp, mdp)(SideNav));