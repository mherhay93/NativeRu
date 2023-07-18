import {StatusBar, StyleSheet, View} from 'react-native';
import {ReactNode} from 'react';

interface Interface {
  children?: ReactNode | ReactNode[];
  customStyle?: {};
}

const Layout = ({children, customStyle}: Interface) => {
  return (
    <View style={[styles.container, customStyle]}>
      <StatusBar animated={true} backgroundColor="#bc99d2" />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});

export default Layout;
