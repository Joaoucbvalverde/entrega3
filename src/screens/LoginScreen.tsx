import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type Props = { navigation: StackNavigationProp<RootStackParamList, 'Login'> };

export default function LoginScreen({ navigation }: Props) {
  const perfis = ['Autor', 'Leitor', 'Super Admin'];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Biblioteca Digital</Text>
      {perfis.map((p) => (
        <TouchableOpacity 
          key={p} 
          style={styles.button} 
          onPress={() => navigation.replace('Home', { role: p })}
        >
          <Text style={styles.text}>{p}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#F0F2F5' },
  title: { fontSize: 26, fontWeight: 'bold', marginBottom: 40, color: '#1A1A1A' },
  button: { backgroundColor: '#007AFF', padding: 18, borderRadius: 12, width: '85%', marginVertical: 8, elevation: 3 },
  text: { color: '#FFF', fontSize: 18, fontWeight: '600', textAlign: 'center' }
});