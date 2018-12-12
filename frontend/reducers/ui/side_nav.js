import { SHOW_SIDE_NAV, HIDE_SIDE_NAV } from '../../actions/ui/side_nav_actions';
const defaultState = false;

const sideNavReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_SIDE_NAV:
      return true;
    case HIDE_SIDE_NAV:
      return defaultState;
    default:
      return state;
  }
};

export default sideNavReducer;