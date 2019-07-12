import axios from 'axios';
import qs from 'query-string';

import { BASE_URL } from '../constants/api';

const instance = axios.create({
  baseURL: BASE_URL,
});

interface Params {
  [name: string]: string | number;
}

function get(url: string, params?: Params) {
  const getURL = params ? `${url}?${qs.stringify(params)}` : url;

  return instance.get(getURL);
}

export default {
  get,
};
