import {combineReducers} from 'redux';
import dropdown from './dropdown_reducer';
import commentEditMenu from './comment_edit_menu';
import sideNav from './side_nav';

export default combineReducers({
  dropdown,
  commentEditMenu,
  sideNav,
});
