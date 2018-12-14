import SideNav from './side_nav';
import {connect} from 'react-redux';
import {hideSideNav, showSideNav} from '../../actions/ui/side_nav_actions';
import { openModal, closeModal } from '../../actions/ui/modal_actions';

const msp = (state, ownProps) => {
  return {
    showModal: state.ui.sideNavModal,
    sideNav: state.ui.sideNav,
    modal: state.ui.modal,
  };
};

const mdp = (dispatch) => {
  return {
    showSideNav: () => dispatch(showSideNav()),
    hideSideNav: () => dispatch(hideSideNav()),
    openModal: () => dispatch(openModal()),
    closeModal: () => dispatch(closeModal()),
  };
};

export default connect(msp, mdp)(SideNav);