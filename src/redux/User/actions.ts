import { LOGIN, LOGOUT } from './actionTypes';

export const loginAction = async (loginData) => {


  console.log('loginAction ', loginData);

  const userData = {};

  return {
    type: LOGIN,
    payload: userData,
  };
};


export const logoutData = () => ({ type: LOGOUT });

