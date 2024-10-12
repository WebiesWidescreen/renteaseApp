import { useLayoutEffect, useState, useEffect, useRef } from "react";
import { Text, View, Image, useColorScheme, TouchableOpacity, ToastAndroid, Keyboard } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, StackActions } from '@react-navigation/native';
import { TextInput } from 'react-native-paper';
import commonthemeStyle from '../common/common.styles';
import themeStyle from './setAVN.styles';
import { SignUpAVNStart, SignUpAVNReset } from '@/redux/signUp/signUp-actions';
import { getSignUpAVNStatus } from '@/redux/signUp/signUp-selectors';

const SetAVNScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const theme = useColorScheme() ?? 'light';
    const mainStyles = commonthemeStyle(theme);
    const signUpAVNStatus = useSelector(getSignUpAVNStatus);
    const previousToRoute = navigation.canGoBack() ? navigation.getState().routes[navigation.getState().index - 2] : null;
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
        if (signUpAVNStatus) {
            navigation.dispatch(StackActions.replace('LOGININITIAL'));
        }
    }, [signUpAVNStatus]);

    const [localState, setLocalState] = useState({
        userName: '',
        userPhone: '',
        userAVN: '',
        userConfirmAVN: '',
        keyboardVisible: false,
    });
    const subStyles = themeStyle(theme, localState.keyboardVisible);
    const inputUserAvn: any = useRef(null);
    const inputUserConfirmAVN: any = useRef(null);

    const handleSubmit = () => {
        if (localState.userAVN === '') {
            ToastAndroid.show('Enter New AVN', ToastAndroid.LONG);
            inputUserAvn.current.focus();
        } else if (localState.userConfirmAVN === '') {
            ToastAndroid.show('Enter Confirm AVN', ToastAndroid.LONG);
            inputUserConfirmAVN.current.focus();
        } else if (localState.userConfirmAVN !== localState.userAVN) {
            ToastAndroid.show('New AVN and Confirm AVN Mismatch', ToastAndroid.LONG);
            inputUserConfirmAVN.current.focus();
        } else {
            // dispatch(SignUpAVNStart(localState));
            navigation.dispatch(StackActions.replace('LOGININITIAL'));
        }
    }

    return (
        <View style={mainStyles.mainContainer}>
            <View style={subStyles.subContainerCenter}>
                <Image style={subStyles.topImage} source={require('@/assets/images/intial/signUp.png')} />
                <Text style={mainStyles.subTitle}>Welcome to Rentease ! </Text>
            </View>
            <View style={subStyles.subContainerCenter2}>
                <Text style={mainStyles.titleLeft}>{previousToRoute.name === 'SIGNUP' ? 'Create AVN' : 'Reset AVN'}</Text>
                <Text style={mainStyles.subTitleLeft}>New Account Verification Number </Text>
                <TextInput
                    ref={inputUserAvn}
                    label="Enter New AVN"
                    mode="outlined"
                    value={localState.userAVN}
                    style={mainStyles.input}
                    outlineStyle={mainStyles.radius10}
                    onChangeText={(userAVN: string) => setLocalState({ ...localState, userAVN })}
                    onSubmitEditing={() => inputUserConfirmAVN.current.focus()}
                />
                <Text style={mainStyles.subTitleLeft}>Confirm Account Verification Number </Text>
                <TextInput
                    ref={inputUserConfirmAVN}
                    label="Enter Confirm AVN"
                    mode="outlined"
                    // secureTextEntry
                    value={localState.userConfirmAVN}
                    style={mainStyles.input}
                    outlineStyle={mainStyles.radius10}
                    onChangeText={(userConfirmAVN: string) => setLocalState({ ...localState, userConfirmAVN })}
                />
            </View>
            <View style={subStyles.subContainerCenter2} />
            <View style={subStyles.subContainerCenter2} />
            {!localState.keyboardVisible && (
                <View style={subStyles.subContainerCenter3}>
                    <TouchableOpacity style={mainStyles.submitBtn} onPress={handleSubmit}>
                        <Text style={mainStyles.submitBtnText}> Submit </Text>
                    </TouchableOpacity>
                </View>
            )}


        </View>
    );
};
export default SetAVNScreen;
