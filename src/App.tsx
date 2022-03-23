import React from 'react';
import './App.css';
import {
  Routes, Route
} from "react-router-dom";

import Homepage from './page/homepage/';
import SignUp from './page/sign-up';

import './assets/style/_style.scss'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
