import {StatusBar, StyleSheet, Text, View} from 'react-native';
import {routPaths} from '../../utils/utils';
import {navigate} from '../../helpers/navigate';
import Touchable from '../../components/atoms/Touchable';

const Home = (): JSX.Element => {
  const handleNavigate = () => {
    navigate({name: routPaths.LOGIN});
  };

  return (
    <View style={styles.container}>
      <StatusBar animated={true} backgroundColor="#bc99d2" />
      <Text style={styles.title}>Hello!!!!</Text>
      <Touchable
        styleText={styles.textTouchable}
        title={'Get login!!!!'}
        onPress={handleNavigate}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#bc99d2',
    gap: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#4c0069',
  },
  textTouchable: {
    color: '#c539e5',
    fontSize: 16,
  },
});

export default Home;
