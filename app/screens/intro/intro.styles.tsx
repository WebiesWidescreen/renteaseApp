import { StyleSheet } from 'react-native';
import { Colors } from '@/constants/Colors';

type ThemeType = 'light' | 'dark';
const themeStyle = (theme: ThemeType) => {

    return StyleSheet.create({
        slide: {
            flex: 1,
            flexDirection: 'column',
            justifyContent: 'space-around',
            alignItems: 'center',
        },
        title: {
            fontSize: 18,
            color: Colors[theme].titleText,
        },
        text: {
            fontSize: 12,
            color: Colors[theme].text,
        },
        buttonCircle: {
            position: 'absolute',
            right: 0,
            width: 60,
            height: 60,
            backgroundColor: Colors[theme].btnBackground,
            borderRadius: 100,
            justifyContent: 'center',
            alignItems: 'center',
        },
    });
};

export default themeStyle;
