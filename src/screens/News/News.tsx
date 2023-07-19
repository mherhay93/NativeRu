import {ScrollView} from 'react-native';
import {useEffect} from 'react';
import {useSelector} from 'react-redux';
import Layout from '../../components/moleculs/Layout';
import Header from '../../components/moleculs/Header';
import {useNews} from '../../hooksRequest/useNews';
import {getNewsList} from '../../store/news/selectors';
import Cards from '../../components/moleculs/Cards';
import {navigate} from '../../helpers/navigate';
import {routPaths} from '../../utils/utils';

const News = () => {
  const news = useSelector(getNewsList);

  const {fetchData} = useNews();

  useEffect(() => {
    fetchData();
  }, []);

  const handleNavigate = (id?: number) => {
    navigate({name: routPaths.CARD_NEWS, params: id});
  };

  return (
    <>
      <Header />
      <Layout>
        <ScrollView>
          {news.map(item => (
            <Cards
              onPress={() => handleNavigate(item.id)}
              key={item.id}
              item={item}
            />
          ))}
        </ScrollView>
      </Layout>
    </>
  );
};

export default News;
