import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Layout from '../../components/moleculs/Layout';
import Header from '../../components/moleculs/Header';
import {PropsNavigation} from '../../types/types';
import {useNews} from '../../hooksRequest/useNews';
import {getNewsOne} from '../../store/news/selectors';
import {colors} from '../../utils/utils';

const CardScreen = ({route}: PropsNavigation) => {
  const {params: id} = route;
  const {fetchDataOneNews} = useNews();
  const oneNews = useSelector(getNewsOne);

  const {title, body, image_url} = oneNews;

  useEffect(() => {
    fetchDataOneNews(id);
  }, []);

  return (
    <>
      <Header />
      <Layout>
        <ScrollView>
          <View style={style.headerContainer}>
            <Image source={{uri: image_url, width: 100, height: 100}} />
            <Text style={style.title}>{title}</Text>
          </View>
          <Text>{body}</Text>
        </ScrollView>
      </Layout>
    </>
  );
};

const style = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    color: colors.black,
    width: 200,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    paddingBottom: 20,
  },
});

export default CardScreen;
