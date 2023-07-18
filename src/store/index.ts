import {combineReducers} from 'redux';
import {settingsReducer} from './settings/settings';
import {userReducer} from './user/users';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  user: userReducer,
});
