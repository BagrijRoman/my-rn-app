import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

import { RootRoutes } from './src/routes/RootRoutes';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootRoutes/>
      </NavigationContainer>
      <Toast />
    </Provider>
  );
}
