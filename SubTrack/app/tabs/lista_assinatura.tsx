import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
import ContainerBorda from './ContainerBorda';

// --- Componentes da Lista ---

const CabecalhoLista = () => (
  <View style={styles.cabecalho}>
    <Text style={styles.titulo}>2. TELA DE LISTA DE ASSINATURAS</Text>
    {/* Botões Copy/Download aqui, se necessário */}
  </View>
);

const Filtros = () => (
  <ContainerBorda>
    <View>
      <View style={styles.minhasAssinaturas}>
        <Text style={styles.textoFiltroPrincipal}>Minhas Assinaturas</Text>
        <TouchableOpacity>
          <Text style={styles.textoFiltroPrincipal}>[+]</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.textoFiltro}>Filtros</Text>
      <View style={styles.opcoesFiltro}>
        <Text style={styles.textoFiltroOpcao}>Todas </Text>
        <Text style={styles.textoFiltroOpcaoAtiva}>Ativas <MaterialCommunityIcons name="circle-slice-8" size={10} color="#00C853" /></Text>
        <Text style={styles.textoFiltroOpcao}> Canceladas </Text>
      </View>
      <View style={styles.opcoesFiltro}>
        <Text style={styles.textoFiltroOpcao}>
          <MaterialCommunityIcons name="television-play" size={14} color="#FF5722" /> Streaming
        </Text>
        <Text style={styles.textoFiltroOpcao}>
          <MaterialCommunityIcons name="monitor-dashboard" size={14} color="#4CAF50" /> Software
        </Text>
        <Text style={styles.textoFiltroOpcao}>
          <MaterialCommunityIcons name="gamepad-variant" size={14} color="#9C27B0" /> Games
        </Text>
      </View>
    </View>
  </ContainerBorda>
);

const AssinaturaItem = ({ nome, valor, status, categoria, icone, corIcone, detalhes }) => (
  <ContainerBorda>
    <View style={styles.assinaturaItem}>
      <Text style={styles.assinaturaNome}>
        <FontAwesome5 name={icone} size={18} color={corIcone} /> {nome}
      </Text>
      <Text style={styles.assinaturaDetalhes}>R$ {valor}/mês • {detalhes}</Text>
      <Text style={styles.assinaturaStatus}>
        {status === 'Ativa' ? (
          <AntDesign name="star" size={14} color="#FFD700" />
        ) : (
          <AntDesign name="exclamationcircle" size={14} color="#FFC107" />
        )}
        <Text style={styles.assinaturaStatusTexto}> {status} • {categoria}</Text>
      </Text>
    </View>
  </ContainerBorda>
);

// --- Tela Principal ---

export const ListaAssinaturaScreen = () => {
  return (
    <SafeAreaView style={styles.areaSegura}>
      <ScrollView style={styles.scroll}>
        <CabecalhoLista />
        <Filtros />
        <AssinaturaItem
          nome="NETFLIX"
          valor="39,90"
          status="Ativa"
          categoria="Streaming"
          icone="tv"
          corIcone="#D32F2F"
          detalhes="Vence dia 15"
        />
        <AssinaturaItem
          nome="SPOTIFY"
          valor="19,90"
          status="Próximo"
          categoria="Música"
          icone="music"
          corIcone="#1DB954"
          detalhes="Vence em 3 dias"
        />
        <AssinaturaItem
          nome="ADOBE CREATIVE"
          valor="110,90"
          status="Ativa"
          categoria="Software"
          icone="palette"
          corIcone="#FF0000"
          detalhes="Vence dia 5"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---

const styles = StyleSheet.create({
  // Estilos da área segura, scroll e cabeçalho são os mesmos do DashboardScreen
  areaSegura: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
  scroll: {
    paddingHorizontal: 15,
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
  // Filtros
  minhasAssinaturas: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  textoFiltroPrincipal: {
    color: '#E0E0E0',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textoFiltro: {
    color: '#A0A0A0',
    fontSize: 14,
    marginBottom: 8,
  },
  opcoesFiltro: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  textoFiltroOpcao: {
    color: '#A0A0A0',
    marginRight: 15,
    fontSize: 14,
  },
  textoFiltroOpcaoAtiva: {
    color: '#00C853',
    marginRight: 15,
    fontSize: 14,
    fontWeight: 'bold',
  },
  // Assinatura Item
  assinaturaItem: {
    paddingVertical: 5,
  },
  assinaturaNome: {
    color: '#E0E0E0',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  assinaturaDetalhes: {
    color: '#A0A0A0',
    fontSize: 14,
    marginBottom: 5,
  },
  assinaturaStatus: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  assinaturaStatusTexto: {
    color: '#A0A0A0',
    fontSize: 14,
    marginLeft: 5,
  },
});