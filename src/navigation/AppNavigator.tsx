// src/navigation/AppNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

// Importe suas telas
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CadastroScreen from '../screens/CadastroScreen';
import DetalhesScreen from '../screens/DetalhesScreen';

const Stack = createStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Portal de Notícias' }} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} options={{ title: 'Novo Cadastro' }} />
        <Stack.Screen name="Detalhes" component={DetalhesScreen} options={{ title: 'Conteúdo' }} />
        
        {/* Rotas de busca que o diagrama pede, você pode apontar para a Home 
            temporariamente para não dar erro de compilação */}
        <Stack.Screen name="BuscaUF" component={HomeScreen} />
        <Stack.Screen name="BuscaTag" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}