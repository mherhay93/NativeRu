import {Image, StyleSheet, View} from 'react-native';
import {useSelector} from 'react-redux';
import {getUser} from '../../store/user/selectors';

const Avatar = () => {
  const {user} = useSelector(getUser);

  const uri = user.avatar_original_url
    ? user.avatar_original_url
    : 'https://picsum.photos/200';

  return (
    <View style={styles.container}>
      <Image source={{uri, width: 32, height: 32}} style={styles.image} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  image: {
    borderRadius: 50,
  },
});

export default Avatar;
