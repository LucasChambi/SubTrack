import { RouteProp } from '@react-navigation/native';
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

type ParamList = {
  Details: { id: string };
};

const Details = ({ route }: { route: RouteProp<ParamList, 'Details'> }) => {
  const { id } = route.params;

  // Dados mockados baseados no ID
  type SubscriptionKey = 'netflix' | 'spotify' | 'adobe';
  type SubscriptionData = {
    name: string;
    description: string;
    price: string;
    period: string;
    nextCharge: string;
    daysLeft: string;
    category: string;
    card: string;
    reminders: string;
    plan: string;
  };
  const subscriptionData: Record<SubscriptionKey, SubscriptionData> = {
    netflix: {
      name: 'Netflix',
      description: 'Streaming + Ativa',
      price: 'R$ 39,90',
      period: 'per mês',
      nextCharge: '13 de Dezembro de 2024',
      daysLeft: '12 dias',
      category: 'Streaming',
      card: 'Cartão final 4512',
      reminders: 'Lembretes ativos',
      plan: 'Plano Premium 4 telas',
    },
    spotify: {
      name: 'Spotify',
      description: 'Música + Ativa',
      price: 'R$ 19,90',
      period: 'per mês',
      nextCharge: '20 de Dezembro de 2024',
      daysLeft: '19 dias',
      category: 'Música',
      card: 'Cartão final 4512',
      reminders: 'Lembretes ativos',
      plan: 'Plano Individual',
    },
    adobe: {
      name: 'Adobe Creative',
      description: 'Software + Ativa',
      price: 'R$ 119,00',
      period: 'per mês',
      nextCharge: '5 de Janeiro de 2025',
      daysLeft: '35 dias',
      category: 'Software',
      card: 'Cartão final 4512',
      reminders: 'Lembretes ativos',
      plan: 'Plano Completo',
    },
  };

  const data = subscriptionData[id as SubscriptionKey] || subscriptionData.netflix;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.serviceName}>{data.name}</Text>
          <TouchableOpacity style={styles.menuButton}>
            <Text>[Menu]</Text>
          </TouchableOpacity>
        </View>

        {/* Informações Principais */}
        <View style={styles.infoSection}>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Descrição:</Text>
            <Text style={styles.infoValue}>{data.description}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Preço:</Text>
            <Text style={styles.infoValue}>{data.price}</Text>
          </View>
          
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Período:</Text>
            <Text style={styles.infoValue}>{data.period}</Text>
          </View>
        </View>

        {/* Próxima Cobrança */}
        <View style={styles.chargeSection}>
          <Text style={styles.sectionTitle}>Próxima cobrança</Text>
          <Text style={styles.chargeDate}>{data.nextCharge}</Text>
          <Text style={styles.daysLeft}>(em {data.daysLeft})</Text>
        </View>

        {/* Configurações */}
        <View style={styles.settingsSection}>
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Categorizar</Text>
            <Text style={styles.settingValue}>{data.category}</Text>
          </View>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Método de Pagamento</Text>
            <Text style={styles.settingValue}>{data.card}</Text>
          </View>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Lembretes</Text>
            <Text style={styles.settingValue}>{data.reminders}</Text>
          </View>
          
          <View style={styles.settingItem}>
            <Text style={styles.settingLabel}>Notas</Text>
            <Text style={styles.settingValue}>Adicionar nota...</Text>
          </View>
        </View>

        {/* Plano Atual */}
        <View style={styles.planSection}>
          <View style={styles.planHeader}>
            <Text style={styles.planName}>{data.plan}</Text>
            <TouchableOpacity style={styles.editButton}>
              <Text style={styles.editButtonText}>EDITAR</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Botões de Ação */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.cancelButton}>
            <Text style={styles.cancelButtonText}>CANCELAR</Text>
          </TouchableOpacity>
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
  serviceName: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  infoSection: {
    marginBottom: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  chargeSection: {
    backgroundColor: '#f8f9fa',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  chargeDate: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  daysLeft: {
    fontSize: 14,
    color: '#666',
  },
  settingsSection: {
    marginBottom: 24,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e9ecef',
  },
  settingLabel: {
    fontSize: 16,
    color: '#666',
  },
  settingValue: {
    fontSize: 16,
    color: '#333',
  },
  planSection: {
    marginBottom: 24,
  },
  planHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  planName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  editButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#007bff',
    borderRadius: 6,
  },
  editButtonText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  },
  actionButtons: {
    marginBottom: 24,
  },
  cancelButton: {
    padding: 16,
    backgroundColor: '#dc3545',
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Details;