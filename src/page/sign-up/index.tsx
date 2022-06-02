import { useAppDispatch } from 'app/hooks';
import Header from 'components/header';
import { authActions, selectSignUpResponse } from 'features/auth/authSlice';
import { Formik } from 'formik';
import { UserSignUp } from 'models';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import imgSignUp from '../../assets/image/sign-up.png';
import Button from '../../components/button';
import Input from '../../components/input';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const response = useSelector(selectSignUpResponse);

  useEffect(() => {
    if (response) {
      navigate('/registration');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [response]);

  const handleValidate = (values: UserSignUp) => {
    const errors: UserSignUp = {};
    if (!values.email) {
      errors.email = 'Email là bắt buộc';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = 'Email không đúng';
    }

    if (!values.password) {
      errors.password = 'Mật khẩu là bắt buộc';
    }

    if (!values.confirmPassword) {
      errors.confirmPassword = 'Nhập lại mật khẩu là bắt buộc';
    }

    if (values.password !== values.confirmPassword) {
      errors.confirmPassword = 'Nhập lại mật khẩu không khớp';
    }

    if (!values.username) {
      errors.username = 'Tên là bắt buộc';
    }

    if (!values.phoneNumber) {
      errors.phoneNumber = 'Số điện thoại là bắt buộc';
    }
    if (!values.term) {
      errors.term = 'Bạn phải đồng ý với điều khoản';
    }

    return errors;
  };

  const handleSubmit = (values: UserSignUp) => {
    dispatch(
      authActions.signUp({
        email: values.email,
        password: values.password,
        username: values.username,
        phoneNumber: values.phoneNumber,
      })
    );
  };

  return (
    <div className="text-center px-2 sm:flex sm:text-left">
      <Header className="sm:hidden" />
      <div className="mt-16 sm:w-[40%] sm:mt-4 sm:bg-light-secondary-system-color">
        <div className="sm:p-24">
          <p className="uppercase text-[12px] sm:text-headline text-light-text-color-body-1 sm:headline sm:mb-5">
            Spana
          </p>
          <h3 className="text-[24px] sm:text-h3 font-bold">
            Quản lý salon của bạn theo cách đơn giản nhất
          </h3>
        </div>
        <div className="flex justify-center mt-10">
          <img
            src={imgSignUp}
            alt="imgSignUp"
            className="w-[300px] h-[200px] sm:w-[537px] sm:h-[369px]"
          />
        </div>
      </div>
      <div className="mt-20 sm:flex-1 sm:p-24">
        <p className="text-[16px] font-bold mb-5 sm:text-h4">
          Đăng kí tài khoản
        </p>
        <div className="sm:flex gap-4">
          <Button size="small" className="w-full mb-4" state="primary">
            Sign up with google
          </Button>
          <Button size="small" className="w-full" state="primary">
            Sign up with facebook
          </Button>
        </div>
        <div className="flex align-center or mt-5">
          <div className="bg-light-secondary-separator-color h-[1px] w-full"></div>
          <span className="text-caption text-light-text-color-body-2 px-4">
            Or
          </span>
          <div className="bg-light-secondary-separator-color h-[1px] w-full"></div>
        </div>

        <Formik
          initialValues={{
            username: '',
            password: '',
            phoneNumber: '',
            email: '',
            confirmPassword: '',
            term: '',
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
            <form action="" className="mt-4" onSubmit={handleSubmit}>
              <Input
                className=""
                label="Họ Tên"
                placeholder="Nhập tên của bạn"
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
                className="mt-6"
                label="Email"
                placeholder="Nhập email của bạn"
                size="small"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="text-body2 text-light-error-color">
                {errors.email && touched.email && errors.email}
              </span>
              <Input
                className="mt-6"
                label="Số điện thoại"
                placeholder="Nhập số điện thoại của bạn"
                size="small"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="text-body2 text-light-error-color">
                {errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber}
              </span>
              <div className="sm:flex gap-6">
                <div className="sm:flex-1">
                  <Input
                    label="Mật khẩu"
                    type="password"
                    className="mt-6"
                    placeholder="Nhập mật khẩu của bạn"
                    size="small"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-body2 text-light-error-color">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>
                <div className="sm:flex-1">
                  <Input
                    label="Xác nhận mật khẩu"
                    className="mt-6"
                    type="password"
                    placeholder="Nhập lại mật khẩu của bạn"
                    size="small"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="text-body2 text-light-error-color">
                    {errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword}
                  </span>
                </div>
              </div>

              <div className="flex items-center sm:justify-start justify-center gap-2 mt-4 sm:mt-6">
                <input
                  type="checkbox"
                  name="term"
                  id="term"
                  onChange={handleChange}
                  className="w-4 h-4 border-light-primary-color-50 border-2"
                />
                <label
                  className="text-caption sm:text-body2 text-light-text-color-body-2"
                  htmlFor="term"
                >
                  Tôi đã đọc và đồng ý với điều khoản sử dụng
                </label>
              </div>
              <span className="text-body2 text-light-error-color ">
                {errors.term && touched.term && errors.term}
              </span>

              <div className="mt-8 sm:flex justify-between">
                <button
                  type="submit"
                  className="btn-primary-mobile w-[150px] h-[35px] mb-6 sm:text-headline"
                >
                  Đăng ký
                </button>

                <div className="flex items-center justify-center gap-2 mb-6 text-caption sm:text-headline">
                  <p className=" text-light-text-color-body-2">
                    Đã có tài khoản ?
                  </p>
                  <p
                    className="bold text-light-text-link-color-purple cursor-pointer"
                    onClick={() => navigate('/sign-in')}
                  >
                    Đăng nhập ngay
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

export default SignUp;
