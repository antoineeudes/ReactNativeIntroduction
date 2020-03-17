import { apiUrl } from '../../../constants';
import axios from 'axios';

export function loginCall(email: string, password: string) {
  const requestURL = `${apiUrl}/user/login`;
  return axios({
    method: 'post',
    url: requestURL,
    data: {
      email,
      password
    }
  });
}
