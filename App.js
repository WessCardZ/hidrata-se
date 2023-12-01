import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TelaPerfil from './src/perfil/Pefil';
import Telahistorico from './src/historico/Histrico';
import TelaLembretes from './src/perfil/lembretes/lembretes';
import { NavigationContainer } from "@react-navigation/native";
import { NativeStackView, createNativeStackNavigator } from '@react-navigation/native-stack';
import TelaSonsevibracao from './src/perfil/Sonsevibracao/sonsevibracao';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TelaInicio from './src/inicio/Inicio';
import TelaBeber from './src/inicio/beber+/beber';
import Cadastroinicio from './src/cadastro/primeiraTela/telaInicial'
import Pesoatual from './src/cadastro/pesoatualcadastro/pesoatual';
import Horarios from './src/cadastro/horarios/telaHorarios';
import Meta from './src/cadastro/meta/TelaMeta';
import { IconButton } from 'react-native-paper';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MinhasTabelas() { //APP
  return (
    <Stack.Navigator>
      <Stack.Screen name='TelaInicio' component={PilhaInicio} options={{ headerShown: false }} />
      <Stack.Screen name='Beber' component={TelaBeber} />
    </Stack.Navigator>

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


function PilhaInicio() { //HomeStack
  return (
    <Tab.Navigator initialRouteName='Inicio' screenOptions={{ tabBarStyle: { backgroundColor: '#49b4f2', borderTopColor: '#49b4f2' } }} >
      <Tab.Screen name="Inicio" component={TelaInicio} options={{ headerShown: false }} />
      <Tab.Screen name="Historico" component={Telahistorico} options={{ headerShown: false }} />
      <Tab.Screen name="Perfil" component={PilhaPerfil} options={{ headerShown: false }} />
    </Tab.Navigator>

  )
}
// export default MinhasTabelas

function PilhaCadastro() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='primeiraTela'>
        <Stack.Screen name='primeiraTela' component={Cadastroinicio} options={{ headerShown: false }} />
        <Stack.Screen name='TelaPeso' component={Pesoatual} options={{ headerTitle: "", headerTransparent: true, animation: 'slide_from_right' }} />
        <Stack.Screen name='TelaHorarios' component={Horarios} options={{ headerTitle: "", headerTransparent: true, animation: 'slide_from_right' }} />
        <Stack.Screen name='TelaMeta' component={Meta} options={{ headerTitle: "", headerTransparent: true, animation: 'slide_from_right' }} />
        <Stack.Screen name='MinhasTabelas' component={MinhasTabelas} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

function App() {
  return (
    <View style={styles.container}>
      <PilhaCadastro />
    </View>

  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

