import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors} from '../../utils/utils';
import {navigate} from '../../helpers/navigate';

const BackButton = () => {
  const handleBack = () => {
    navigate({back: true});
  };

  return <TouchableOpacity onPress={handleBack} style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 4,
    borderLeftWidth: 4,
    borderBottomColor: colors.white,
    borderLeftColor: colors.white,
    transform: [{rotate: '45deg'}],
    padding: 6,
  },
});
export default BackButton;
