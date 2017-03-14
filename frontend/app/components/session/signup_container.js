import {connect} from 'react-redux';
import SignUp from './signup';
import {signup, login} from '../../actions/session_actions';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});
const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user)),
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
