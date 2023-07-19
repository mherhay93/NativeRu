import {ActionsName, ITypeStateNews} from './type';
import {IActionTypes} from '../types';

const initialState: ITypeStateNews = {
  news: [],
  oneNews: {},
};

export function newsReducer(
  state = initialState,
  action: IActionTypes<string, any>,
) {
  switch (action.type) {
    case ActionsName.NEWS_LIST: {
      const {news} = action.payload;
      return {...state, news};
    }
    case ActionsName.NEWS: {
      const {news} = action.payload;
      return {...state, oneNews: news};
    }
    default:
      return state;
  }
}
