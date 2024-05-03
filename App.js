import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Morpion from './src/pages/Morpion';
import HomePage from './src/pages/HomePage'
import Inscription from './src/pages/Inscription'
import Connexion from './src/pages/Connexion'
import StickMan from './src/pages/StickMan'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator>
<Stack.Screen name="HomePage" component={HomePage} />
<Stack.Screen name="StickMan" component={StickMan} />
<Stack.Screen name="Inscription" component={Inscription} />
<Stack.Screen name="Connexion" component={Connexion} />
<Stack.Screen name="Morpion" component={Morpion} />
</Stack.Navigator>
    </NavigationContainer>
  );
}
