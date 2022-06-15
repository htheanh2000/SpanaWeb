import { useAppDispatch, useAppSelector } from 'app/hooks';
import Header from 'components/header';
import Loading from 'components/loading/Preloading';
import {
  authActions,
  LoginPayload,
  selectCurrentUser,
  selectIsLoggedIn,
  selectIsLogging,
} from 'features/auth/authSlice';
import { Formik } from 'formik';
import { UserSignUp } from 'models';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import imgSignUp from '../../assets/image/sign-up.png';
import Button from '../../components/button';
import Input from '../../components/input';

const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const currentUser = useAppSelector(selectCurrentUser);
  const loading = useAppSelector(selectIsLogging);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);

  useEffect(() => {
    if (isLoggedIn) navigate('/dashboard');
  }, [navigate, isLoggedIn]);

  const handleValidate = (values: UserSignUp) => {
    const errors: UserSignUp = {};

    if (!values.password) {
      errors.password = 'Mật khẩu là bắt buộc';
    }

    if (!values.username) {
      errors.username = 'Tên là bắt buộc';
    }

    return errors;
  };

  const handleSubmit = (values: LoginPayload) => {
    dispatch(
      authActions.login({
        password: values.password,
        username: values.username,
      })
    );
  };

  return (
    <div className="px-4 text-center sm:flex sm:text-left">
      <Header className="sm:hidden" />
      {loading && <Loading />}
      <div className="mt-16 sm:w-[40%] sm:mt-4">
        <div className="sm:p-24">
          <p className="uppercase text-[12px] sm:text-headline text-light-text-color-body-1 sm:headline sm:mb-5">
            Spana
          </p>
          <h3 className="text-[24px] sm:text-h3 font-bold">
            Quản lý salon của bạn theo cách đơn giản nhất
          </h3>
        </div>
        <div className="flex jc-center mt-10">
          <img
            src={imgSignUp}
            alt="imgSignUp"
            className="w-[300px] h-[200px]"
          />
        </div>
      </div>
      <div className="mt-20">
        <h4 className="font-bold text-base sm:text-[45px] sm:font-semibold">
          Đăng nhập vào tài khoản của bạn
        </h4>
        <p className="text-[12px] font-bold text-light-text-color-body-1 mt-2 sm:text-[18px] sm:text-black sm:font-normal">
          Học tập và giao lưu với hàng triệu học viên trên mọi miền đất nước.
        </p>

        <div className="flex items-center justify-center gap-2 sm:justify-start text-[12px] sm:text-[18px] my-10">
          <p className="">Bạn chưa có tài khoản?</p>
          <p
            className="font-bold text-light-primary-color-50"
            onClick={() => navigate('/sign-up')}
          >
            Đăng ký
          </p>
        </div>

        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={handleSubmit}
          validate={handleValidate}
        >
          {({
            values,
            errors,
            handleChange,
            handleSubmit,
            handleBlur,
            touched,
          }) => (
            <form action="" onSubmit={handleSubmit}>
              <Input
                className="mb-2"
                label="Nhập tên tài khoản(email)"
                placeholder="Nhập tên tài khoản của bạn"
                size="small"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="text-body2 text-light-error-color">
                {errors.username && touched.username && errors.username}
              </span>
              <Input
                className="mb-2 mt-6"
                label="Nhập mật khẩu"
                placeholder="Nhập mật khẩu của bạn"
                size="small"
                name="password"
                type={'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="text-body2 text-light-error-color">
                {errors.password && touched.password && errors.password}
              </span>

              <div className="Register pb-8 mt-8">
                <button
                  type="submit"
                  className="btn-primary-mobile-medium px-12"
                >
                  Đăng nhập
                </button>

                <div className="my-10 flex text-[12px] items-center justify-center gap-2 sm:justify-start sm:text-[18px]">
                  <p className="">Quên mật khẩu?</p>
                  <p className="font-bold text-light-primary-color-50">
                    Gửi mã
                  </p>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default SignIn;
