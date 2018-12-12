const defaultState = false;
// import {SHOW_COMMENT_EDIT_MENU, HIDE_COMMENT_EDIT_MENU} from '../../actions/ui/dropdown_actions';

const dropdownReducer = (state=defaultState, action) => {
  switch (action.type) {
    // case SHOW_DROPDOWN:
    //   return true;
    // case HIDE_DROPDOWN:
    //   return defaultState;
    default:
      return state;
  }
};

export default dropdownReducer;
