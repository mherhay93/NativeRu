import {combineReducers} from 'redux';
import {settingsReducer} from './settings/settings';
import {userReducer} from './user/users';
import {newsReducer} from './news/news';

export const rootReducer = combineReducers({
  settings: settingsReducer,
  user: userReducer,
  news: newsReducer,
});
