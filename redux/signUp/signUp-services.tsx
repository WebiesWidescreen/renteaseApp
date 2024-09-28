import axios from 'axios';
import { API_URL } from '../const';

export const signUpAPICall = (payloadData: any) => {
  const data = {
    SignUpToken: payloadData,
  };
  console.log('SignUpToken', data);
  const url = `${API_URL}SignUpCheck`;
  return axios.post(url, data, { headers: { 'Content-type': 'application/json' } });
};

export const signUpOTPAPICall = (payloadData: any) => {
  const data = {
    SignUpOTPToken: payloadData,
  };
  console.log('SignUpOTPToken', data);
  const url = `${API_URL}SignUpOTPCheck`;
  return axios.post(url, data, { headers: { 'Content-type': 'application/json' } });
};

export const signUpAVNAPICall = (payloadData: any) => {
  const data = {
    SignUpAVNToken: payloadData,
  };
  console.log('SignUpAVNToken', data);
  const url = `${API_URL}SignUpAVNCheck`;
  return axios.post(url, data, { headers: { 'Content-type': 'application/json' } });
};
