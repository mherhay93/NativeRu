import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import BackButton from '../atoms/BackButton';
import Avatar from '../atoms/Avatar';
import {getUser} from '../../store/user/selectors';
import {colors} from '../../utils/utils';

interface IPropsHeader {}

const Header = ({}: IPropsHeader) => {
  const {user} = useSelector(getUser);

  const text = user.username ? user.username : 'User';

  return (
    <View style={style.container}>
      <BackButton />
      <Text style={style.text}>{text}</Text>
      <Avatar />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.mainBackground,
    height: 40,
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 20,
    color: colors.white,
  },
});

export default Header;
