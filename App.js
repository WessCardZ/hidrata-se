import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Perfil from './src/perfil/Pefil';
import Historico from './src/historico/Histrico';
import Lembretes from './src/lembretes/lembretes';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import sonsevibracao from './src/sonsevibracao/sonsevibracao';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Perfil' >
        <Stack.Screen name='Perfil' component={Perfil} options={{ headerShown: false }} />
        <Stack.Screen name='Lembretes' component={Lembretes} options={{ title: 'Lembretes' }} />
        <Stack.Screen name='sonsevibracao' component={sonsevibracao} options={{ title: 'Lembretes' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
