import classNames from 'classnames';
import Icon from 'components/icon';
import React from 'react';
import Analytics from './Analytics';
import Branch from './Branch';
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
    <div className="Header">
      <div className="Header--left">
        <div className="Photo"></div>
        <h5 className="bold">Spana</h5>
      </div>

      <div className="Header--right">
        <Icon name="bell" size="medium" className="Bell" />
        <div className="Avatar"></div>
        <div className="Info">
          <p className="bold">Minh Quang</p>
          <p className="body2">Thu Ngân</p>
        </div>
      </div>
    </div>
  );

  const body = () => (
    <div className="flex">
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
    <div className="Dashboard">
      {header()}
      {body()}
    </div>
  );
};
export default Dashboard;
