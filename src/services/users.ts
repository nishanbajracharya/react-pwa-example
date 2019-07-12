import http from '../utils/http';
import { API } from '../constants/api';

interface UserParams {
  [name: string]: string | Number;
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

export default {
  getUsers,
};
