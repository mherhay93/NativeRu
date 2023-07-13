import {
  KeyboardTypeOptions,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {useState} from 'react';
import {textContentTypes, valueOnChange} from '../../types/types';
import {colors} from '../../utils/utils';

interface IPropsFieldInput {
  onChange: (a: valueOnChange) => void;
  labelText?: string;
  customStyleText?: {};
  customStyleInput?: {};
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions | undefined;
  textContentType?: textContentTypes;
  secureTextEntry?: boolean;
}
const FieldInput = ({
  labelText,
  customStyleText,
  customStyleInput,
  keyboardType,
  placeholder,
  onChange,
  textContentType,
  secureTextEntry,
}: IPropsFieldInput) => {
  const [value, setValue] = useState('');

  const handleValue = (val: string) => {
    onChange(val);
    setValue(val);
  };

  return (
    <View style={styles.container}>
      <Text style={[customStyleText, styles.text]}>{labelText}</Text>
      <TextInput
        textContentType={textContentType}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        style={[customStyleInput, styles.input]}
        placeholder={placeholder}
        value={value}
        onChangeText={text => handleValue(text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  text: {
    color: colors.main,
  },
  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.main,
  },
});

export default FieldInput;
