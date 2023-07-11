import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {
    Colors,
} from 'react-native/Libraries/NewAppScreen';
import {Route} from "./src/routing/Routing";
import Home from "./src/screens/Home";

function App(): JSX.Element {
    const isDarkMode = useColorScheme() === 'dark';
    
    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };
    
    return (
        <NavigationContainer>
            <SafeAreaView style={backgroundStyle}>
                <StatusBar
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                    backgroundColor={backgroundStyle.backgroundColor}
                />
                <Home/>
                <Route/>
            </SafeAreaView>
        </NavigationContainer>
    
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default App;
