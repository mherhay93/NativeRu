import {ActionsName, IActionTypes, ITypeStateSettings} from './type';

const initialState: ITypeStateSettings = {
  isAuth: false,
  settings: {
    'access-token': '',
    authorization: '',
    client: '',
  },
};

export function settingsReducer(
  state = initialState,
  action: IActionTypes<string, any>,
): ITypeStateSettings {
  switch (action.type) {
    case ActionsName.AUTH: {
      return {...state, isAuth: action.payload};
    }
    case ActionsName.SETTINGS: {
      return {...state, settings: action.payload};
    }
    default:
      return state;
  }
}
