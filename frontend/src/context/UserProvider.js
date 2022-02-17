import React, { useState, useEffect } from 'react';

import UserContext from './UserContext';

import { userLogout, login , createUser } from '../helpers/userApiHelpers';

const UserProvider = ({ children }) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isFetching, setIsFetching] = useState(false);
  const [userName, setUserName] = useState(null);

  useEffect(() => {
    if (sessionStorage.email) {
      setUserName(sessionStorage.email);
      setIsLoggedIn(true);
    }
  }, []);

  const logIn = async (userCredentials) => {
    setIsFetching(true);
    const { status, message } = await login(userCredentials);
    setIsFetching(false);

    if (status === 200) {
      setUserName(userCredentials.email);
      setIsLoggedIn(true);

      return '';
    }

    return message;
  };

  const logOut = () => {
    userLogout();
    setUserName(null);
    setIsLoggedIn(false);
  };

  const register = async (userData) => {
    setIsFetching(true);
    const { status, message } = await createUser(userData);
    setIsFetching(false);
    if (status === 201) {
      setUserName(userData.email);
      setIsLoggedIn(true);

      return '';
    }

    return message;
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, isFetching, logIn, logOut, register, userName }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;