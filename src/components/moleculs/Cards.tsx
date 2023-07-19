import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {IStateNews} from '../../store/news/type';
import {colors} from '../../utils/utils';

interface ICards {
  item: IStateNews;
  onPress?: () => void;
}
const Cards = ({item, onPress}: ICards) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <Text>{item.short_text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 4,
    margin: 2,
    borderWidth: 1,
    borderLeftColor: colors.main,
    borderRadius: 12,
  },
  title: {
    fontWeight: '500',
    color: colors.black,
  },
});

export default Cards;
