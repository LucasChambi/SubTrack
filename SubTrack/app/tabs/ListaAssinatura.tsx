import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

const ListaAssinatura = () => {
  const navigation = useNavigation<any>();
  const [activeFilter, setActiveFilter] = useState('Todas');
  const [categoryFilter, setCategoryFilter] = useState('Todas');

  const subscriptions = [
    {
      id: 'netflix',
      name: 'NETFLIX',
      price: 'R$ 39,90/mês',
      status: 'Ativa',
      category: 'Streaming',
      dueDate: 'Vence dia 15',
    },
    {
      id: 'spotify',
      name: 'SPOTIFY',
      price: 'R$ 19,90/mês',
      status: 'Próximo',
      category: 'Música',
      dueDate: 'Vence em 3 dias',
    },
    {
      id: 'adobe',
      name: 'ADOBE CREATIVE',
      price: 'R$ 119,00/mês',
      status: 'Ativa',
      category: 'Software',
      dueDate: 'Vence dia 5',
    },
  ];

  const filteredSubscriptions = subscriptions.filter(sub => {
    const statusMatch = activeFilter === 'Todas' || 
      (activeFilter === 'Ativas' && sub.status === 'Ativa') ||
      (activeFilter === 'Canceladas' && sub.status === 'Cancelada');
    
    const categoryMatch = categoryFilter === 'Todas' || sub.category === categoryFilter;
    
    return statusMatch && categoryMatch;
  });

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Minhas Assinaturas</Text>
          <TouchableOpacity style={styles.addButton}>
            <Text style={styles.addButtonText}>[+]</Text>
          </TouchableOpacity>
        </View>

        {/* Filtros */}
        <View style={styles.filtersSection}>
          <Text style={styles.filtersTitle}>Filtros</Text>
          
          {/* Filtro de Status */}
          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Status:</Text>
            <View style={styles.filterOptions}>
              {['Todas', 'Ativas', 'Canceladas'].map((filter) => (
                <TouchableOpacity
                  key={filter}
                  style={[
                    styles.filterOption,
                    activeFilter === filter && styles.filterOptionActive
                  ]}
                  onPress={() => setActiveFilter(filter)}
                >
                  <Text
                    style={[
                      styles.filterOptionText,
                      activeFilter === filter && styles.filterOptionTextActive
                    ]}
                  >
                    {filter}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Filtro de Categoria */}
          <View style={styles.filterRow}>
            <Text style={styles.filterLabel}>Categoria:</Text>
            <View style={styles.filterOptions}>
              {['Todas', 'Streaming', 'Software', 'Games'].map((category) => (
                <TouchableOpacity
                  key={category}
                  style={[
                    styles.filterOption,
                    categoryFilter === category && styles.filterOptionActive
                  ]}
                  onPress={() => setCategoryFilter(category)}
                >
                  <Text
                    style={[
                      styles.filterOptionText,
                      categoryFilter === category && styles.filterOptionTextActive
                    ]}
                  >
                    {category}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Lista de Assinaturas */}
        <View style={styles.subscriptionsList}>
          {filteredSubscriptions.map((subscription) => (
            <TouchableOpacity
              key={subscription.id}
              style={styles.subscriptionCard}
              onPress={() => navigation.navigate('ListaAssinatura', { id: subscription.id })}
            >
              <View style={styles.subscriptionHeader}>
                <Text style={styles.subscriptionName}>{subscription.name}</Text>
                <Text style={styles.arrow}>→</Text>
              </View>
              <Text style={styles.subscriptionPrice}>{subscription.price}</Text>
              <Text style={styles.subscriptionDue}>{subscription.dueDate}</Text>
              <View style={styles.subscriptionFooter}>
                <Text style={[
                  styles.subscriptionStatus,
                  subscription.status === 'Ativa' && styles.statusActive,
                  subscription.status === 'Próximo' && styles.statusNext
                ]}>
                  {subscription.status}
                </Text>
                <Text style={styles.subscriptionCategory}>{subscription.category}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
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
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  addButton: {
    backgroundColor: '#007bff',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  filtersSection: {
    marginBottom: 24,
  },
  filtersTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  filterRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  filterLabel: {
    width: 80,
    fontSize: 14,
    fontWeight: 'bold',
  },
  filterOptions: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  filterOption: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#f0f0f0',
    marginRight: 8,
    marginBottom: 4,
  },
  filterOptionActive: {
    backgroundColor: '#007bff',
  },
  filterOptionText: {
    fontSize: 12,
    color: '#666',
  },
  filterOptionTextActive: {
    color: '#fff',
  },
  subscriptionsList: {
    marginBottom: 24,
  },
  subscriptionCard: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
  },
  subscriptionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  subscriptionName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  arrow: {
    fontSize: 18,
    color: '#666',
  },
  subscriptionPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  subscriptionDue: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  subscriptionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subscriptionStatus: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
    backgroundColor: '#e9ecef',
  },
  statusActive: {
    backgroundColor: '#d4edda',
    color: '#155724',
  },
  statusNext: {
    backgroundColor: '#fff3cd',
    color: '#856404',
  },
  subscriptionCategory: {
    fontSize: 12,
    color: '#666',
  },
});

export default ListaAssinatura;