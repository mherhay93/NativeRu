export interface ITypeStateSettings {
  isAuth: boolean;
}

export interface IActionIsHome {
  type: string;
  payload: boolean;
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
}
