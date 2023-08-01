import { LOGIN, LOGOUT, LOGIN_SET_LOADING } from './actionTypes';
import { TDispatch } from '../store';
import { api } from '../../helpers/api';
import { API_ROUTES, API_STATUS_CODES } from '../../constants';

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

  const { email, password } = loginData;

  try {
    const { data, status } = await api.post(
      API_ROUTES.login,
      { email, password }
    );

    console.log('response data ', data);
    console.log('status ', status);


    if (status === API_STATUS_CODES.OK) {
      return dispatch({
        type: LOGIN,
        payload: data,
      })
    }

    // todo handle different statuses

  } catch (err) {
    console.log('error 1 ', err.toString());

    dispatch(setLoginLoading(false));
    // todo handle error with alert
  }
};


export const logout = () => (dispatch: TDispatch) => {

  return ({ type: LOGOUT });
}

