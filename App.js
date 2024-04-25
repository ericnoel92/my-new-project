import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Morpion from './src/pages/Morpion';
import HomePage from './src/pages/HomePage'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="HomePage" component={HomePage} />
<Stack.Screen name="Morpion" component={Morpion} />
</Stack.Navigator>
    </NavigationContainer>
  );
}
