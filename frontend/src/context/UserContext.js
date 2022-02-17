import { createContext } from 'react';

export const INITIAL_STATE = {
  isLoggedIn: false,
  username: null,
};

const UserContext = createContext(INITIAL_STATE);

export default UserContext;