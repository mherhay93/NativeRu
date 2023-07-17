import {ActionsName, IActionIsHome, ITypeStateSettings} from './type';

const initialState: ITypeStateSettings = {
  isAuth: false,
};

export function settingsReducer(
  state = initialState,
  action: IActionIsHome,
): ITypeStateSettings {
  switch (action.type) {
    case ActionsName.AUTH: {
      return {...state, isAuth: action.payload};
    }
    default:
      return state;
  }
}
