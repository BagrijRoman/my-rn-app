import { LOGIN, LOGOUT } from './actionTypes';

export const loginAction = async (loginData) => {

  const userData = {};

  return {
    type: LOGIN,
    payload: userData,
  };
};


export const logoutData = () => ({ type: LOGOUT });

