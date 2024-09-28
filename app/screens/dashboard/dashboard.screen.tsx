import React from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { Appbar } from 'react-native-paper';
import { FontAwesome6, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, StackActions } from '@react-navigation/native';
import commonthemeStyle from '../common/common.styles';
import themeStyle from './dashboard.styles';

const DashboardScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const theme = useColorScheme() ?? 'light';
    const mainStyles = commonthemeStyle(theme);
    return (
        <Appbar.Header style={{ backgroundColor: '#FEF7FF'}}>
            <Appbar.Action
                icon={() => (
                    <AntDesign
                        name="menu-fold"
                        size={25}
                        // color={Colors.theme.white}
                    />
                )}
                isLeading
                onPress={() => navigation.openDrawer()}
            />
            <Appbar.Content title="Dashboard" />
            <Appbar.Action
                icon={() => (
                    <FontAwesome6
                        name="circle-user"
                        size={24}
                        // color={Colors.theme.white}
                    />
                )}
                isLeading
                // onPress={goBackCheck}
            />
        </Appbar.Header>
    )
};
export default DashboardScreen;