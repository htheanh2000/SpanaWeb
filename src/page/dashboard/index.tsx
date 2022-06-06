import { useAppSelector } from 'app/hooks';
import classNames from 'classnames';
import HeaderDashboard from 'components/header-dashboard';
import Icon from 'components/icon';
import { selectCurrentUser } from 'features/auth/authSlice';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Analytics from './Analytics';
import Branch from './Branch';
import HomePage from './components/Home';
import { iconList } from './constant';
import Customers from './Customer';
import './dashboard.scss';
import Menu from './Menu';

// type HTMLElementEvent<T extends HTMLElement> = Event &
//   HTMLInputElement & {
//     target: T;
//     // probably you might want to add the currentTarget as well
//     // currentTarget: T;
//   };

enum Tabs {
  Menu,
  Analytics,
  Customers,
  Branches,
}

const Dashboard = () => {
  const [activeIcon, setActiveIcon] = React.useState<number>(iconList[0].id);
  const currentUser = useAppSelector(selectCurrentUser);
  const navigate = useNavigate();

  const mainBody = (activeTabs: Tabs) => {
    switch (activeTabs) {
      case Tabs.Menu:
        return <Menu />;
      case Tabs.Analytics:
        return <Analytics />;
      case Tabs.Customers:
        return <Customers />;
      case Tabs.Branches:
        return <Branch />;

      default:
        break;
    }
  };

  const header = () => (
    <div className="hidden sm:flex justify-between items-center ">
      <div className="Header--left">
        <div className="Photo"></div>
        <h5 className="bold c-pointer" onClick={() => navigate('/')}>
          Spana
        </h5>
      </div>

      <div className="Header--right">
        <Icon name="bell" size="medium" className="Bell" />
        <div className="Avatar"></div>
        <div className="Info">
          <p className="bold">{currentUser?.email}</p>
          <p className="body2">{currentUser?.roles}</p>
        </div>
      </div>
    </div>
  );

  const body = () => (
    <div className="MainBody hidden sm:flex">
      <div className="SideBar">
        <div className="Top">
          {iconList.map((icon, index) => (
            <div
              key={index}
              className={classNames('Icons', { Active: activeIcon === index })}
              onClick={() => setActiveIcon(index)}
            >
              <Icon name={icon.name} className="Icon" size="medium" />
            </div>
          ))}
        </div>
        <div className="Bot">
          <div className="Icons c-pointer">
            <Icon name="setting" className="Icon" size="medium" />
          </div>
        </div>
      </div>
      {mainBody(activeIcon)}
    </div>
  );

  return (
    <div className="">
      {header()}
      <HeaderDashboard className="sm:hidden" />
      {<HomePage className={'sm:hidden'} />}
      {body()}
    </div>
  );
};
export default Dashboard;
