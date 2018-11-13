import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup} from '../../actions/session/session_actions';

const msp = state => ({
  user: {
    username: "",
    password: "",
    email: ""
  },
  formType: "Sign Up"
});

const mdp = dispatch =>({
  submitForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);
