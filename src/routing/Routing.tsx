import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "../screens/Home";
import {routPaths} from "../utils/utils";

export const Route = () => {
    const Stack = createNativeStackNavigator();
    
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: true,
            }}>
            <Stack.Screen name={routPaths.HOME} component={Home}/>
        </Stack.Navigator>
    );
};
