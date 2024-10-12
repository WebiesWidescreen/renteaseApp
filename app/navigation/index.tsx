import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { RootStackParamList } from '../screenTypes';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from '@/hooks/useColorScheme';
import LoginNavigation from "./LoginNavigation";
import IntroNavigation from './IntroNavigation';
import HomeNavigation from './HomeNavigation';


export default function Navigation() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer
      // linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      independent={true}
    >
      <RootNavigator />
    </NavigationContainer>
  );
}


const Drawer = createDrawerNavigator();

function HomeDrawer() {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }}>
      <Drawer.Screen name="Home" component={HomeNavigation} />
    </Drawer.Navigator>
  );
}

function RootNavigator() {
  const Stack = createStackNavigator<RootStackParamList>();
  return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='INTROINITIAL'>
        <Stack.Screen name="INTROINITIAL" component={IntroNavigation} />
        <Stack.Screen name="LOGININITIAL" component={LoginNavigation} />
        <Stack.Screen name="HOMEINITIAL" component={HomeDrawer} />
      </Stack.Navigator>
  );
}
