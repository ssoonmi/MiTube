import {connect} from 'react-redux';
import SessionForm from './session_form';
import {login} from '../../actions/session/session_actions';

const msp = state => ({
  user: {
    username: "",
    password: "",
  },
  formType: "Sign In",
  errors: state.errors.session,
});

const mdp = dispatch =>({
  loginDemo: () => dispatch(login({
    username: "DemoUser",
    password: "password"
  })),
  submitForm: (user) => dispatch(login(user))
});

export default connect(msp, mdp)(SessionForm);
