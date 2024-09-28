import { useLayoutEffect, useState, useEffect, useRef } from "react";
import { Text, View, Image, useColorScheme, TouchableOpacity, ToastAndroid, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, StackActions } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import commonthemeStyle from '../common/common.styles';
import themeStyle from './signUp.styles';
import { SignUpStart, SignUpReset } from '@/redux/signUp/signUp-actions';
import { getSignUpStatus } from '@/redux/signUp/signUp-selectors';

const SignUpScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const theme = useColorScheme() ?? 'light';
    const mainStyles = commonthemeStyle(theme);
    const signUpStatus = useSelector(getSignUpStatus);
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

    useLayoutEffect(() => {
        if (signUpStatus) {
            // navigation.dispatch(StackActions.replace('LOGININITIAL'));
            navigation.navigate('OTP');
        }
    }, [signUpStatus]);

    const [localState, setLocalState] = useState({
        userName: '',
        userPhone: '',
        keyboardVisible: false,
    });
    const subStyles = themeStyle(theme, localState.keyboardVisible);
    const inputUserName: any = useRef(null);
    const inputUserPhone: any = useRef(null);

    const handleSubmit = () => {
        if (localState.userName === '') {
            ToastAndroid.show('Enter Your Name', ToastAndroid.LONG);
            inputUserName.current.focus();
        } else if (localState.userPhone.length < 10) {
            ToastAndroid.show('Enter Your Phone Number', ToastAndroid.LONG);
            inputUserPhone.current.focus();
        } else {
            // dispatch(SignUpStart(localState));
            navigation.navigate('OTP');
        }
    }

    return (
        <View style={mainStyles.mainContainer}>
            <View style={subStyles.subContainerCenter}>
                <Image style={subStyles.topImage} source={require('@/assets/images/intial/signUp.png')} />
                <Text style={mainStyles.subTitle}>Welcome to Rentease ! </Text>
            </View>
            <View style={subStyles.subContainerCenter2}>
                <Text style={mainStyles.titleLeft}>Sign Up </Text>
                <Text style={mainStyles.subTitleLeft}>Name </Text>
                <TextInput
                    ref={inputUserName}
                    label="Enter Your Name"
                    mode="outlined"
                    value={localState.userName}
                    style={mainStyles.input}
                    outlineStyle={mainStyles.radius10}
                    onChangeText={(userName: string) => setLocalState({ ...localState, userName })}
                    onSubmitEditing={() => inputUserPhone.current.focus()}
                />
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
                />
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
                    <Text style={mainStyles.text}>Joined us before? {' '}
                        <Text style={mainStyles.linkText} onPress={() => navigation.dispatch(StackActions.replace('LOGININITIAL'))}>
                            Login
                        </Text>
                        {' '}
                    </Text>
                </View>
            )}


        </View>
    );
};
export default SignUpScreen;
