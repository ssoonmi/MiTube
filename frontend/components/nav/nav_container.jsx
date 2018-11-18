import Nav from './nav';
import {connect} from 'react-redux';
import {logout} from '../../actions/session/session_actions';
import {showDropdown, hideDropdown} from '../../actions/ui/dropdown_actions';
import {withRouter} from 'react-router-dom';

const msp = (state, ownProps) => {
  let username;
  let email;
  let iconUrl;
  let channelId;
  if (state.session.id) {
    username = state.entities.users[state.session.id].username;
    email = state.entities.users[state.session.id].email;
    iconUrl = state.entities.users[state.session.id].iconUrl;
    channelId = state.entities.users[state.session.id].channelIds[0];
  }
  return {
    loggedIn: Boolean(state.session.id),
    username,
    email,
    iconUrl,
    channelId,
    history: ownProps.history
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  showDropdown: () => dispatch(showDropdown()),
  hideDropdown: () => dispatch(hideDropdown()),
});

export default withRouter(connect(msp, mdp)(Nav));
