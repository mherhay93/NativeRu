import {Text, TouchableOpacity} from 'react-native';

interface IPropsTouchable {
  title: string;
  styleOpacity?: {};
  styleText?: {};
  onPress?: () => void;
}
const Touchable = ({
  onPress,
  title,
  styleOpacity,
  styleText,
}: IPropsTouchable) => {
  return (
    <TouchableOpacity style={styleOpacity} onPress={onPress}>
      <Text style={styleText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Touchable;
