import * as _ from 'lodash';
import axios from 'axios';
import qs from 'qs';

const DEV_API_HOST = "http://24.199.92.187:5076";
const PROD_API_HOST = ''; // TODO

function getRequestURL(path) {
  return `${DEV_API_HOST}/${path}`;
}

function getAuthHeader() {
  return {
    headers: {
      // TODO: Backend Auth
    },
  };
}

export async function requestApi(path, options) {
  return axios({
    url: getRequestURL(path),
    withCredentials: false,
    validateStatus: status => status >= 200 && status < 300, // default
    ...options,
    params: options?.params,
    data: options?.data,
    maxContentLength: 2000000,
    paramsSerializer: {
      encode: params => qs.stringify(params, { arrayFormat: 'repeat' }),
    },
  })
    .then(result => result)
    .catch(error => {
      if (error.response.data) {
        throw new Error(JSON.stringify(error.response.data));
      } else {
        throw new Error(JSON.stringify(error));
      }
    });
}

export async function requestApiWithAuth(path, options) {
  const authHeader = getAuthHeader();

  return requestApi(path, _.merge(options, authHeader));
}
