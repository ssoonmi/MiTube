import {combineReducers} from 'redux';
import dropdown from './dropdown_reducer';
import commentEditMenu from './comment-edit-menu';

export default combineReducers({
  dropdown,
  commentEditMenu
});
