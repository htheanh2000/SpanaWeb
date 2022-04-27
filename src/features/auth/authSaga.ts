import { PayloadAction } from '@reduxjs/toolkit';
import authApi from 'api/authApi';
import { push } from 'connected-react-router';
import { UserSignUp } from 'models';
import { SignUpResponse } from 'models/response';
import { call, delay, fork, put, take, takeLatest } from 'redux-saga/effects';
import { ToastError, ToastSuccess } from 'utils/toastify';
import { authActions, LoginPayload } from './authSlice';

function* handleLogin(payload: LoginPayload) {
  try {
    yield delay(1000); // yield call(api, '')
    localStorage.setItem('access_token', 'fake_token');
    yield put(
      authActions.loginSuccess({
        // Dispatch action
        id: 1,
        name: 'Zendy',
      })
    );

    // Redirect to Admin page
    yield put(push('/admin/dashboard'));
  } catch (error: any) {
    yield put(authActions.loginFailed(error.message)); // Dispatch action
  }
}

function* handleLogout() {
  yield delay(500);
  localStorage.removeItem('access_token');

  // Redirect to Login page
  yield put(push('/login'));
}

function* watchLoginFlow() {
  while (true) {
    const isLoggedIn = Boolean(localStorage.getItem('access_token'));

    if (!isLoggedIn) {
      const action: PayloadAction<LoginPayload> = yield take(
        authActions.login.type
      );
      yield fork(handleLogin, action.payload); // Non-blocking
    }

    yield take(authActions.logout.type);
    yield call(handleLogout); // Blocking - wait for the logout function to finish before continuing to watch watchLoginFlow
  }
}

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

export function* authSaga() {
  yield fork(watchLoginFlow);
  yield takeLatest(authActions.signUp.type, doSignUp);
}
