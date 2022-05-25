import { useAppDispatch, useAppSelector } from 'app/hooks';
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
import './sign-in.scss';

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
    <div className="SignIn flex">
      {loading && <Loading />}
      <div className="SignIn--left">
        <div className="flex jc-center mt-10">
          <img src={imgSignUp} alt="imgSignUp" />
        </div>
      </div>
      <div className="SignIn--right">
        <h4>Đăng nhập vào tài khoản của bạn</h4>
        <p className="mt-8 mb-8">
          Học tập và giao lưu với hàng triệu học viên trên mọi miền đất nước.
        </p>

        <div className="Account flex mb-8">
          <p className="menu1">Bạn chưa có tài khoản?</p>
          <p className="bold" onClick={() => navigate('/sign-up')}>
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
                size="large"
                name="username"
                value={values.username}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="body2">
                {errors.username && touched.username && errors.username}
              </span>
              <Input
                className="mb-2 mt-6"
                label="Nhập mật khẩu"
                placeholder="Nhập mật khẩu của bạn"
                size="large"
                name="password"
                type={'password'}
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="body2">
                {errors.password && touched.password && errors.password}
              </span>

              <div className="Register pb-8 mt-8">
                <Button type="submit" state="primary" className="Button">
                  Đăng nhập
                </Button>

                <div className="Account mt-6 flex">
                  <p className="menu1">Quên mật khẩu?</p>
                  <p className="bold">Gửi mã</p>
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
