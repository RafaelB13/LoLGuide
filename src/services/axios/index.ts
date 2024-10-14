import axios, { AxiosInstance } from 'axios';

import { API_BASE_URL, API_VERSION } from '@env';

export const baseURL = `${API_BASE_URL}/${API_VERSION}`;
export const baseURLImage = `${API_BASE_URL}`;

const axiosInstance: AxiosInstance = axios.create({
  baseURL: `${API_BASE_URL}/${API_VERSION}`,
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default axiosInstance;
