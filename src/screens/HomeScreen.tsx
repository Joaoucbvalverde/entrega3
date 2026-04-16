import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen({ route, navigation }: any) {
  const { role } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.welcome}>Portal da Biblioteca - Modo {role}</Text>

      {/* --- SEÇÃO PÚBLICA (Todos veem) --- */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Acesso Público</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BuscaSetor')}>
            <Ionicons name="map" size={24} color="#FFF" />
            <Text style={styles.btnText}>Por Setor</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('BuscaGenero')}>
            <Ionicons name="pricetags" size={24} color="#FFF" />
            <Text style={styles.btnText}>Por Gênero</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* --- SEÇÃO LEITOR (Diagrama: Perfil + Comentar) --- */}
      {(role === 'LEITOR' || role === 'SUPERADMIN') && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Área do Leitor</Text>
          <TouchableOpacity style={styles.btnRow} onPress={() => navigation.navigate('MeuPerfil')}>
            <Ionicons name="person-circle" size={24} color="#FFF" />
            <Text style={styles.btnText}>Meu Perfil e Reservas</Text>
          </TouchableOpacity>
        </View>
      )}

      {/* --- SEÇÃO AUTOR/EDITOR (Diagrama: Painel + Publicar) --- */}
      {(role === 'AUTOR' || role === 'EDITOR' || role === 'SUPERADMIN') && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Gerenciamento de Obras</Text>
          <View style={styles.grid}>
            <TouchableOpacity style={[styles.btn, {backgroundColor: '#28a745'}]} onPress={() => navigation.navigate('CadastroLivro')}>
              <Ionicons name="add-circle" size={24} color="#FFF" />
              <Text style={styles.btnText}>Nova Obra</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('MeusLivros')}>
              <Ionicons name="list" size={24} color="#FFF" />
              <Text style={styles.btnText}>Minhas Obras</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* --- SEÇÃO SUPERADMIN (Diagrama: Dashboard + CRUD Usuarios) --- */}
      {role === 'SUPERADMIN' && (
        <View style={styles.sectionAdmin}>
          <Text style={styles.sectionTitle}>Master Admin Dashboard</Text>
          <View style={styles.grid}>
            <TouchableOpacity style={styles.btnAdmin} onPress={() => navigation.navigate('GerenciarUsuarios')}>
              <Text style={styles.btnText}>CRUD Usuários</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnAdmin} onPress={() => Alert.alert("Logs", "Logs do Sistema")}>
              <Text style={styles.btnText}>Gerenciar Tags</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f0f2f5', padding: 15 },
  welcome: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, color: '#1a73e8', textAlign: 'center' },
  section: { backgroundColor: '#FFF', padding: 15, borderRadius: 12, marginBottom: 15, elevation: 2 },
  sectionAdmin: { backgroundColor: '#343a40', padding: 15, borderRadius: 12, marginBottom: 15 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 10, color: '#555' },
  grid: { flexDirection: 'row', justifyContent: 'space-between', flexWrap: 'wrap' },
  btn: { backgroundColor: '#007AFF', width: '48%', padding: 15, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  btnRow: { backgroundColor: '#6f42c1', padding: 15, borderRadius: 8, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' },
  btnAdmin: { backgroundColor: '#dc3545', width: '48%', padding: 12, borderRadius: 8, alignItems: 'center', marginBottom: 10 },
  btnText: { color: '#FFF', fontWeight: 'bold', marginLeft: 8, fontSize: 13 }
});