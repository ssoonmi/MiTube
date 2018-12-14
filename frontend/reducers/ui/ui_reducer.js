import {combineReducers} from 'redux';
import dropdown from './dropdown_reducer';
import commentEditMenu from './comment_edit_menu';
import sideNav from './side_nav';
import sideNavModal from './side_nav_modal';
import modal from './modal';

export default combineReducers({
  dropdown,
  commentEditMenu,
  sideNav,
  sideNavModal,
  modal
});
