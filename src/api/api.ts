import {create} from 'apisauce';
import {baseURL} from '../assets';
import {requestMethods} from '../utils/utils';
import {IApi} from '../types/types';
import {getStoreData} from '../store/helpers';

let token = '';
const api = create({
  baseURL,
  headers: {Accept: 'application/vnd.github.v3+json'},
});

export function request({type, path, data, id}: IApi): ReturnType<any> {
  const {settings} = getStoreData();
  token = settings.settings.authorization;
  try {
    switch (type) {
      case requestMethods.POST: {
        return api.post(`${baseURL}${path}`, data);
      }
      case requestMethods.GET: {
        return api.get(!id ? `${baseURL}${path}` : `${baseURL}${path}${id}`);
      }
    }
  } catch (e) {
    console.log(e);
  }
}

api.setHeaders({
  Authorization: token,
});
