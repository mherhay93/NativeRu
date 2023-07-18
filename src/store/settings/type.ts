export interface ITypeStateSettings {
  isAuth: boolean;
  settings: ISettings;
}

export interface ISettings {
  'access-token': string;
  authorization: string;
  client: string;
}

export interface IActionTypes<T, P> {
  readonly type: T;
  readonly payload?: P;
}

export interface IRes {
  config: object;
  data: object;
  duration: number;
  headers: any;
  ok: boolean;
  originalError: null | object;
  problem: null | object;
  status: number;
}

export enum ActionsName {
  AUTH = 'AUTH',
  SETTINGS = 'SETTINGS',
}
