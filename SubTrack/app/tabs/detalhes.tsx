import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, AntDesign, FontAwesome5, Ionicons } from '@expo/vector-icons';
import ContainerBorda from './ContainerBorda';

// --- Componentes de Detalhes ---

const CabecalhoDetalhes = () => (
  <View style={styles.cabecalhoDetalhes}>
    <TouchableOpacity style={styles.botaoVoltar}>
      <AntDesign name="arrowleft" size={24} color="#E0E0E0" />
    </TouchableOpacity>
    <Text style={styles.nomeServico}>Netflix</Text>
    <TouchableOpacity>
      <Text style={styles.botaoMenu}>: [Menu]</Text>
    </TouchableOpacity>
  </View>
);

const SecaoDetalhes = () => (
  <ContainerBorda style={styles.containerDetalhes}>
    <View style={styles.detalhePrincipal}>
      <Text style={styles.iconeGrande}>
        <FontAwesome5 name="tv" size={40} color="#D32F2F" />
      </Text>
      <Text style={styles.nomeGrande}>**Netflix**</Text>
      <Text style={styles.status}>Streaming • Ativa</Text>
    </View>

    <View style={styles.secaoValor}>
      <Text style={styles.valor}>**R$ 39,90**</Text>
      <Text style={styles.porMes}>por mês</Text>
    </View>

    <View style={styles.secaoInfo}>
      <Text style={styles.tituloInfo}>
        <Ionicons name="calendar" size={16} color="#D32F2F" /> **Próxima cobrança**
      </Text>
      <Text style={styles.textoInfo}>15 de Dezembro de 2024</Text>
      <Text style={styles.textoInfo}>(em 12 dias)</Text>
    </View>

    <View style={styles.secaoInfo}>
      <Text style={styles.tituloInfo}>**Categoria** Streaming</Text>
      <Text style={styles.tituloInfo}>
        <FontAwesome5 name="credit-card" size={14} color="#FFD700" /> **Cartão Final 4512**
      </Text>
      <Text style={styles.tituloInfo}>
        <AntDesign name="warning" size={14} color="#FFC107" /> **Lembretes ativos**
      </Text>
    </View>

    <View style={styles.secaoNotas}>
      <Text style={styles.tituloInfo}>**Notas**</Text>
      <Text style={styles.textoInfo}>Plano Premium 4 telas</Text>
    </View>

    <View style={styles.botoesAcao}>
      <TouchableOpacity style={styles.botaoEditar}>
        <Text style={styles.textoBotaoAcao}>[EDITAR]</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoCancelar}>
        <Text style={styles.textoBotaoAcao}>[CANCELAR]</Text>
      </TouchableOpacity>
    </View>
  </ContainerBorda>
);

// --- Tela Principal ---

export const DetalhesScreen = () => {
  return (
    <SafeAreaView style={styles.areaSegura}>
      <ScrollView style={styles.scroll}>
        <CabecalhoDetalhes />
        <Text style={styles.tituloTela}>3. TELA DE DETALHES</Text>
        <SecaoDetalhes />
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---

const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  scroll: {
    paddingHorizontal: 15,
  },
  tituloTela: {
    color: '#E0E0E0',
    fontSize: 16,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  cabecalhoDetalhes: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
  },
  botaoVoltar: {
    marginRight: 15,
  },
  nomeServico: {
    color: '#E0E0E0',
    fontSize: 20,
    fontWeight: 'bold',
    flex: 1, // Para empurrar o menu para a direita
  },
  botaoMenu: {
    color: '#00C853',
    fontWeight: 'bold',
  },
  containerDetalhes: {
    marginTop: 0,
  },
  // Detalhe Principal
  detalhePrincipal: {
    alignItems: 'center',
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  iconeGrande: {
    marginBottom: 10,
  },
  nomeGrande: {
    color: '#E0E0E0',
    fontSize: 24,
    fontWeight: 'bold',
  },
  status: {
    color: '#A0A0A0',
    fontSize: 16,
  },
  // Seção Valor
  secaoValor: {
    alignItems: 'center',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  valor: {
    color: '#FFD700',
    fontSize: 32,
    fontWeight: 'bold',
  },
  porMes: {
    color: '#A0A0A0',
    fontSize: 16,
  },
  // Seção Info
  secaoInfo: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  tituloInfo: {
    color: '#E0E0E0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 3,
  },
  textoInfo: {
    color: '#A0A0A0',
    fontSize: 14,
    marginLeft: 5,
  },
  // Seção Notas
  secaoNotas: {
    paddingVertical: 10,
  },
  // Botoes Acao
  botoesAcao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 20,
  },
  botaoEditar: {
    padding: 10,
    // Em produção, isso seria um botão mais claro
  },
  botaoCancelar: {
    padding: 10,
    // Em produção, isso seria um botão de alerta (vermelho)
  },
  textoBotaoAcao: {
    color: '#00C853',
    fontSize: 16,
    fontWeight: 'bold',
  },
});