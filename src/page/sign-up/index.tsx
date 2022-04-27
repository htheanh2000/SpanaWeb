import { useAppDispatch } from 'app/hooks';
import { authActions, selectSignUpResponse } from 'features/auth/authSlice';
import { Formik } from 'formik';
import { UserSignUp } from 'models';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import imgSignUp from '../../assets/image/sign-up.png';
import Button from '../../components/button';
import Input from '../../components/input';
import './sign-up.scss';

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
    <div className="sign-up flex">
      <div className="sign-up--left">
        <div className="sign-up--title">
          <p className="headline mb-5">Spana</p>
          <h3 className="max-w-400">
            Quản lý salon của bạn theo cách đơn giản nhất
          </h3>
        </div>
        <div className="flex jc-center mt-10">
          <img src={imgSignUp} alt="imgSignUp" />
        </div>
      </div>
      <div className="sign-up--right">
        <h4>Đăng kí tài khoản</h4>
        <div className="flex mt-8 social-sign-up">
          <Button size="large" className="mr-8" state="primary">
            Sign up with google
          </Button>
          <Button size="large" state="primary">
            Sign up with facebook
          </Button>
        </div>
        <div className="flex align-center or mt-5">
          <div className="divider"></div>
          <span className="mr-3 ml-3 body2">Or</span>
          <div className="divider"></div>
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
            <form action="" onSubmit={handleSubmit}>
              <Input
                className="mb-2"
                label="Họ Tên"
                placeholder="Nhập tên của bạn"
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
                label="Email"
                placeholder="Nhập email của bạn"
                size="large"
                name="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="body2">
                {errors.email && touched.email && errors.email}
              </span>
              <Input
                className="mb-2 mt-6"
                label="Số điện thoại"
                placeholder="Nhập số điện thoại của bạn"
                size="large"
                name="phoneNumber"
                value={values.phoneNumber}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <span className="body2">
                {errors.phoneNumber &&
                  touched.phoneNumber &&
                  errors.phoneNumber}
              </span>
              <div className="flex password mb-8 mt-6">
                <div>
                  <Input
                    label="Mật khẩu"
                    type="password"
                    className="mr-6 mb-2"
                    placeholder="Nhập mật khẩu của bạn"
                    size="large"
                    name="password"
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="body2">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>
                <div>
                  <Input
                    label="Xác nhận mật khẩu"
                    className="mb-2"
                    type="password"
                    placeholder="Nhập lại mật khẩu của bạn"
                    size="large"
                    name="confirmPassword"
                    value={values.confirmPassword}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <span className="body2">
                    {errors.confirmPassword &&
                      touched.confirmPassword &&
                      errors.confirmPassword}
                  </span>
                </div>
              </div>

              <div className="Term flex">
                <input
                  type="checkbox"
                  name="term"
                  id="term"
                  onChange={handleChange}
                />
                <label className="body2 c-pointer" htmlFor="term">
                  Tôi đã đọc và đồng ý với điều khoản sử dụng
                </label>
              </div>
              <span className="body2 ">
                {errors.term && touched.term && errors.term}
              </span>

              <div className="Register pb-8 mt-8 flex">
                <Button type="submit" state="primary" className="Button">
                  Đăng ký
                </Button>

                <div className="Account flex">
                  <p className="menu1">Đã có tài khoản ?</p>
                  <p className="bold">Đăng nhập ngay</p>
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
