import { LOGIN, LOGOUT, LOGIN_SET_LOADING } from './actionTypes';
import { TDispatch } from '../store';

type TLoginData = {
  email: string,
  password: string,
}

export const setLoginLoading = (loadingFlag: boolean) => ({
  type: LOGIN_SET_LOADING,
  payload: loadingFlag,
});

export const loginAction = (loginData: TLoginData) => async (dispatch: TDispatch) => {
  dispatch(setLoginLoading(true));


  console.log('!!!!loginAction ', loginData);

  const userData = {};

  // set loading false
  dispatch({
    type: LOGIN,
    payload: userData,
  });
};


export const logoutData = () => ({ type: LOGOUT });

