import './sign-up.scss';
import imgSignUp from '../../assets/image/sign-up.png';
import Button from '../../components/button';
import Input from '../../components/input';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const navigate = useNavigate();
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

        <Input
          className="mb-6"
          label="Họ Tên"
          placeholder="Nhập tên của bạn"
          size="large"
        />
        <Input
          className="mb-6"
          label="Email"
          placeholder="Nhập email của bạn"
          size="large"
        />
        <Input
          className="mb-6"
          label="Số điện thoại"
          placeholder="Nhập số điện thoại của bạn"
          size="large"
        />
        <div className="flex password mb-8">
          <Input
            label="Mật khẩu"
            type="password"
            className="mr-6"
            placeholder="Nhập mật khẩu của bạn"
            size="large"
          />
          <Input
            label="Xác nhận mật khẩu"
            type="password"
            placeholder="Nhập lại mật khẩu của bạn"
            size="large"
          />
        </div>

        <div className="Term flex mb-8">
          <input type="checkbox" name="term" id="term" />
          <label className="body2 c-pointer" htmlFor="term">
            Tôi đã đọc và đồng ý với điều khoản sử dụng
          </label>
        </div>

        <div className="Register pb-8 flex">
          <Button
            state="primary"
            className="Button"
            onClick={() => navigate('/registration')}
          >
            Đăng ký
          </Button>

          <div className="Account flex">
            <p className="menu1">Đã có tài khoản ?</p>
            <p className="bold">Đăng nhập ngay</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
