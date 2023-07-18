import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {routPaths} from '../utils/utils';
import Home from '../screens/Home';
import News from '../screens/News';
import React from 'react';
const AppStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name={routPaths.NEWS} component={News} />
      <Stack.Screen name={routPaths.HOME} component={Home} />
    </Stack.Navigator>
  );
};

export default AppStack;
