import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Perfil from './src/perfil/Pefil';
import Historico from './src/historico/Histrico';

export default function App() {
  return (
    <View style={styles.container}>
      <Historico/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});
