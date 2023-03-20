import * as _ from 'lodash';
import axios from 'axios';
import qs from 'qs';

const X_API_KEY = '84ee2f50';
const DEV_API_HOST = 'https://my.api.mockaroo.com';
const PROD_API_HOST = ''; // TODO

function getRequestURL(path) {
  return `${DEV_API_HOST}/${path}`;
}

function getAuthHeader() {
  return {
    headers: {
      'X-API-Key': X_API_KEY,
    },
  };
}

async function requestApi(path, options) {
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
