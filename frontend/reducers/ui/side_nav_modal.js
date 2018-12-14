import { SHOW_SIDE_NAV_MODAL, HIDE_SIDE_NAV_MODAL } from '../../actions/ui/side_nav_actions';
const defaultState = false;

const sideNavModalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_SIDE_NAV_MODAL:
      return true;
    case HIDE_SIDE_NAV_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default sideNavModalReducer;