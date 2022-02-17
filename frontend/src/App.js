import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Sign from './pages/Sign';
import Task from './pages/Task';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="sign" element={<Sign />} />
      <Route path="task" element={<Task />} />
    </Routes>
  );
}

export default App;
