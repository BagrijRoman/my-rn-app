import {
  LOGIN,
  LOGOUT,
  LOGIN_SET_LOADING,
} from './actionTypes';

export const USER_INITIAL_STATE = {
  user: null,
  loading: false,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;

  // console.log('userReducer ' );
  // console.log('state ', state);
  // console.log('action ', action);


  switch (type) {
    case LOGIN: {
      const { user, accessToken, refreshToken } = payload;

      // Todo discuss better place to store tokens on mobile platforms

      return {
        ...state,
        loading: false,
        accessToken,
        refreshToken,
        user,
      };
    }
    case LOGIN_SET_LOADING: {
      return {
        ...state,
        loading: payload,
      };
    }
    case LOGOUT: return { ...USER_INITIAL_STATE };
    default: return { ...state };
  }
};
