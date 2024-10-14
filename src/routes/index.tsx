import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tab.routes';
import React from 'react';

export default function Routes() {
  return (
    <NavigationContainer>
      <TabRoutes />
    </NavigationContainer>
  );
}
