import {createNavigationContainerRef} from '@react-navigation/native';
import {MyProp} from '../types/types';

export const navigationRef = createNavigationContainerRef();

interface IPropsNavigate {
  name?: string;
  params?: MyProp;
  back?: boolean;
}
export async function navigate({name, params, back}: IPropsNavigate) {
  if (back) {
    await navigationRef.goBack();
    return;
  }
  if (navigationRef.isReady()) {
    await navigationRef.navigate(name as never, params as never);
    return;
  }
}
