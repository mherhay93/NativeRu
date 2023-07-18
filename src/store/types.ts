import {ITypeStateSettings} from './settings/type';
import {ITypeStateUser} from './user/type';

export interface IStore {
  settings: ITypeStateSettings;
  user: ITypeStateUser;
}
