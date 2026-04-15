import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CadastroScreen from '../screens/CadastroScreen';
import DetalhesScreen from '../screens/DetalhesScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Acervo' }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Nova Obra' }} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Detalhes da Obra' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}