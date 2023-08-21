// noinspection TypeScriptValidateTypes

import { createStackNavigator } from '@react-navigation/stack';

import { screens } from '../constants';
import { Dashboard } from '../views';

type AppStackParamList = {
  [screens.DASHBOARD]: undefined,
};

const AppStack = createStackNavigator<AppStackParamList>();

export const AppNavigator = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={screens.DASHBOARD}
        component={Dashboard}
      />
    </AppStack.Navigator>
  );
};
