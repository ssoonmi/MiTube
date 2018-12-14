import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/ui/modal_actions';
const defaultState = false;

const modalReducer = (state = defaultState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return true;
    case CLOSE_MODAL:
      return defaultState;
    default:
      return state;
  }
};

export default modalReducer;