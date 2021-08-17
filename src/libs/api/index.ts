import axios from 'axios';
import { token } from '../key';

type Methods = 'put' | 'send' | 'get' | 'post' | 'delete';

export const URL_API = 'https://api.thedogapi.com/v1';
export const URL_MEDIA = 'https://cdn2.thedogapi.com/images/';

axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.get['Content-Type'] = 'application/json';
axios.defaults.timeout = 120000;
axios.defaults.baseURL = URL_API;

const pubFetch = axios.create();
const privFetch = axios.create();

export const tokenToHeaders = () => {
  privFetch.defaults.headers.get.Authorization = `Token ${token}`;
  privFetch.defaults.headers.post.Authorization = `Token ${token}`;
  privFetch.defaults.headers.put.Authorization = `Token ${token}`;
  privFetch.defaults.headers.delete.Authorization = `Token ${token}`;
};

const request =
  (method: Methods, _endpoint: string | Function, entity: any) =>
  async (data: null | any = {}, params: any = null) => {
    const endpoint =
      typeof _endpoint === 'function' ? _endpoint(params) : _endpoint;
    try {
      const res = await entity[method](endpoint, data);
      if (res.data && res.data.data) {
        return { ...res.data.data, ...res.data.meta };
      }
      return res.data || res;
    } catch (error) {
      throw error.response || error;
    }
  };

export const methods = {
  fetchBreeds: request('get', '/breeds/', privFetch),
  randomImage: request(
    'get',
    (id: string) => `/images/search?breed_id=${id}`,
    privFetch,
  ),
};
