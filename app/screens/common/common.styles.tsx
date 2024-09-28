import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

type ThemeType = 'light' | 'dark';
const commonthemeStyle = (theme: ThemeType) => {

    return StyleSheet.create({
        menuStyle: {
            backgroundColor: Colors.light.surface,
        },
        mainContainer: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-between',
            marginHorizontal: 10
        },
        title: {
            fontSize: 18,
            color: Colors[theme].titleText,
            marginVertical: 10,
        },
        titleLeft: {
            fontSize: 18,
            color: Colors[theme].titleText,
            alignSelf: 'flex-start',
            marginHorizontal: 15,
            marginVertical: 10,
        },
        subTitle: {
            fontSize: 16,
            color: Colors[theme].titleText,
        },
        subTitleLeft: {
            fontSize: 16,
            color: Colors[theme].titleText,
            alignSelf: 'flex-start',
            marginHorizontal: 20,
        },
        text: {
            fontSize: 14,
            color: Colors[theme].text,
        },
        textleft: {
            fontSize: 14,
            color: Colors[theme].text,
            alignSelf: 'flex-start',
            marginHorizontal: 20,
        },
        subText: {
            fontSize: 12,
            color: Colors[theme].text,
        },
        linkText: {
            fontSize: 14,
            cursor: 'pointer',
            textDecorationLine: 'underline',
            color:  Colors[theme].primary
        },
        linkTextLeft: {
            fontSize: 14,
            cursor: 'pointer',
            textDecorationLine: 'underline',
            color:  Colors[theme].primary,
            alignSelf: 'flex-start',
        },
        linkTextRight: {
            fontSize: 14,
            cursor: 'pointer',
            textDecorationLine: 'underline',
            color:  Colors[theme].primary,
            alignSelf: 'flex-end',
        },
        input: {
            width: '95%',
            marginVertical: 5,
            alignSelf: 'center',
        },
        radius10: {
            borderRadius: 10,
        },
        submitBtn: {
            width: '100%',
            margin: 10,
            padding: 10,
            alignItems: 'center',
            borderRadius: 20,
            elevation: 5,
            backgroundColor: Colors[theme].primary
        },
        submitBtnText: {
            fontSize: 14,
            color: Colors.dark.text,
        }
    });
};

export default commonthemeStyle;
