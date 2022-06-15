import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserSignUp } from 'models';
import { SignInResponse, SignUpResponse } from 'models/response';
import { RootState } from './../../app/store';

export interface LoginPayload {
  username: string;
  password: string;
}

export interface AuthState {
  isLoggedIn: boolean;
  logging?: boolean;
  currentUser?: SignInResponse;
  signUpping?: boolean;
  isSignUpSuccess?: boolean;
}

const initialState: AuthState = {
  isLoggedIn: false,
  logging: false,
  currentUser: undefined,
  signUpping: false,
  isSignUpSuccess: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action: PayloadAction<LoginPayload>) {
      state.logging = true;
    },
    loginSuccess(state, action: PayloadAction<SignInResponse>) {
      state.isLoggedIn = true;
      state.logging = false;
      state.currentUser = action.payload;
    },
    loginFailed(state, action: PayloadAction<string>) {
      state.logging = false;
      console.log(action.payload);
    },

    logout(state) {
      state.isLoggedIn = false;
      state.currentUser = undefined;
    },
    signUp(state, action: PayloadAction<UserSignUp>) {
      state.signUpping = true;
    },
    signUpSuccess(state, action: PayloadAction<SignUpResponse>) {
      state.signUpping = false;
      state.isSignUpSuccess = true;
    },
    signUpFailed(state, action: PayloadAction<SignUpResponse>) {
      state.signUpping = false;
      console.log(action.payload);
    },
  },
});

// Actions
export const authActions = authSlice.actions;

// Selectors
export const selectIsLoggedIn = (state: RootState) => state.auth.isLoggedIn;
export const selectCurrentUser = (state: RootState) => state.auth.currentUser;
export const selectIsLogging = (state: RootState) => state.auth.logging;
export const selectSignUpResponse = (state: RootState) =>
  state.auth.isSignUpSuccess;

// Reducer
const authReducer = authSlice.reducer;
export default authReducer;
