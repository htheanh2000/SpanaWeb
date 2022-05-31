import logo from '../../assets/image/spa/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../button';
import Icon from 'components/icon';
function Header({ className }: { className?: string }) {
  const navigate = useNavigate();
  const links = [
    {
      name: 'Trang chủ',
      to: '/home',
    },
    {
      name: 'Giải pháp',
      to: '/solution',
    },
    {
      name: 'Bảng giá',
      to: '/price',
    },
    {
      name: 'Khách hàng',
      to: '/customer',
    },
  ];

  const goHome = () => {
    navigate('/');
  };
  const goSignIn = () => {
    navigate('/sign-in');
  };
  const goSignUp = () => {
    navigate('/sign-up');
  };
  return (
    <div
      className={`header flex justify-between px-5 mt-4 sm:px-0 sm:mt-[48px] ${className}`}
    >
      <div className="flex align-center c-pointer" onClick={goHome}>
        <img src={logo} alt="Spana" className="mr-3 " />
        <h5 className="text-caption font-bold sm:text-h5">Spana</h5>
      </div>
      {/* nav */}
      <div className="sm:flex align-center hidden">
        <div className="nav">
          <ul className="flex ">
            {links.map((link, index) => (
              <Link
                key={index}
                className="mr-6 c-pointer text-body1 font-semibold hover:text-light-primary-color-50"
                to={link.to}
              >
                {link.name}
              </Link>
            ))}
          </ul>
        </div>
        <div className="flex ml-8">
          <Button
            state="ghost"
            size="large"
            className="mr-4"
            onClick={goSignUp}
          >
            Đăng kí
          </Button>
          <Button state="primary" size="large" onClick={goSignIn}>
            Đăng nhập
          </Button>
        </div>
      </div>

      <Icon name="menu4" className="sm:hidden w-6" />
    </div>
  );
}

export default Header;
