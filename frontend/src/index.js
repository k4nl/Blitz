import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import UserProvider from './context/UserProvider';
import TaskProvider from './context/TaskProvider';
import App from './App';

ReactDOM.render(
  <UserProvider>
    <TaskProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </TaskProvider>
  </UserProvider>,
  document.getElementById('root')
);
