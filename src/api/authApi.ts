import { UserSignUp } from 'models';
import { SignUpResponse } from 'models/response';
import axiosClient from './axiosClient';

const authApi = {
  signUp(data: UserSignUp): Promise<SignUpResponse> {
    const url = '/auth/sign-up';
    return axiosClient.post(url, data);
  },
};

export default authApi;
