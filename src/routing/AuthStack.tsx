import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routPaths} from '../utils/utils';
import Home from '../screens/Home';
import React from 'react';
import Login from '../screens/Login/Login';
const AppStack = () => {
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

export default AppStack;
