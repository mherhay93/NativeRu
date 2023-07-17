import {useDispatch} from 'react-redux';
import {request} from '../api/api';
import {requestMethods} from '../utils/utils';
import {ActionsName, IRes} from '../store/settings/type';

interface IAuth {
  data: any;
}

export const useAuth = () => {
  const dispatch = useDispatch();
  const fetchData = ({data}: IAuth) => {
    return request({
      data: data,
      path: 'auth/sign_in',
      type: requestMethods.POST,
    })
      .then((response: IRes) => response)
      .then((res: IRes) => {
        console.log(res, 'reqqq');
        if (res.status === 200) {
          dispatch({
            type: ActionsName.AUTH,
            payload: true,
          });
        }
      })
      .catch((err: string) => console.log(err));
  };
  return {fetchData};
};
