import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Login from '../screens/Login';
import {routPaths} from '../utils/utils';

export const Route = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routPaths.HOME} component={Home} />
      <Stack.Screen name={routPaths.LOGIN} component={Login} />
    </Stack.Navigator>
  );
};
