import {useSelector} from 'react-redux';
import AppStack from './AppStack';
import AuthStack from './AuthStack';
import {IStore} from '../store/types';

const Route = () => {
  const {isAuth} = useSelector((state: IStore) => state.settings);

  return isAuth ? <AppStack /> : <AuthStack />;
};

export default Route;
