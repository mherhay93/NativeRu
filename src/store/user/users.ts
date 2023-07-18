import {ActionsNameUser, IActionUser, ITypeStateUser} from './type';

const initialState: ITypeStateUser = {
  user: {},
};

export function userReducer(
  state = initialState,
  action: IActionUser,
): ITypeStateUser {
  switch (action.type) {
    case ActionsNameUser.USER: {
      const {user} = action.payload;
      return {...state, user};
    }
    default:
      return state;
  }
}
