/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string = string> extends Record<string, unknown> {
      StaticRoutes: `/` | `/_sitemap` | `/navigation` | `/navigation/CustomDrawerContent` | `/navigation/HomeNavigation` | `/navigation/IntroNavigation` | `/navigation/LoginNavigation` | `/screenTypes` | `/screens/agreement/agreement.screen` | `/screens/agreement/agreement.styles` | `/screens/common/common.styles` | `/screens/dashboard/dashboard.screen` | `/screens/dashboard/dashboard.styles` | `/screens/intro/intro.screen` | `/screens/intro/intro.styles` | `/screens/login/login.screen` | `/screens/login/login.styles` | `/screens/otp/otp.screen` | `/screens/otp/otp.styles` | `/screens/setAVN/setAVN.screen` | `/screens/setAVN/setAVN.styles` | `/screens/signUp/signUp.screen` | `/screens/signUp/signUp.styles`;
      DynamicRoutes: never;
      DynamicRouteTemplate: never;
    }
  }
}
