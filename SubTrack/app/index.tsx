import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5, Ionicons, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import ContainerBorda from './components/ContainerBorda'; // Certifique-se de criar este arquivo

// --- Componentes do Dashboard ---

const Cabecalho = () => (
  <View style={styles.cabecalho}>
    <Text style={styles.titulo}>1. TELA INICIAL - DASHBOARD</Text>
    <View style={styles.cabecalhoBotoes}>
      <TouchableOpacity style={styles.botaoAcao}>
        <MaterialCommunityIcons name="content-copy" size={20} color="#999" />
        <Text style={styles.botaoTexto}>Copy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.botaoAcao}>
        <AntDesign name="download" size={20} color="#999" />
        <Text style={styles.botaoTexto}>Download</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const SecaoAcoes = () => (
  <ContainerBorda>
    <View style={styles.secaoAcoes}>
      <TouchableOpacity style={styles.acaoBotao}>
        <FontAwesome5 name="search" size={16} color="#00C853" />
        <Text style={styles.acaoTexto}> [Busca]</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.acaoBotao}>
        <Ionicons name="settings" size={16} color="#00C853" />
        <Text style={styles.acaoTexto}> [Config]</Text>
      </TouchableOpacity>
    </View>
  </ContainerBorda>
);

const SecaoTotal = () => (
  <ContainerBorda>
    <View style={styles.secaoTotal}>
      <Text style={styles.textoPrincipal}>
        <FontAwesome5 name="money-bill-wave" size={18} color="#FFD700" /> **R$ 287,50**
      </Text>
      <Text style={styles.textoSub}>Total deste mês em assinaturas</Text>
      <Text style={styles.textoSub}>
        <Ionicons name="caret-up" size={16} color="#00C853" /> 12% vs último mês
      </Text>
    </View>
  </ContainerBorda>
);

const ItemCobranca = ({ nome, valor, data, plano }) => (
  <View style={styles.itemCobranca}>
    <Text style={styles.itemCobrancaPrincipal}>{nome} R$ {valor} {data}</Text>
    <Text style={styles.itemCobrancaSub}>{plano}</Text>
  </View>
);

const SecaoCobrancas = () => (
  <ContainerBorda>
    <View style={styles.secaoCobrancas}>
      <Text style={styles.tituloSecao}>
        <Ionicons name="calendar" size={16} color="#D32F2F" /> **PRÓXIMAS COBRANÇAS**
      </Text>
      <ItemCobranca nome="Netflix" valor="39,90" data="15/12" plano="Plano Premium 4 telas" />
      <ItemCobranca nome="Spotify" valor="19,90" data="20/12" plano="Plano Individual" />
    </View>
  </ContainerBorda>
);

const BarraProgresso = ({ porcentagem }) => (
  <View style={styles.barraFundo}>
    <View style={[styles.barraPreenchimento, { width: `${porcentagem}%` }]} />
  </View>
);

const ItemDistribuicao = ({ categoria, porcentagem, corIcone }) => (
  <View style={styles.itemDistribuicao}>
    <Text style={styles.itemDistribuicaoTexto}>
      [<MaterialCommunityIcons name="circle" size={10} color={corIcone} />] {categoria} **{porcentagem}%**
    </Text>
    <BarraProgresso porcentagem={porcentagem} />
  </View>
);

const SecaoDistribuicao = () => (
  <ContainerBorda>
    <Text style={styles.tituloSecao}>
      <MaterialCommunityIcons name="chart-pie" size={16} color="#1E88E5" /> **DISTRIBUIÇÃO**
    </Text>
    <ItemDistribuicao categoria="Streaming" porcentagem={45} corIcone="#FF5722" />
    <ItemDistribuicao categoria="Software" porcentagem={35} corIcone="#4CAF50" />
    <ItemDistribuicao categoria="Games" porcentagem={20} corIcone="#9C27B0" />
  </ContainerBorda>
);

// --- Tela Principal ---

export const DashboardScreen = () => {
  return (
    <SafeAreaView style={styles.areaSegura}>
      <ScrollView style={styles.scroll}>
        <Cabecalho />
        <View style={styles.conteudo}>
          <SecaoAcoes />
          <SecaoTotal />
          <SecaoCobrancas />
          <SecaoDistribuicao />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---

const styles = StyleSheet.create({
  areaSegura: {
    flex: 1,
    backgroundColor: '#1E1E1E', // Fundo escuro
  },
  scroll: {
    paddingHorizontal: 15,
  },
  conteudo: {
    flex: 1,
    paddingBottom: 20,
  },
  cabecalho: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  titulo: {
    color: '#E0E0E0',
    fontSize: 16,
    fontWeight: 'bold',
  },
  cabecalhoBotoes: {
    flexDirection: 'row',
  },
  botaoAcao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 15,
  },
  botaoTexto: {
    color: '#999',
    marginLeft: 5,
  },
  // SecaoAcoes
  secaoAcoes: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  acaoBotao: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  acaoTexto: {
    color: '#00C853',
    marginLeft: 5,
    fontWeight: 'bold',
  },
  // SecaoTotal
  secaoTotal: {
    paddingVertical: 5,
  },
  textoPrincipal: {
    color: '#FFD700',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  textoSub: {
    color: '#A0A0A0',
    fontSize: 14,
    marginLeft: 5,
  },
  // SecaoCobrancas
  tituloSecao: {
    color: '#E0E0E0',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  itemCobranca: {
    paddingVertical: 8,
    borderTopWidth: 1,
    borderTopColor: '#333',
  },
  itemCobrancaPrincipal: {
    color: '#E0E0E0',
    fontSize: 16,
    fontWeight: '600',
  },
  itemCobrancaSub: {
    color: '#A0A0A0',
    fontSize: 14,
  },
  // SecaoDistribuicao
  itemDistribuicao: {
    marginBottom: 10,
  },
  itemDistribuicaoTexto: {
    color: '#E0E0E0',
    marginBottom: 5,
    fontWeight: '600',
  },
  barraFundo: {
    height: 8,
    backgroundColor: '#333',
    borderRadius: 4,
    overflow: 'hidden',
  },
  barraPreenchimento: {
    height: '100%',
    backgroundColor: '#1E88E5', // Cor azul para a barra
  },
});