import React from 'react';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

import { RootNavigator } from './src/navigation/RootNavigator';
import { store } from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}>
        <RootNavigator/>
      <Toast />
    </Provider>
  );
}
