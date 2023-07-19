import {store} from './store';

export const getStoreData = () => {
  const {settings, user} = store.getState();
  return {
    settings,
    user,
  };
};
