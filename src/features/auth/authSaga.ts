import { PayloadAction } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import { UserSignUp } from 'models';
import { SignInResponse, SignUpResponse } from 'models/response';
import { call, put, takeLatest } from 'redux-saga/effects';
import { ToastError, ToastSuccess } from 'utils/toastify';
import { authActions, LoginPayload } from './authSlice';

function doLogin(params: LoginPayload) {
  return authApi.signIn(params);
}

function* handleLogin(action: PayloadAction<LoginPayload>) {
  try {
    const response: SignInResponse = yield call(doLogin, action.payload);

    const accessToken = response.accessToken;
    localStorage.setItem('access_token', accessToken);
    yield put(authActions.loginSuccess(response));

    // Redirect to Admin page
    // if (accessToken) {
    //   yield put(push('/dashboard1'));
    // }
  } catch (error: any) {
    console.log(`Failed to login`, error);
    if (error.response) {
      ToastError(error.response.data.message);
    } else {
      ToastError(error.message);
    }
    yield put(authActions.loginFailed(error.message));
  }
}

// function* handleLogout() {
//   yield delay(500);
//   localStorage.removeItem('access_token');

//   // Redirect to Login page
//   yield put(push('/login'));
// }

// function* watchLoginFlow() {
//   while (true) {
//     const isLoggedIn = Boolean(localStorage.getItem('access_token'));

//     if (!isLoggedIn) {
//       const action: PayloadAction<LoginPayload> = yield take(
//         authActions.login.type
//       );
//       yield fork(handleLogin, action.payload); // Non-blocking
//     }

//     yield take(authActions.logout.type);
//     yield call(handleLogout); // Blocking - wait for the logout function to finish before continuing to watch watchLoginFlow
//   }
// }

function* doSignUp(action: PayloadAction<UserSignUp>) {
  try {
    const response: SignUpResponse = yield call(authApi.signUp, action.payload);
    yield put(authActions.signUpSuccess(response));

    ToastSuccess(response.message);
  } catch (error: any) {
    if (error.response) {
      ToastError(error.response.data.message);
    } else {
      ToastError(error.message);
    }
    yield put(authActions.signUpFailed(error.message));
  }
}

export default function* authSaga() {
  // yield fork(watchLoginFlow);
  yield takeLatest(authActions.signUp.type, doSignUp);
  yield takeLatest(authActions.login.type, handleLogin);
}
