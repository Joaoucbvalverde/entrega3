import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ route }: any) {
  const { role } = route.params;
  const dados = [
    { id: '1', titulo: 'O Alquimista', autor: 'Paulo Coelho' },
    { id: '2', titulo: 'Dom Casmurro', autor: 'Machado de Assis' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Bem-vindo, {role}!</Text>
      <FlatList
        data={dados}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Ionicons name="book-outline" size={24} color="#007AFF" />
            <View style={{ marginLeft: 15 }}>
              <Text style={styles.cardTitle}>{item.titulo}</Text>
              <Text style={styles.cardSub}>{item.autor}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FFF' },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  card: { flexDirection: 'row', padding: 20, backgroundColor: '#F9F9F9', borderRadius: 15, marginBottom: 15, alignItems: 'center', borderWidth: 1, borderColor: '#EEE' },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardSub: { color: '#666' }
});