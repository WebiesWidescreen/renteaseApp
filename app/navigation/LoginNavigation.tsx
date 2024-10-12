import { createStackNavigator } from '@react-navigation/stack';
import { LoginStackParamList } from '../screenTypes';
import LoginScreen from "../screens/login/login.screen";
import OTPScreen from '../screens/otp/otp.screen';
import SetAVNScreen from '../screens/setAVN/setAVN.screen';

export default function LoginNavigation() {
  const LoginStack = createStackNavigator<LoginStackParamList>();
  return (
    <LoginStack.Navigator screenOptions={{ headerShown: false }}>
      <LoginStack.Screen name="LOGIN" component={LoginScreen} />
      <LoginStack.Screen name="OTP" component={OTPScreen} />
      <LoginStack.Screen name="SETAVN" component={SetAVNScreen} />
    </LoginStack.Navigator>
  );
}
