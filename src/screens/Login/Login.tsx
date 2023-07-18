import {useEffect, useState} from 'react';
import {
  Button,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  View,
  Platform,
} from 'react-native';
import {useSelector} from 'react-redux';
import FieldInput from '../../components/atoms/FieldInput';
import Layout from '../../components/moleculs/Layout';
import {valueOnChange} from '../../types/types';
import {useAuth} from '../../hooksRequest/useAuth';
import {navigate} from '../../helpers/navigate';
import {getSettings} from '../../store/settings/selectors';
import {colors, routPaths} from '../../utils/utils';

const Login = (): JSX.Element => {
  const [data, setData] = useState({});
  const {isAuth} = useSelector(getSettings);
  const {fetchData} = useAuth();
  const handleValue = (val: valueOnChange, nameField: string) => {
    setData(prev => ({
      ...prev,
      [nameField]: val,
    }));
  };
  const handleLogin = () => {
    fetchData({data});
  };

  useEffect(() => {
    if (isAuth) {
      navigate({name: routPaths.NEWS});
    }
  }, [isAuth]);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'position'}>
      <Layout>
        <Text style={styles.title}>Login</Text>
        <View style={styles.container}>
          <FieldInput
            labelText={'Email'}
            onChange={val => handleValue(val, 'email')}
          />
          <FieldInput
            labelText={'Password'}
            onChange={val => handleValue(val, 'password')}
            secureTextEntry
          />
          <Button onPress={handleLogin} title="Login" color={colors.main} />
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
