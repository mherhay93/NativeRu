import {StyleSheet, Text, View} from 'react-native';
import {colors, routPaths} from '../../utils/utils';
import {navigate} from '../../helpers/navigate';
import Touchable from '../../components/atoms/Touchable';
import Layout from '../../components/moleculs/Layout';
import {useSelector} from 'react-redux';
import {getSettings} from '../../store/settings/selectors';

const Home = (): JSX.Element => {
  const {isAuth} = useSelector(getSettings);

  const handleNavigate = () => {
    navigate({name: isAuth ? routPaths.NEWS : routPaths.LOGIN});
  };

  const title = isAuth ? 'Go to News !!!' : 'Go to login !!!';
  return (
    <Layout customStyle={styles.layout}>
      <View style={styles.container}>
        <Text style={styles.title}>Hello!!!!</Text>
        <Touchable
          styleText={styles.textTouchable}
          title={title}
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
