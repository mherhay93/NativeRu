import {StatusBar, StyleSheet, View} from 'react-native';
import {ReactNode} from 'react';
import Header from './Header';

interface Interface {
  children?: ReactNode | ReactNode[];
  isHeader?: boolean;
  customStyle?: {};
}

const Layout = ({children, isHeader, customStyle}: Interface) => {
  return (
    <View style={[styles.container, customStyle]}>
      {isHeader && <Header />}
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
