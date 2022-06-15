import { LoginPayload } from 'features/auth/authSlice';
import { UserSignUp } from 'models';
import { SignInResponse, SignUpResponse } from 'models/response';
import axiosClient from './axiosClient';

const authApi = {
  signUp(data: UserSignUp): Promise<SignUpResponse> {
    const url = '/auth/sign-up';
    return axiosClient.post(url, data);
  },
  signIn(data: LoginPayload): Promise<SignInResponse> {
    const url = '/auth/sign-in';
    return axiosClient.post(url, data);
  },
};

export default authApi;
