// noinspection TypeScriptValidateTypes

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';

import { screens } from '../constants';
import { AuthNavigator } from './AuthNavigator';
import { AppNavigator } from './AppNavigator';

type RootStackParamList = {
  [screens.AUTH_NAVIGATOR]: undefined,
  [screens.APP_NAVIGATOR]: undefined,
};

const RootStack = createStackNavigator<RootStackParamList>();

export const RootNavigator = () => {
    const { user } = useSelector(({ user }) => user);

    return (
      <NavigationContainer>
        <RootStack.Navigator
          initialRouteName={user ? screens.APP_NAVIGATOR : screens.AUTH_NAVIGATOR}
          screenOptions={{ headerShown: false }}
        >
          <RootStack.Screen
            name={screens.AUTH_NAVIGATOR}
            component={AuthNavigator}
          />
          <RootStack.Screen
            name={screens.APP_NAVIGATOR}
            component={AppNavigator}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    );
}
