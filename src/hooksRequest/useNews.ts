import {useDispatch} from 'react-redux';
import {request} from '../api/api';
import {requestMethods} from '../utils/utils';
import {IRes} from '../store/settings/type';
import {ActionsName} from '../store/news/type';

export const useNews = () => {
  const dispatch = useDispatch();
  const fetchData = () => {
    return request({
      path: 'news',
      type: requestMethods.GET,
    })
      .then((response: IRes) => response)
      .then((res: IRes) => {
        if (res.status === 200) {
          dispatch({
            type: ActionsName.NEWS_LIST,
            payload: res.data,
          });
        }
      })
      .catch((err: string) => console.log(err));
  };

  const fetchDataOneNews = (id?: Readonly<any>) => {
    return request({
      path: 'news/',
      type: requestMethods.GET,
      id,
    })
      .then((response: IRes) => response)
      .then((res: IRes) => {
        if (res.status === 200) {
          dispatch({
            type: ActionsName.NEWS,
            payload: res.data,
          });
        }
      })
      .catch((err: string) => console.log(err));
  };
  return {fetchData, fetchDataOneNews};
};
