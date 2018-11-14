import {connect} from 'react-redux';
import SessionForm from './session_form';
import {signup, login} from '../../actions/session/session_actions';

const msp = state => ({
  user: {
    username: "",
    password: "",
    email: ""
  },
  formType: "Sign Up",
  errors: state.errors.session,
});

const mdp = dispatch =>({
  loginDemo: () => dispatch(login({
    username: "DemoUser",
    password: "password"
  })),
  submitForm: (user) => dispatch(signup(user))
});

export default connect(msp, mdp)(SessionForm);
