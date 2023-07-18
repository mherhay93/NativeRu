import {ScrollView, StyleSheet, Text} from 'react-native';
import Layout from '../../components/moleculs/Layout';
import Header from '../../components/moleculs/Header';
import {useNews} from '../../hooksRequest/useNews';
import {useEffect} from 'react';

const News = () => {
  const {fetchData} = useNews();

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header />
      <Layout>
        <ScrollView>
          <Text>Newsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>Newsbbbbbbbbbbbbbbbbbbbbbbbbbbb</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>Newsffffffffffffffffffffffffff</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>Newstttttttttttttttttttttttttttttttttt</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
          <Text>News</Text>
        </ScrollView>
      </Layout>
    </>
  );
};

const styles = StyleSheet.create({
  layout: {},
});

export default News;
