import React from 'react';
import { View, Text, useColorScheme } from 'react-native';
import { Divider } from 'react-native-paper';
import commonthemeStyle from '../common.styles';
import themeStyle from './dateRange.styles';
import { getDateRange } from '@/redux/common/common-utils';

const CommonDateRangeScreen = ({ day, month }: any) => {
    const theme = useColorScheme() ?? 'light';
    const mainStyles = commonthemeStyle(theme);
    const subStyles = themeStyle(theme);

    // const dateRange = getDateRange(day, month);
    // console.log('From:', dateRange.fromDate.toDateString());
    // console.log('To:', dateRange.toDate.toDateString());
    return (
        <>
            <Divider />
            <View style={mainStyles.rowAroundContainer}>
                <View style={{ backgroundColor: 'red'}}>

                </View>
                <Text>ell</Text>
            </View>
        </>
    );
};
export default React.memo(CommonDateRangeScreen);