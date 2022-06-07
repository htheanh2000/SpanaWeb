import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import classNames from 'classnames';

const SideBar = ({
  className,
  activeIcon,
  setActiveIcon,
}: {
  className?: string;
  activeIcon: number;
  setActiveIcon: (index: number) => void;
}) => {
  return (
    <div
      className={`${className} flex-col justify-between h-[100vh] w-[112px] items-center border-r-[1px] border-l-light-primary-separator-color`}
    >
      <div className="flex flex-col gap-10 mt-10">
        <div
          className={classNames('text-light-text-color-body-2')}
          onClick={() => setActiveIcon(0)}
        >
          <WidgetsOutlinedIcon
            fontSize="large"
            className={classNames('cursor-pointer', {
              'text-light-primary-color-50': activeIcon === 0,
            })}
          />
        </div>

        <div
          className={classNames('text-light-text-color-body-2')}
          onClick={() => setActiveIcon(1)}
        >
          <BarChartOutlinedIcon
            fontSize="large"
            className={classNames('cursor-pointer', {
              'text-light-primary-color-50': activeIcon === 1,
            })}
          />
        </div>

        <div
          className={classNames('text-light-text-color-body-2')}
          onClick={() => setActiveIcon(2)}
        >
          <SupervisedUserCircleOutlinedIcon
            fontSize="large"
            className={classNames('cursor-pointer', {
              'text-light-primary-color-50': activeIcon === 2,
            })}
          />
        </div>

        <div
          className={classNames('text-light-text-color-body-2')}
          onClick={() => setActiveIcon(3)}
        >
          <Inventory2OutlinedIcon
            fontSize="large"
            className={classNames('cursor-pointer', {
              'text-light-primary-color-50': activeIcon === 3,
            })}
          />
        </div>

        <div
          className={classNames('text-light-text-color-body-2')}
          onClick={() => setActiveIcon(4)}
        >
          <DiscountOutlinedIcon
            fontSize="large"
            className={classNames('cursor-pointer', {
              'text-light-primary-color-50': activeIcon === 4,
            })}
          />
        </div>

        <div
          className={classNames('text-light-text-color-body-2')}
          onClick={() => setActiveIcon(5)}
        >
          <AccountCircleOutlinedIcon
            fontSize="large"
            className={classNames('cursor-pointer', {
              'text-light-primary-color-50': activeIcon === 5,
            })}
          />
        </div>
      </div>
      <div className="pb-8">
        <div
          className={classNames('text-light-text-color-body-2')}
          onClick={() => setActiveIcon(6)}
        >
          <SettingsOutlinedIcon
            fontSize="large"
            className={classNames('cursor-pointer', {
              'text-light-primary-color-50': activeIcon === 6,
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
