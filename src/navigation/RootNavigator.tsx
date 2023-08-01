import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from "react-redux";

import { SignIn, SignUp, Dashboard } from '../views';

const Stack = createStackNavigator();

export const RootNavigator = () => {
    const { user } = useSelector(({ user }) => user);

    return (
      <Stack.Navigator initialRouteName={user ? 'Dashboard' : 'SignIn'}>
        <Stack.Screen
          key="SignIn"
          name="SignIn"
          component={SignIn}
          options={{ title: 'Sign In' }}
        />
        <Stack.Screen
          key="SignUp"
          name="SignUp"
          component={SignUp}
          options={{ title: 'Sign Up' }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{
            title: 'Dashboard',
            headerLeft: () => null,
          }}
        />
      </Stack.Navigator>
    );
}
