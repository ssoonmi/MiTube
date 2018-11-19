import {RECEIVE_COMMENTS, RECEIVE_COMMENT, REMOVE_COMMENT} from '../../actions/comments/comments_actions';
import {merge} from 'lodash';

const commentsReducer = (state={}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_COMMENTS:
    case RECEIVE_COMMENT:
      newState = merge({}, state, action.payload.comments);
      return newState;
    case REMOVE_COMMENT:
      newState = merge({}, state);
      delete newState[action.payload.id]
      return newState;
    default:
      return state;
  }
};

export default commentsReducer;
