import React from 'react';
import { View, StyleSheet } from 'react-native';

const ContainerBorda = ({ children, style }) => {
  return (
    <View style={[styles.container, style]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 15,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#444', // Cinza escuro para a borda
    borderRadius: 5,
  },
});

export default ContainerBorda;