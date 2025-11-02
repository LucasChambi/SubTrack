import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Dashboard from './tabs/Dashboard';
import Details from './tabs/Details';
import ListaAssinatura from './tabs/ListaAssinatura';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Dashboard"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f8f9fa',
          },
          headerTintColor: '#333',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Dashboard" 
          component={Dashboard}
          options={{ title: 'TELA INICIAL - DASHBOARD' }}
        />
        <Stack.Screen 
          name="ListaAssinatura" 
          component={ListaAssinatura}
          options={{ title: 'LISTA DE ASSINATURAS' }}
        />
        <Stack.Screen 
          name="Details" 
          component={Details}
          options={{ title: 'DETALHES DA ASSINATURA' }}
        />
      </Stack.Navigator>  
    </NavigationContainer>
  );
}