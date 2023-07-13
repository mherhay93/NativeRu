import {StyleSheet, Text, View} from 'react-native';
import {colors, routPaths} from '../../utils/utils';
import {navigate} from '../../helpers/navigate';
import Touchable from '../../components/atoms/Touchable';
import Layout from '../../components/moleculs/Layout';

const Home = (): JSX.Element => {
  const handleNavigate = () => {
    navigate({name: routPaths.LOGIN});
  };

  return (
    <Layout customStyle={styles.layout}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello!!!!</Text>
        <Touchable
          styleText={styles.textTouchable}
          title={'Get login!!!!'}
          onPress={handleNavigate}
        />
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  layout: {
    backgroundColor: colors.mainBackground,
  },
  container: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.mainBackground,
    gap: 50,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.main,
  },
  textTouchable: {
    color: colors.text,
    fontSize: 16,
  },
});

export default Home;
