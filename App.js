import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppRouter from './src/pages/Router';

export default function App() {
  return (
    <NavigationContainer>
      <AppRouter />
    </NavigationContainer>
  );
}
