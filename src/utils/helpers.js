import jwt from 'jsonwebtoken';

import config from '../config';

export const decodeToken = () => jwt.decode(getToken());

export const setToken = token => {
  localStorage.setItem('token', token);
  return getToken();
};

export const getToken = () => localStorage.getItem('user_token');

export const destroyToken = () => {
  localStorage.removeItem('token');
  return null;
};

export const encodeUserObject = (user, expiresIn = '30days') => {
  const encodedUser = jwt.sign(user, config.SECRET_KEY, { expiresIn });
  return localStorage.setItem('encodedUser', encodedUser);
};

export const getEncodedUser = () => {
  const encodedUser = localStorage.getItem('encodedUser');
  return decodeToken(encodedUser);
};

export const destroyEncodedUser = () => {
  localStorage.removeItem('encodedUser');
  return null;
};

export const setRedirectUrl = url => localStorage.setItem('redirectUrl', url);
export const removeRedirectUrl = () => localStorage.removeItem('redirectUrl');

export const logout = () => {
  destroyToken();
  destroyEncodedUser();
  removeRedirectUrl();
  window.location.assign('/login');
}; 
