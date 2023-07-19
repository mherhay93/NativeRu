import {IStore} from '../types';

export const getNewsList = (state: IStore) => state.news.news;
export const getNewsOne = (state: IStore) => state.news.oneNews;
