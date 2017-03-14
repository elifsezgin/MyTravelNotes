import {connect} from 'react-redux';
import LogIn from './login';
import {login} from '../../actions/session_actions';
import {clearErrors} from '../../actions/error_actions';

const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.errors
});
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
