import {connect} from 'react-redux';
import LogIn from './login';
import {login, receiveErrors} from '../../actions/session_actions';


const mapStateToProps = state => ({
  currentUser: state.session.currentUser,
  errors: state.session.errors
});
const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  clearErrors: () => dispatch(receiveErrors([]))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
