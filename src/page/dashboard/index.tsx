import React from 'react';
import './dashboard.scss';
import { AiOutlineBell, AiOutlineAppstore } from 'react-icons/ai';
import { BsBarChartLine } from 'react-icons/bs';

const Dashboard = () => {
  const header = () => (
    <div className="Header">
      <div className="Header--left">
        <div className="Photo"></div>
        <h5 className="bold">Spana</h5>
      </div>

      <div className="Header--right">
        <AiOutlineBell className="Bell" />
        <div className="Avatar"></div>
        <div className="Info">
          <p className="bold">Minh Quang</p>
          <p className="body2">Thu Ngân</p>
        </div>
      </div>
    </div>
  );

  const sidebar = () => (
    <div className="SideBar">
      <div className="Icons Active">
        <AiOutlineAppstore className="Icon Active" />
      </div>
      <div className="Icons">
        <BsBarChartLine className="Icon " />
      </div>
    </div>
  );
  return (
    <div className="Dashboard">
      {header()}
      {sidebar()}
    </div>
  );
};
export default Dashboard;
