import {useDispatch} from 'react-redux';
import {request} from '../api/api';
import {requestMethods} from '../utils/utils';
import {ActionsName, IRes} from '../store/settings/type';
import {ActionsNameUser} from '../store/user/type';

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
          dispatch({
            type: ActionsNameUser.USER,
            payload: res.data,
          });
          dispatch({
            type: ActionsName.SETTINGS,
            payload: {
              'access-token': res.headers['access-token'],
              authorization: res.headers.authorization,
              client: res.headers.client,
            },
          });
        }
      })
      .catch((err: string) => console.log(err));
  };
  return {fetchData};
};
