import Nav from './nav';
import {connect} from 'react-redux';
import {logout} from '../../actions/session/session_actions';

const msp = (state, ownProps) => ({
  loggedIn: Boolean(state.session.id)
});

const mdp = dispatch => ({
  logout: () => dispatch(logout())
});

export default connect(msp, mdp)(Nav);
