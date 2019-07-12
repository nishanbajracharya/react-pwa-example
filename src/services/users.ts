import http from '../utils/http';
import { API } from '../constants/api';

interface UserParams {
  [name: string]: string | number;
}

async function getUsers(params?: UserParams) {
  try {
    const response = await http.get(API.USERS, params);
    return response.data;
  }
  catch (err) {
    return err;
  }
}

async function getUserDetail(id: string | number) {
  try {
    const response = await http.get(API.USERS + '/' + id);
    return response.data;
  }
  catch (err) {
    return err;
  }
}

export default {
  getUsers,
  getUserDetail,
};
