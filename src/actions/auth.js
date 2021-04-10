import { APIUrls } from '../helpers/urls';
import { AUTHENTICATE_USER, LOGIN_FAILED, LOGIN_START, LOGIN_SUCCESS, LOG_OUT, SIGNUP_FAILED, SIGNUP_SUCCESS,  SIGNUP_START } from './actionTypes';
import { getFormBody } from '../helpers/utils';

export function startLogin() {
  return {
    type: LOGIN_START,
  };
}

export function loginFailed(errorMessage) {
  return {
    type: LOGIN_FAILED,
    error: errorMessage,
  };
}
export function loginSuccess(user) {
  return {
    type: LOGIN_SUCCESS,
    user,
  };
}

export function login(email, password) {
  return (dispatch) => {
    dispatch(startLogin());
    const url = APIUrls.login();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: getFormBody({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('data', data);
        if (data.success) {
          // dispatch action to save user
           dispatch(loginSuccess(data.data.user));
          return;
        }
        dispatch(loginFailed(data.message));
      });
  };
}

export function signup(email,password,confirmPassword,name){
  return (dispatch) => {
     const url = APIUrls.signup();
     fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: ({
          email,
          password,
          confirm_password: confirmPassword,
          name
        }),
     })
     .then((response) => response.json())
     .then((data) => {
        if(data.success){
          localStorage.setItem('token',data.data.token);
          dispatch(signupSuccessful(data.data.user));
          return;
        }
        dispatch(signupFailed(data.message));
     })
  }
}

export function authenticateUser(user){
  return {
    type: AUTHENTICATE_USER,
    user,
  }
}

export function logoutUser() {
  return {
    type: LOG_OUT
  }
}

export function startSignup() {
  return {
    type: SIGNUP_START
  }
}

export function signupFailed(error) {
  return {
    type: SIGNUP_FAILED,
    error
  }
}

export function signupSuccessful(user) {
  return {
    type: SIGNUP_SUCCESS,
    user,
  }
}