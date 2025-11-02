import { NavigationProp, useNavigation } from '@react-navigation/native';
import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

type RootStackParamList = {
  Dashboard: { id: string } | undefined;
  ListaAssinatura: { id: string } | undefined;
};

const Dashboard = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.searchButton}>
            <Text>[Busca]</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.configButton}>
            <Text>[Config]</Text>
          </TouchableOpacity>
        </View>

        {/* Total Section */}
        <View style={styles.totalSection}>
          <Text style={styles.totalAmount}>R$ 287,50</Text>
          <Text style={styles.totalLabel}>Total deste mês em assinaturas</Text>
          <Text style={styles.variation}>12% vs último mês</Text>
        </View>

        {/* Próximas Cobranças */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>PRÓXIMAS COBRANÇAS</Text>
          
          <TouchableOpacity 
            style={styles.subscriptionItem}
            onPress={() => navigation.navigate('Dashboard', { id: 'netflix' })}
          >
            <View style={styles.subscriptionHeader}>
              <Text style={styles.subscriptionName}>Netflix</Text>
              <Text style={styles.subscriptionPrice}>R$ 39,90</Text>
            </View>
            <Text style={styles.subscriptionDate}>15/12</Text>
            <Text style={styles.subscriptionPlan}>Plano Premium 4 telas</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.subscriptionItem}
            onPress={() => navigation.navigate('Dashboard', { id: 'spotify' })}
          >
            <View style={styles.subscriptionHeader}>
              <Text style={styles.subscriptionName}>Spotify</Text>
              <Text style={styles.subscriptionPrice}>R$ 19,90</Text>
            </View>
            <Text style={styles.subscriptionDate}>20/12</Text>
            <Text style={styles.subscriptionPlan}>Plano Individual</Text>
          </TouchableOpacity>
        </View>

        {/* Distribuição */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>DISTRIBUIÇÃO</Text>
          <View style={styles.distributionItem}>
            <Text>Streaming</Text>
            <Text>45%</Text>
          </View>
          <View style={styles.distributionItem}>
            <Text>Software</Text>
            <Text>35%</Text>
          </View>
          <View style={styles.distributionItem}>
            <Text>Games</Text>
            <Text>20%</Text>
          </View>
        </View>

        {/* Botão para Lista de Assinaturas */}
        <TouchableOpacity 
          style={styles.viewAllButton}
          onPress={() => navigation.navigate('ListaAssinatura')}
        >
          <Text style={styles.viewAllText}>Ver Todas as Assinaturas</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  searchButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  configButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  totalSection: {
    alignItems: 'center',
    marginBottom: 32,
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 12,
  },
  totalAmount: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  totalLabel: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
  },
  variation: {
    fontSize: 14,
    color: '#28a745',
    marginTop: 4,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#333',
  },
  subscriptionItem: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 8,
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subscriptionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subscriptionPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  subscriptionDate: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  subscriptionPlan: {
    fontSize: 14,
    color: '#666',
  },
  distributionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  viewAllButton: {
    backgroundColor: '#007bff',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  viewAllText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Dashboard;