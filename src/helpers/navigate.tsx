import {createNavigationContainerRef} from '@react-navigation/native';
import {MyProp} from '../types/types';

export const navigationRef = createNavigationContainerRef();

interface IPropsNavigate {
  name: string;
  params?: MyProp;
}
export function navigate({name, params}: IPropsNavigate) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never, params as never);
  }
}
