import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';

const widthLen = Dimensions.get('window').width;
const heightLen = Dimensions.get('window').height;

type ThemeType = 'light' | 'dark';
const themeStyle = (theme: ThemeType) => {

    return StyleSheet.create({
        subActiveContainerCenter: {
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20, 
            borderBottomColor: Colors[theme].primary,
            borderBottomWidth: 5,
        },
        subInActiveContainerCenter: {
            flex: 1, 
            justifyContent: 'center',
            alignItems: 'center',
            padding: 20, 
        },
        textActive: {
            color: Colors[theme].primary,
            fontSize: 14, 
        }
    });
};

export default themeStyle;
