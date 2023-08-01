import {API_ROUTES} from "../constants/apiRoutes";

const axios = require('axios').default;

// todo move to env variables
const BASE_URL = ' http://192.168.0.107:4000';

export const api = axios.create({
  baseURL: BASE_URL,
});
