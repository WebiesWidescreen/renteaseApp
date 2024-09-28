import React from 'react';
import { useColorScheme } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackParamList } from '../screenTypes';
import  CustomDrawerContent from './CustomDrawerContent';
import DashboardScreen from '../screens/dashboard/dashboard.screen';
import commonthemeStyle from '@/app/screens/common/common.styles';
import AgreementScreen from '../screens/agreement/agreement.screen';

const Drawer = createDrawerNavigator<HomeStackParamList>();



const HomeNavigation = () => {
  const theme = useColorScheme() ?? 'light';
  const mainStyles = commonthemeStyle(theme);
  return (
    <Drawer.Navigator initialRouteName="DASHBOARD" drawerContent={CustomDrawerContent} screenOptions={{ drawerStyle: mainStyles.menuStyle ,headerShown: false, drawerActiveTintColor: '#007bff',  drawerInactiveTintColor: '#333', }} >
      <Drawer.Screen name="DASHBOARD" component={DashboardScreen} />
      <Drawer.Screen name="AGREEMENT" component={AgreementScreen} />
      {/* Add more drawer screens here if needed */}
    </Drawer.Navigator>
  );
};


export default HomeNavigation;

