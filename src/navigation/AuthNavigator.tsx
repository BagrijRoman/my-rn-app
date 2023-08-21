// noinspection TypeScriptValidateTypes

import { createStackNavigator } from '@react-navigation/stack';

import { screens } from '../constants';
import { SignIn, SignUp } from '../views';

const AuthStack = createStackNavigator();

export const AuthNavigator = () => {

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        name={screens.SIGN_IN}
        component={SignIn}
        options={{ title: 'Sign In' }}
      />
      <AuthStack.Screen
        name={screens.SIGN_UP}
        component={SignUp}
        options={{ title: 'Sign Up' }}
      />
    </AuthStack.Navigator>
  );
};
