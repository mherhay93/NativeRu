export interface ITypeStateNews {
  news: IStateNews[];
  oneNews: IStateNews;
}

export interface IStateNews {
  body?: string;
  category?: string;
  created_at?: string;
  icon?: null | string;
  id?: number;
  image_additional_url?: string;
  image_url?: string;
  model_name?: string;
  short_text?: string;
  table_name?: string;
  title?: string;
}

export enum ActionsName {
  NEWS_LIST = 'NEWS_LIST',
  NEWS = 'NEWS',
}
