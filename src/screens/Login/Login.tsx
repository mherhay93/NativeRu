import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import FieldInput from '../../components/atoms/FieldInput';
import Layout from '../../components/moleculs/Layout';
import {valueOnChange} from '../../types/types';
import {colors} from '../../utils/utils';

const Login = (): JSX.Element => {
  const handleValue = (val: valueOnChange) => {
    console.log(5555);
    console.log('val--------->', val);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <Layout>
        <Text style={styles.title}>Login</Text>
        <View style={styles.container}>
          <FieldInput labelText={'Email'} onChange={val => handleValue(val)} />
          <FieldInput
            labelText={'Password'}
            onChange={handleValue}
            secureTextEntry
          />
          <Button
            // onPress={onPressLearnMore}
            title="Login"
            color={colors.main}
          />
        </View>
      </Layout>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  layout: {},
  container: {
    justifyContent: 'center',
    gap: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '600',
    color: colors.main,
    marginTop: 60,
    marginBottom: 40,
  },
  button: {},
});

export default Login;
