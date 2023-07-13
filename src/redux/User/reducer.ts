import { LOGIN, LOGOUT } from './actionTypes';

export const USER_INITIAL_STATE = {
  loggedIn: false,
  user: null,
};

export const userReducer = (state = USER_INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN: {





      break;
    }
    case LOGOUT: return { ...USER_INITIAL_STATE };
    default: return { ...state };
  }
};
