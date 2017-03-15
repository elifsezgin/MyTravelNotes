import * as SessionAPIUtil from "../util/session_api_util";

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
});

export const receiveCurrentUser = (currentUser) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const login = user => dispatch => (
  SessionAPIUtil.login(user)
    .then(response => response.json())
    .then(responseData => {
      if (responseData.errors) {
        dispatch(receiveErrors(responseData.errors));
        let error = new Error(responseData.errors);
        error.response = responseData;
        throw error;
      } else {
        (dispatch(receiveCurrentUser(responseData)));
      }
    })
);

export const logout = () => dispatch => (
  SessionAPIUtil.logout()
    .then(SessionAPIUtil.checkStatus)
    .then((response) => response.json())
    .then(responseData => dispatch(receiveCurrentUser(responseData)))
    .catch(err => dispatch(receiveErrors(err.responseJSON)))
);

export const signup = user => dispatch => (
  SessionAPIUtil.signup(user)
  .then(response => response.json())
  .then(responseData => {
    if (responseData.errors) {
      dispatch(receiveErrors(responseData.errors));
    } else {
      (dispatch(receiveCurrentUser(responseData)));
    }
  })
);
