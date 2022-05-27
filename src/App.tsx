import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Homepage from './page/homepage/';
import SignUp from './page/sign-up';

import './assets/style/_style.scss';
import Registration from './page/registration';
import Dashboard from 'page/dashboard';
import SignIn from 'page/sign-in';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}

export default App;
