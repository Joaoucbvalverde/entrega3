import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type Props = { navigation: StackNavigationProp<RootStackParamList, 'Login'> };

export default function LoginScreen({ navigation }: Props) {
  // Lista de perfis atualizada conforme o diagrama solicitado
  const perfis: Array<RootStackParamList['Home']['role']> = [
    'Público', 
    'Leitor', 
    'Autor', 
    'Editor', 
    'Super Admin'
  ];

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      
      <View style={styles.header}>
        <Text style={styles.emoji}>📚</Text>
        <Text style={styles.title}>BiblioTech</Text>
        <Text style={styles.subtitle}>Selecione seu perfil de acesso</Text>
      </View>

      <View style={styles.buttonContainer}>
        {perfis.map((p) => (
          <TouchableOpacity 
            key={p} 
            style={[
                styles.button, 
                p === 'Super Admin' ? styles.adminButton : null // Destaque para o Admin
            ]} 
            onPress={() => navigation.replace('Home', { role: p })}
          >
            <Text style={styles.text}>{p}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <Text style={styles.footer}>Entrega 3 - Persistência de Dados</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#F8F9FA' 
  },
  header: {
    alignItems: 'center',
    marginBottom: 30,
  },
  emoji: { fontSize: 50 },
  title: { 
    fontSize: 32, 
    fontWeight: 'bold', 
    color: '#1A1A1A',
    letterSpacing: 1
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
  button: { 
    backgroundColor: '#007AFF', 
    padding: 16, 
    borderRadius: 12, 
    width: '85%', 
    marginVertical: 6, 
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  adminButton: {
    backgroundColor: '#343A40', // Cor diferenciada para o Super Admin
  },
  text: { 
    color: '#FFF', 
    fontSize: 16, 
    fontWeight: '700', 
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    color: '#ABB2B9',
    fontSize: 12,
    fontWeight: '500'
  }
});