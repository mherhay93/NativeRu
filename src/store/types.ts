import {ITypeStateSettings} from './settings/type';
import {ITypeStateUser} from './user/type';
import {ITypeStateNews} from './news/type';

export interface IStore {
  settings: ITypeStateSettings;
  user: ITypeStateUser;
  news: ITypeStateNews;
}

export interface IActionTypes<T, P> {
  readonly type: T;
  readonly payload?: P;
}
