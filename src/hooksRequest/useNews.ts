import {useDispatch} from 'react-redux';
import {request} from '../api/api';
import {requestMethods} from '../utils/utils';
import {IRes} from '../store/settings/type';

interface INews {
  data: any;
}

export const useNews = () => {
  const dispatch = useDispatch();
  const fetchData = () => {
    return request({
      path: 'news',
      type: requestMethods.GET,
    })
      .then((response: IRes) => response)
      .then((res: IRes) => {
        console.log(res, 'reqqq');
        if (res.status === 200) {
        }
      })
      .catch((err: string) => console.log(err));
  };
  return {fetchData};
};
