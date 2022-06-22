import { useAppSelector } from 'app/hooks';
import HeaderDashboard from 'components/header-dashboard';
import { selectCurrentUser } from 'features/auth/authSlice';
import React, { useEffect, useState } from 'react';
import supabase, { getProduct } from 'supebase';
import Analytics from './Analytics';
import Branch from './Branch';
import Control from './components/control/Control';
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
  Control,
}

const Dashboard = () => {
  const [activeIcon, setActiveIcon] = useState<number>(iconList[0].id);
  const currentUser = useAppSelector(selectCurrentUser);
  const [user, setUser] = useState<any>()
  const [product, setProduct] = useState<any>() 

  useEffect(() => {
    getUser()
    getProd()
  }, [])

  const getUser = async () => {
    const { user, error } = await supabase.auth.api.getUser(
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNjU1OTA3Nzk3LCJzdWIiOiI1MTZjNGNjNC1iYmQyLTQyOWItOGVhYi0wNjRhMWZkNWZiMGUiLCJlbWFpbCI6Imh0aGVhbmgyMDAwQGdtYWlsLmNvbSIsInBob25lIjoiIiwiYXBwX21ldGFkYXRhIjp7InByb3ZpZGVyIjoiZW1haWwiLCJwcm92aWRlcnMiOlsiZW1haWwiXX0sInVzZXJfbWV0YWRhdGEiOnt9LCJyb2xlIjoiYXV0aGVudGljYXRlZCJ9.qneJ9Sh5lVtqoJu-1ONJt5e117aWzHw4vEy4SVEPR10",
    )
    console.log(user, error);
    const userInfo = await supabase.from('user').select(`
      *,
      salon (
        *
      )
  
    `).eq('email', user?.email)
    setUser(userInfo.body && userInfo.body[0])
    
  }

  const getProd = async () => {
    // const {data, error} = await getProduct('1')
    // console.log('PRODUCT');
    // console.log(data, error);
    
  }

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
      case Tabs.Control:
        return <Control />;

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
      {<HeaderDashBoardDesktop currentUser={user} />}
      <HeaderDashboard
        className="sm:hidden"
        activeIcon={activeIcon}
        setActiveIcon={setActiveIcon}
      />
      {body()}
    </div>
  );
};
export default Dashboard;
