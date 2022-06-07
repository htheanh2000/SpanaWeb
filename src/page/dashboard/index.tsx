import { useAppSelector } from 'app/hooks';
import HeaderDashboard from 'components/header-dashboard';
import { selectCurrentUser } from 'features/auth/authSlice';
import React, { useState } from 'react';
import Analytics from './Analytics';
import Branch from './Branch';
import HeaderDashBoardDesktop from './components/header/HeaderDashboard';
import Menu from './components/menu/Menu';
import SideBar from './components/sidebar/SideBar';
import { iconList } from './constant';
import Customers from './Customer';
import './dashboard.scss';

enum Tabs {
  Menu,
  Analytics,
  Customers,
  Branches,
}

const Dashboard = () => {
  const [activeIcon, setActiveIcon] = useState<number>(iconList[0].id);
  const currentUser = useAppSelector(selectCurrentUser);

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

  const body = () => (
    <div className="sm:flex">
      <SideBar
        activeIcon={activeIcon}
        setActiveIcon={setActiveIcon}
        className="hidden sm:flex"
      />
      {mainBody(activeIcon)}
    </div>
  );

  return (
    <div className="">
      {<HeaderDashBoardDesktop currentUser={currentUser} />}
      <HeaderDashboard className="sm:hidden" />
      {body()}
    </div>
  );
};
export default Dashboard;
