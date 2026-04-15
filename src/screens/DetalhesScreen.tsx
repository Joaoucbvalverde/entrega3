import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DetalhesScreen({ route, navigation }: any) {
  const { id } = route.params; // Recebe o ID da obra selecionada

  const confirmarExclusao = () => {
    Alert.alert("Excluir", "Deseja realmente remover esta obra?", [
      { text: "Cancelar", style: "cancel" },
      { text: "Excluir", onPress: () => navigation.goBack(), style: "destructive" }
    ]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.infoBox}>
        <Ionicons name="information-circle-outline" size={40} color="#007AFF" />
        <Text style={styles.idText}>ID da Obra: {id}</Text>
        <Text style={styles.detailText}>Aqui aparecem os detalhes detalhados conforme exigido no requisito 3.</Text>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.buttonText}>Editar Informações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.deleteButton} onPress={confirmarExclusao}>
        <Text style={styles.buttonText}>Excluir Obra</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', justifyContent: 'center' },
  infoBox: { alignItems: 'center', marginBottom: 40, padding: 20, backgroundColor: '#F8F9FA', borderRadius: 20 },
  idText: { fontSize: 18, fontWeight: 'bold', marginTop: 10 },
  detailText: { textAlign: 'center', color: '#666', marginTop: 10 },
  editButton: { backgroundColor: '#FFC107', padding: 15, borderRadius: 10, marginBottom: 10 },
  deleteButton: { backgroundColor: '#DC3545', padding: 15, borderRadius: 10 },
  buttonText: { color: '#FFF', textAlign: 'center', fontWeight: 'bold' }
});