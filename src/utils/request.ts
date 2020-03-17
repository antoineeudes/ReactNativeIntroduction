import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

export function request(
  url: string,
  options: AxiosRequestConfig
): Promise<any> {
  return axios({
    url,
    ...options,
    paramsSerializer: (params: any) =>
      qs.stringify(params, { arrayFormat: 'repeat' })
  });
}
