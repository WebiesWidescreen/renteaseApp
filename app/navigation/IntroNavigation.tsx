import { createStackNavigator } from '@react-navigation/stack';
import { IntroStackParamList } from '../screenTypes';
import IntroScreen from "../screens/intro/intro.screen";
import SignUpScreen from '../screens/signUp/signUp.screen';
import OTPScreen from '../screens/otp/otp.screen';
import SetAVNScreen from '../screens/setAVN/setAVN.screen';

export default function IntroNavigation() {
  const IntroStack = createStackNavigator<IntroStackParamList>();
  return (
    <IntroStack.Navigator screenOptions={{ headerShown: false }}>
      <IntroStack.Screen name="INTRO" component={IntroScreen} />
      <IntroStack.Screen name="SIGNUP" component={SignUpScreen} />
      <IntroStack.Screen name="OTP" component={OTPScreen} />
      <IntroStack.Screen name="SETAVN" component={SetAVNScreen} />
    </IntroStack.Navigator>
  );
}
