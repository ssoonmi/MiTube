const defaultState = false;
import {SHOW_DROPDOWN, HIDE_DROPDOWN} from '../../actions/ui/dropdown_actions';

const dropdownReducer = (state=defaultState, action) => {
  switch (action.type) {
    case SHOW_DROPDOWN:
      return true;
    case HIDE_DROPDOWN:
      return defaultState;
    default:
      return state;
  }
};

export default dropdownReducer;
