import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TelaPerfil from './src/perfil/Pefil';
import Telahistorico from './src/historico/Histrico';
import Lembretes from './src/perfil/lembretes/lembretes';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import sonsevibracao from './src/perfil/Sonsevibracao/sonsevibracao';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MinhasTabelas() {
  return (
    <Tab.Navigator initialRouteName='Historico' >
      <Stack.Screen name="Historico" component={Telahistorico} options={{ headerShown: false }} />
      <Stack.Screen name="Perfil" component={PilhaPerfil} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

function PilhaPerfil() {
  return (
    <Stack.Navigator initialRouteName='Perfil' >
      <Stack.Screen name='Perfil' component={TelaPerfil} options={{ headerShown: false }} />
      <Stack.Screen name='Lembretes' component={Lembretes} options={{ title: 'Lembretes' }} />
      <Stack.Screen name='sonsevibracao' component={sonsevibracao} options={{ title: 'Sons e vibração' }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <MinhasTabelas />
    </NavigationContainer>
    // <Telahistorico />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
