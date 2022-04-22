import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './page/homepage/';
import SignUp from './page/sign-up';

import './assets/style/_style.scss';
import Registration from './page/registration';
import Dashboard from 'page/dashboard';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
