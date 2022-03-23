import React from 'react';
import './App.css';
import {
  Routes, Route
} from "react-router-dom";

import Homepage from './page/homepage/';
import Header from './components/header'
import './assets/style/_style.scss'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
