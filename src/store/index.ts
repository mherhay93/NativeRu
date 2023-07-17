import {combineReducers} from 'redux';
import {settingsReducer} from './settings/settings';

export const rootReducer = combineReducers({
  settings: settingsReducer,
});
