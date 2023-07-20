import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import { useSelector } from "react-redux";

import { SignIn, SignUp, Dashboard } from '../views';

const Stack = createNativeStackNavigator();

export const RootRoutes = () => {
    const { user } = useSelector(({ user }) => user);

    return (
      <Stack.Navigator initialRouteName={user ? 'Dashboard' : 'SignIn'}>
        {
          !user && (
            [
              <Stack.Screen
                name="SignIn"
                component={SignIn}
                options={{ title: 'Sign In' }}
              />,
              <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: 'Sign Up' }}
              />,
            ]
          )
        }
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ title: 'Dashboard' }}
        />
      </Stack.Navigator>
    );
}
