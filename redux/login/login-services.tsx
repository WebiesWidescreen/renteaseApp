import axios from 'axios';
import { API_URL } from '../const';

export const loginAPICall = (loginData: any) => {
  const data = {
    LoginToken: loginData,
  };
  console.log('LoginToken', data);
  const url = `${API_URL}LoginCheck`;
  return axios.post(url, data, { headers: { 'Content-type': 'application/json' } });
};
