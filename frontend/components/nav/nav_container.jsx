import Nav from './nav';
import {connect} from 'react-redux';
import {logout} from '../../actions/session/session_actions';

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
    channelId
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Nav);
