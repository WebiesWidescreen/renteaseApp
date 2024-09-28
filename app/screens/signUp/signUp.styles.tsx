import { StyleSheet, Dimensions } from 'react-native';
import { Colors } from '@/constants/Colors';

const widthLen = Dimensions.get('window').width;
const heightLen = Dimensions.get('window').height;

type ThemeType = 'light' | 'dark';
const themeStyle = (theme: ThemeType, isKeyBoardEnable: boolean) => {
    return StyleSheet.create({
        subContainerCenter: {
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
        },
        subContainerCenter2: {
            flexDirection: 'column',
            justifyContent: 'flex-end',
            alignItems: 'center',
            bottom: 20,
        },
        subContainerCenter3: {
            flexDirection: 'column',
            justifyContent: 'flex-start',
            alignItems: 'center',
            bottom: 20,

        },
        topImage: {
            // height: heightLen * 0.34,
            // width: widthLen * 0.68,
            height: !isKeyBoardEnable ? heightLen * 0.34 : heightLen * 0.15,
            width: !isKeyBoardEnable ? widthLen * 0.68 : widthLen * 0.34,
            resizeMode: 'cover',
        }
    });
};

export default themeStyle;
