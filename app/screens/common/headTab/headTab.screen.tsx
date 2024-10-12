import React from 'react';
import { View, Text, useColorScheme, TouchableOpacity } from 'react-native';
import { Divider } from 'react-native-paper';
import commonthemeStyle from '../common.styles';
import themeStyle from './headTab.styles';

const CommonTabScreen = ({ tabArr, activeTab, selectTab }: any) => {
    const theme = useColorScheme() ?? 'light';
    const mainStyles = commonthemeStyle(theme);
    const subStyles = themeStyle(theme);
    return (
        <>
            <Divider />
            <View style={mainStyles.rowAroundContainer}>
                {tabArr.map((item: any) => (
                    <TouchableOpacity 
                        key={item.value}
                        style={item.value === activeTab ? subStyles.subActiveContainerCenter : subStyles.subInActiveContainerCenter}
                        onPress={() => selectTab(item.value)}
                    >
                        <Text style={subStyles.textActive}>{item.lable} </Text>
                    </TouchableOpacity>

                ))}
            </View>
        </>
    );
};
export default React.memo(CommonTabScreen);