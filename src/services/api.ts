import axios, {AxiosInstance} from 'axios';
import {URL_SERVER, REQUEST_TIMEOUT} from '../const';
import {getToken} from './token';

const createApi = (): AxiosInstance => {
  const api = axios.create({
    baseURL: URL_SERVER,
    timeout: REQUEST_TIMEOUT,
  });

  api.interceptors.request.use(
    (config) => {
      const token = getToken();

      if (token && config.headers) {
        config.headers['x-token'] = token;
      }

      return config;
    },
  );
  // api.interceptors.response.use(
  //   (response) => response,
  //   (error) => {
  //     // Обработка ошибок сети (сервер недоступен, таймаут и др.)
  //     if (axios.isAxiosError(error)) {
  //       alert('Network error:', error);
  //       // Добавьте свой код обработки ошибок здесь
  //     }

  //     // Передайте ошибку дальше, чтобы ее обработать в вызывающем коде
  //     return Promise.reject(error);
  //   }
  // );

  return api;
};

export {createApi};
