import { useLayoutEffect, useState, useEffect, useRef } from "react";
import { Text, View, Image, useColorScheme, TouchableOpacity, ToastAndroid, Keyboard, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, StackActions } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import commonthemeStyle from '../common/common.styles';
import themeStyle from './otp.styles';
import { SignUpOTPStart, SignUpOTPReset } from '@/redux/signUp/signUp-actions';
import { getSignUpOTPStatus } from '@/redux/signUp/signUp-selectors';

const OTPScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>();
  const theme = useColorScheme() ?? 'light';
  const mainStyles = commonthemeStyle(theme);
  const signUpOTPStatus = useSelector(getSignUpOTPStatus);
  const previousRoute = navigation.canGoBack() ? navigation.getState().routes[navigation.getState().index - 1] : null;
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
  //     if (signUpOTPStatus) {
  //         navigation.dispatch(StackActions.replace('LOGININITIAL'));
  //     }
  // }, [signUpOTPStatus]);

  const [localState, setLocalState] = useState({
    userPhone: '',
    userName: '',
    userOTP: '',
    keyboardVisible: false,
  });
  const subStyles = themeStyle(theme, localState.keyboardVisible);
  const inputUserAvn: any = useRef(null);
  const userOTP: any = useRef(null);

  const handleSubmit = () => {
    if (localState.userOTP.length < 6) {
      ToastAndroid.show('Enter Proper OTP', ToastAndroid.LONG);
      userOTP.current.focus();
    } else {
      // dispatch(SignUpOTPStart(localState));
      navigation.navigate('SETAVN');

    }
  }

  return (
    <View style={mainStyles.mainContainer}>
      <View style={subStyles.subContainerCenter}>
        <Image style={subStyles.topImage} source={require('@/assets/images/intial/signUp.png')} />
        <Text style={mainStyles.subTitle}>Welcome to Rentease ! </Text>
      </View>
      <View style={subStyles.subContainerCenter2}>
        <Text style={mainStyles.titleLeft}>{previousRoute.name === 'SIGNUP' ? 'Enter OTP' : 'Forgot AVN?'}</Text>
        {previousRoute.name === 'SIGNUP' ? (
          <Text style={mainStyles.subTitleLeft}>An 4 Digit code has been sent to +91 {localState.userPhone}</Text>
        ) : (
          <>
            <Text style={mainStyles.textleft}>Don’t worry! It happens. Please enter the Phone Number  associated with your Account.</Text>
            <Text style={mainStyles.subTitleLeft}>Phone Number +91 {localState.userPhone}</Text>
          </>
        )}

        <TextInput
          ref={userOTP}
          label="Enter 6 Digit OTP"
          placeholder=""
          mode="outlined"
          keyboardType="numeric"
          maxLength={6}
          value={localState.userOTP}
          style={mainStyles.input}
          outlineStyle={mainStyles.radius10}
          onChangeText={(userOTP: string) => setLocalState({ ...localState, userOTP })}
        />
      </View>
      <View style={subStyles.subContainerCenter2} />
      <View style={subStyles.subContainerCenter2} />
      {!localState.keyboardVisible && (
        <View style={subStyles.subContainerCenter3}>
          {previousRoute.name === 'SIGNUP' && (
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
          )}
          <TouchableOpacity style={mainStyles.submitBtn} onPress={handleSubmit}>
            <Text style={mainStyles.submitBtnText}> Submit </Text>
          </TouchableOpacity>
          {previousRoute.name === 'SIGNUP' && (
            <Text style={mainStyles.text}>Joined us before? {' '}
              <Text style={mainStyles.linkText} onPress={() => navigation.dispatch(StackActions.replace('LOGININITIAL'))}>
                Login
              </Text>
              {' '}
            </Text>
          )}

        </View>
      )}

    </View>

  );
};
export default OTPScreen;
