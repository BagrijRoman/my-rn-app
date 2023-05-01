import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { RootRoutes } from './src/routes/RootRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <RootRoutes/>
    </NavigationContainer>
  );
}
