import {combineReducers} from 'redux';
import entities from './entities/entities_reducer';
import session from './session/session_reducer';
import search from './search/search_reducer';
import errors from './errors/errors_reducer';
import ui from './ui/ui_reducer';

export default combineReducers({
  entities,
  session,
  search,
  errors,
  ui
});
