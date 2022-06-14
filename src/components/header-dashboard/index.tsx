import { Popover } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import ava from '../../assets/image/spa/1.jpg';
import logo from '../../assets/image/spa/logo.png';
function HeaderDashboardMobile({
  className,
  activeIcon,
  setActiveIcon,
}: {
  className?: string;
  activeIcon: number;
  setActiveIcon: (index: number) => void;
}) {
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

      <Popover className="relative">
        <Popover.Button>
          <img src={ava} alt="ava" className="w-[30px] h-[30px] rounded-full" />
        </Popover.Button>

        <Popover.Panel className="absolute z-10 right-0 border-[1px] p-3 px-5 bg-slate-100 rounded-md">
          <div className="flex flex-col gap-4 whitespace-nowrap">
            <p onClick={() => setActiveIcon(0)}>Menu</p>
            <p onClick={() => setActiveIcon(1)}>Khách hàng</p>
            <p onClick={() => setActiveIcon(2)}>Chi Nhánh</p>
            <p onClick={() => setActiveIcon(3)}>Mã Giảm giá</p>
            <p onClick={() => setActiveIcon(4)}>Tài khoản</p>
            <p onClick={() => setActiveIcon(5)}>Cài đặt</p>
          </div>
        </Popover.Panel>
      </Popover>
    </div>
  );
}

export default HeaderDashboardMobile;
