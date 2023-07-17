import {create} from 'apisauce';
import {baseURL} from '../assets';
import {requestMethods} from '../utils/utils';
import {IApi} from '../types/types';

const api = create({
  baseURL,
  headers: {Accept: 'application/vnd.github.v3+json'},
});

export function request({type, path, data}: IApi): ReturnType<any> {
  try {
    switch (type) {
      case requestMethods.POST: {
        return api.post(`${baseURL}${path}`, data);
      }
      case requestMethods.GET: {
        return api.get(path);
      }
    }
  } catch (e) {
    console.log(e);
  }
}
