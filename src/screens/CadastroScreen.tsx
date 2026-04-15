import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../types/navigation';

type Props = { navigation: StackNavigationProp<RootStackParamList, 'Cadastro'> };

export default function CadastroScreen({ navigation }: Props) {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');

  const handleSalvar = () => {
    if (!titulo || !autor) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    // Aqui viria a lógica para salvar no banco/lista
    Alert.alert("Sucesso", "Obra cadastrada com sucesso!");
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Título da Obra</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Ex: Dom Casmurro" 
        value={titulo} 
        onChangeText={setTitulo} 
      />

      <Text style={styles.label}>Nome do Autor</Text>
      <TextInput 
        style={styles.input} 
        placeholder="Ex: Machado de Assis" 
        value={autor} 
        onChangeText={setAutor} 
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar Obra</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  label: { fontSize: 16, fontWeight: 'bold', marginBottom: 8, color: '#333' },
  input: { borderWidth: 1, borderColor: '#DDD', padding: 12, borderRadius: 8, marginBottom: 20, fontSize: 16 },
  button: { backgroundColor: '#28A745', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#FFF', fontWeight: 'bold', fontSize: 16 }
});