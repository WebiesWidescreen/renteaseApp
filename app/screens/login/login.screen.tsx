import { useLayoutEffect, useState, useEffect, useRef } from "react";
import { Text, View, Image, useColorScheme, TouchableOpacity, ToastAndroid, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, StackActions } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import commonthemeStyle from '../common/common.styles';
import themeStyle from './login.styles';
import { loginStart, loginReset } from '@/redux/login/login-actions';
import { getLoginStatus } from '@/redux/login/login-selectors';

const LoginScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const theme = useColorScheme() ?? 'light';
  const mainStyles = commonthemeStyle(theme);
  const loginStatus = useSelector(getLoginStatus);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setLocalState((ls) => ({ ...ls, keyboardVisible: true }));
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setLocalState((ls) => ({ ...ls, keyboardVisible: false }));
    });
    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  // useLayoutEffect(() => {
  //     if (loginStatus) {
  //         navigation.dispatch(StackActions.replace('LOGININITIAL'));
  //     }
  // }, [loginStatus]);

  const [localState, setLocalState] = useState({
    userPhone: '',
    userAVN: '',
    keyboardVisible: false,
  });
  const subStyles = themeStyle(theme, localState.keyboardVisible);
  const inputUserAVN: any = useRef(null);
  const inputUserPhone: any = useRef(null);

  const handleSubmit = () => {
    if (localState.userPhone.length < 10) {
      ToastAndroid.show('Enter Your Phone Number', ToastAndroid.LONG);
      inputUserPhone.current.focus();
    } else if (localState.userAVN === '') {
      ToastAndroid.show('Enter Your AVN', ToastAndroid.LONG);
      inputUserAVN.current.focus();
    } else {
      // dispatch(loginStart(localState));
      navigation.dispatch(StackActions.replace('HOMEINITIAL'));

    }
  }

  return (
    <View style={mainStyles.mainContainer}>
      <View style={subStyles.subContainerCenter}>
        <Image style={subStyles.topImage} source={require('@/assets/images/intial/login.png')} />
        <Text style={mainStyles.subTitle}>Welcome to Back </Text>
      </View>
      <View style={subStyles.subContainerCenter2}>
        <Text style={mainStyles.titleLeft}>Login </Text>
        <Text style={mainStyles.subTitleLeft}>Phone Number </Text>
        <TextInput
          ref={inputUserPhone}
          label="Enter Your Phone Number"
          placeholder="+91"
          mode="outlined"
          keyboardType="numeric"
          maxLength={10}
          value={localState.userPhone}
          style={mainStyles.input}
          outlineStyle={mainStyles.radius10}
          onChangeText={(userPhone: string) => setLocalState({ ...localState, userPhone })}
          onSubmitEditing={() => inputUserAVN.current.focus()}
        />
        <Text style={mainStyles.subTitleLeft}>Account Verification Number (AVN) </Text>
        <TextInput
          ref={inputUserAVN}
          label="Enter Your AVN"
          mode="outlined"
          value={localState.userAVN}
          style={mainStyles.input}
          outlineStyle={mainStyles.radius10}
          onChangeText={(userAVN: string) => setLocalState({ ...localState, userAVN })}
        />
        <Text style={mainStyles.linkTextRight} onPress={() => navigation.navigate('OTP')}>Forgot AVN? </Text>
      </View>
      <View style={subStyles.subContainerCenter2} />
      <View style={subStyles.subContainerCenter2} />
      {!localState.keyboardVisible && (
        <View style={subStyles.subContainerCenter3}>
          <Text style={mainStyles.text}>By signing up, you’re agree to our{' '}
            <Text style={mainStyles.linkText}>
              Terms & Conditions
            </Text>
            {' '}
            and
            {' '}
            <Text style={mainStyles.linkText}>
              Privacy Policy  {' '}
            </Text>
          </Text>
          <TouchableOpacity style={mainStyles.submitBtn} onPress={handleSubmit}>
            <Text style={mainStyles.submitBtnText}> Continue </Text>
          </TouchableOpacity>
          <Text style={mainStyles.text}>New to Rentease? {' '}
            <Text style={mainStyles.linkText} onPress={() => navigation.dispatch(StackActions.replace('INTROINITIAL', { name: 'SIGNUP' }))}>
              Sign Up
            </Text>
            {' '}
          </Text>
        </View>
      )}

    </View>
  );
};
export default LoginScreen;
