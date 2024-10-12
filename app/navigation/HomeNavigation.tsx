import React from 'react';
import { useColorScheme } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HomeStackParamList } from '../screenTypes';
import  CustomDrawerContent from './CustomDrawerContent';
import DashboardScreen from '../screens/dashboard/dashboard.screen';
import commonthemeStyle from '@/app/screens/common/common.styles';
import AgreementScreen from '../screens/agreement/agreement.screen';
import { MaterialIcons } from '@expo/vector-icons';

const Drawer = createDrawerNavigator<HomeStackParamList>();
const drawerItems = [
  {
    name: 'DASHBOARD',
    icon: 'dashboard',
    component: DashboardScreen,
  },
  {
    name: 'AGREEMENT',
    icon: 'description',
    component: AgreementScreen,
  },
  // Add more items here if needed
];


const HomeNavigation = () => {
  const theme = useColorScheme() ?? 'light';
  const mainStyles = commonthemeStyle(theme);
  return (
    <Drawer.Navigator initialRouteName="DASHBOARD"  drawerContent={(props) => <CustomDrawerContent {...props} items={drawerItems} />}  screenOptions={{ drawerStyle: mainStyles.menuStyle ,headerShown: false, drawerActiveTintColor: '#007bff',  drawerInactiveTintColor: '#333', }} >
      {drawerItems.map((item: any) => (
        <Drawer.Screen key={item.name} name={item.name} component={item.component} />
      ))}
    </Drawer.Navigator>
  );
};


export default HomeNavigation;

