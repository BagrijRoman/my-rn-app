import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";

import { SignIn, SignUp, Dashboard } from '../views';


const Stack = createNativeStackNavigator();

export const RootRoutes = () => (
  <Stack.Navigator initialRouteName="SignIn">
    <Stack.Screen
      name="SignIn"
      component={SignIn}
      options={{ title: 'Sign In' }}
    />
    <Stack.Screen
      name="SignUp"
      component={SignUp}
      options={{ title: 'Sign Up' }}
    />
    <Stack.Screen
      name="Dashboard"
      component={Dashboard}
      options={{ title: 'Dashboard' }}
    />
  </Stack.Navigator>
);
