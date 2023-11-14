import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TelaPerfil from './src/perfil/Pefil';
import Telahistorico from './src/historico/Histrico';
import TelaLembretes from './src/perfil/lembretes/lembretes';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaSonsevibracao from './src/perfil/Sonsevibracao/sonsevibracao';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicio from './src/inicio/Inicio';
import TelaBeber from './src/inicio/beber+/beber';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MinhasTabelas() {
  return (
    <Tab.Navigator initialRouteName='Inicio' screenOptions={{ tabBarStyle: { backgroundColor: '#49b4f2', borderTopColor: '#49b4f2' } }} >
      <Tab.Screen name="Inicio" component={PilhaInicio} options={{ headerShown: false }} />
      <Tab.Screen name="Historico" component={Telahistorico} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={PilhaPerfil} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function PilhaPerfil() {
  return (
    <Stack.Navigator initialRouteName='TelaPerfil' >
      <Stack.Screen name='TelaPerfil' component={TelaPerfil} options={{ headerShown: false }} />
      <Stack.Screen name='Lembretes' component={TelaLembretes} options={{ title: 'Lembretes' }} />
      <Stack.Screen name='sonsevibracao' component={TelaSonsevibracao} options={{ title: 'Sons e vibração' }} />
    </Stack.Navigator> 
  )
}

function PilhaInicio() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='TelaInicio' component={TelaInicio} options={{ headerShown: false }} />
      <Stack.Screen name='Beber' component={TelaBeber} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MinhasTabelas />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
