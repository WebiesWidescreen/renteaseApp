import React, { useLayoutEffect, useState } from 'react';
import { Text, View, useColorScheme } from 'react-native';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation, StackActions } from '@react-navigation/native';
import commonthemeStyle from '../common/common.styles';
import themeStyle from './dashboard.styles';
import CommonHeaderScreen from '../common/header/header.screen';
import CommonTabScreen from '../common/headTab/headTab.screen';
import CommonDateRangeScreen from '../common/dateRange/dateRange.screen';
import { getLoadData } from '@/redux/login/login-selectors';

const DashboardScreen = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
    const localLoadData = useSelector(getLoadData);
    const theme = useColorScheme() ?? 'light';
    const mainStyles = commonthemeStyle(theme);
    const tabArr = [
        { value: 'OWNER', lable: 'Owner Dashboard'},
        { value: 'TENANT', lable: 'Tenant Dashboard'},
    ];
    const [localState, setLocalState] = useState({
        activeTab: 'OWNER',
        currMonth: new Date().getMonth() + 1,
    });
    console.log('loa', localLoadData);
    return (
        <>
            <CommonHeaderScreen title="Dashboard" />
            <CommonTabScreen tabArr={tabArr} activeTab={localState.activeTab} selectTab={(data: string) => setLocalState((ls) => ({ ...ls, activeTab: data}))}/>
            <CommonDateRangeScreen day={15} month={localState.currMonth}/>
            {/* <View style={mainStyles.mainContainer}>

            </View> */}
        </>

    )
};
export default DashboardScreen;