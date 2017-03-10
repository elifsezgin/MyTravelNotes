import * as SessionAPIUtil from "../util/session_api_util";
import {receiveErrors} from "./error_actions";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user).then(data => dispatch(receiveCurrentUser(data)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout().then(data => dispatch(receiveCurrentUser(null)),
  err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user).then(data => dispatch(receiveCurrentUser(data)),
  err => dispatch(receiveErrors(err.responseJSON)))
);