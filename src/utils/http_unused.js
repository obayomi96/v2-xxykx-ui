import axios from 'axios';

import { getToken } from './helpers';
import config from '../config';

let http;

(async () => {
  let Authorization;

  if (getToken()) {
    Authorization = { Authorization: `Bearer ${getToken()}` };
  }

  http = axios.create({
    baseURL: config.API_URL,
    headers: { ...Authorization },
  });
})();

export { http };
