import { useNavigate } from 'react-router-dom';
import logo from '../../assets/image/spa/logo.png';
import ava from '../../assets/image/spa/1.jpg';
function HeaderDashboardMobile({ className }: { className?: string }) {
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <div
      className={`header flex justify-between items-center px-5 mt-4 sm:px-0 sm:mt-[48px] ${className}`}
    >
      <div className="flex align-center c-pointer" onClick={goHome}>
        <img src={logo} alt="Spana" className="mr-3 " />
        <h5 className="text-caption font-bold sm:text-h5">Spana</h5>
      </div>
      {/* nav */}

      <img src={ava} alt="ava" className="w-[30px] h-[30px] rounded-full" />
    </div>
  );
}

export default HeaderDashboardMobile;
