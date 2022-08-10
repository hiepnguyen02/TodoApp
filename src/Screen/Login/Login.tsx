import React from 'react';
import {ReactElement} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
let ScreenHeight = Dimensions.get('window').height;
let ScreenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  image: {
    width: 187,
    height: 180,
  },
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    height: ScreenHeight,
    justifyContent: 'center',
  },
  inputContainer: {
    marginTop: 50,
  },
  input: {
    borderColor: '#E5E5E5',
    borderStyle: 'solid',
    borderWidth: 2,
    borderRadius: 12,
    width: ScreenWidth - 32,
    padding: 8,

    height: 48,
  },
  passwordIcon: {
    height: 24,
    width: 24,
    position: 'absolute',
    right: 8,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  forgorPasswordContainer: {
    marginTop: 16,
    flexDirection: 'row-reverse',
  },
  forgorPasswordText: {
    color: 'grey',
  },
  signInButton: {
    marginTop: 16,
    width: ScreenWidth - 32,
    height: 48,
    padding: 8,
    borderRadius: 12,
    backgroundColor: '#F79E89',
    justifyContent: 'center',
    alignItems: 'center',
  },
  signInText: {
    color: 'white',
  },
  signUpContainer: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  doNotHaveAccountText: {
    color: 'grey',
  },
  signUpText: {
    color: '#F79E89',
  },
});
export function LoginScreen(): ReactElement {
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/logo.png')}
      />
      <View style={styles.inputContainer}>
        <TextInput placeholder={'Email'} style={styles.input} />
        <View style={styles.passwordContainer}>
          <TextInput placeholder={'Email'} style={styles.input} />
          <Image
            style={styles.passwordIcon}
            source={require('../../../assets/pass-word-icon.png')}
          />
        </View>
        <TouchableOpacity style={styles.forgorPasswordContainer}>
          <Text style={styles.forgorPasswordText}>Quên mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <View style={styles.signUpContainer}>
          <Text style={styles.doNotHaveAccountText}>
            Bạn chưa có tài khoản?{' '}
          </Text>
          <TouchableOpacity>
            <Text style={styles.signUpText}>Đăng kí</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
export interface LoginScreenProps extends StackScreenProps<any> {
  //
}

LoginScreen.defaultProps = {
  //
};

export default LoginScreen;
