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
import Cadastroinicio from './src/cadastroConfig/primeiraTela/telaInicial'
import Pesoatual from './src/cadastroConfig/pesoatualcadastro/pesoatual';
import Horarios from './src/cadastroConfig/horarios/telaHorarios';
import Meta from './src/cadastroConfig/meta/TelaMeta';
import TelaRegistro from './src/cadastroUsuario/Registrar/telaRegistrar';
import TelaLogin from './src/cadastroUsuario/Logar/telaLogin';
import Ionicons from '@expo/vector-icons/Ionicons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import GoogleFonts from './src/components/GoogleFonts';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function PilhaInicio() { //APP
  return (
    <Stack.Navigator>
      <Stack.Screen name='TelaInicio' component={Tabelas} options={{ headerShown: false }} />
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


function Tabelas() { //HomeStack
  const fonts = GoogleFonts()

  if (!fonts) {
    return null
  }

  return (
    <Tab.Navigator
      initialRouteName='Inicio'
      screenOptions={{
        tabBarStyle: { backgroundColor: '#49b4f2', borderTopColor: '#49b4f2' },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={TelaInicio}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 12, fontFamily: 'Montserrat_700Bold' },
          tabBarActiveTintColor: '#F2F2F2',
          tabBarInactiveTintColor: '#2D4F63',
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <Ionicons name='home' size={size} color={'#F2F2F2'} />
            }
            return <Ionicons name='home-outline' size={size} color={'#2D4F63'} />
          }
        }} />
      <Tab.Screen
        name="Historico"
        component={Telahistorico}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 12, fontFamily: 'Montserrat_700Bold' },
          tabBarActiveTintColor: '#F2F2F2',
          tabBarInactiveTintColor: '#2D4F63',
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <AntDesign name='clockcircle' size={size} color={'#F2F2F2'} />
            }
            return <AntDesign name='clockcircleo' size={size} color={'#2D4F63'} />
          }
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={PilhaPerfil}
        options={{
          headerShown: false,
          tabBarLabelStyle: { fontSize: 12, fontFamily: 'Montserrat_700Bold' },
          tabBarActiveTintColor: '#F2F2F2',
          tabBarInactiveTintColor: '#2D4F63',
          tabBarIcon: ({ size, focused }) => {
            if (focused) {
              return <FontAwesome name="user" size={size} color={'#F2F2F2'} />
            }
            return <FontAwesome name="user-o" size={size} color={'#2D4F63'} />
          }
        }} />
    </Tab.Navigator>

  )
}

function PilhaCadastro() {
  return (
    <Stack.Navigator initialRouteName='primeiraTela'>
      <Stack.Screen name='primeiraTela' component={Cadastroinicio} options={{ headerShown: false }} />
      <Stack.Screen name='TelaPeso' component={Pesoatual} options={{ headerTitle: "", headerTransparent: true, animation: 'slide_from_right' }} />
      <Stack.Screen name='TelaHorarios' component={Horarios} options={{ headerTitle: "", headerTransparent: true, animation: 'slide_from_right' }} />
      <Stack.Screen name='TelaMeta' component={Meta} options={{ headerTitle: "", headerTransparent: true, animation: 'slide_from_right' }} />
      <Stack.Screen name='MinhasTabelas' component={PilhaInicio} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

function PilhaConta() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TelaLogin'>
        <Stack.Screen name='TelaLogin' component={TelaLogin} options={{ headerShown: false }} />
        <Stack.Screen name='TelaCadastro' component={TelaRegistro} options={{ headerShown: false }} />
        <Stack.Screen name='TelaCadastroConfig' component={PilhaCadastro} options={{ headerShown: false }} />
        <Stack.Screen name='TelaInicial' component={PilhaInicio} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

// function App() {
//   return (
//     <View style={styles.container}>
//       <TelaRegistro />
//     </View>

//   );
// }

export default PilhaConta

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

