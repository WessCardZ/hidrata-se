import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Perfil from './src/perfil/Pefil';
import Telahistorico from './src/historico/Histrico';
import Lembretes from './src/perfil/lembretes/lembretes';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import sonsevibracao from './src/perfil/Sonsevibracao/sonsevibracao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Perfil' >
        <Stack.Screen name='Perfil' component={Perfil} options={{ headerShown: false }} />
        <Stack.Screen name='Lembretes' component={Lembretes} options={{ title: 'Lembretes' }} />
        <Stack.Screen name='sonsevibracao' component={sonsevibracao} options={{ title: 'Sons e vibração' }} />
      </Stack.Navigator>
    </NavigationContainer>
    // <Telahistorico />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
