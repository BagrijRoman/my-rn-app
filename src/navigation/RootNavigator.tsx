import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from "react-redux";

import { screens } from '../constants';
import { SignIn, SignUp, Dashboard } from '../views';
import { AuthNavigator } from './AuthNavigator';
import { AppNavigator } from './AppNavigator';
import { NavigatorScreenParams } from "@react-navigation/native";

type AuthNavigatorParamsListType = {
  [screens.SIGN_IN]: {
    name: string,
  }
};

type RootStackParamList = {
  [screens.AUTH_NAVIGATOR]: undefined,
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    const { user } = useSelector(({ user }) => user);

    return (
      <RootStack.Navigator /*initialRouteName={user ? screens.APP_NAVIGATOR : screens.AUTH_NAVIGATOR}*/ >
        <RootStack.Screen
          name={screens.AUTH_NAVIGATOR}
          component={AuthNavigator}
        />
        {/*<RootStack.Screen*/}
        {/*  name={screens.APP_NAVIGATOR}*/}
        {/*  component={AppNavigator}*/}
        {/*/>*/}



        {/*<Stack.Screen*/}
        {/*  key="SignIn"*/}
        {/*  name="SignIn"*/}
        {/*  component={SignIn}*/}
        {/*  options={{ title: 'Sign In' }}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  key="SignUp"*/}
        {/*  name="SignUp"*/}
        {/*  component={SignUp}*/}
        {/*  options={{ title: 'Sign Up' }}*/}
        {/*/>*/}
        {/*<Stack.Screen*/}
        {/*  name="Dashboard"*/}
        {/*  component={Dashboard}*/}
        {/*  options={{*/}
        {/*    title: 'Dashboard',*/}
        {/*    headerLeft: () => null,*/}
        {/*  }}*/}
        {/*/>*/}
      </RootStack.Navigator>
    );
}
