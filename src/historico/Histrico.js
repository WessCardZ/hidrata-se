import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useFonts, Montserrat_800ExtraBold } from '@expo-google-fonts/montserrat';




const Historico = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textoreg}>Registros</Text>

        <FontAwesome style={styles.icons} name='database' size={45} color="#ffffff"></FontAwesome>
        <FontAwesome style={styles.icons} name='home' size={45} color="#ffffff"></FontAwesome>
        <FontAwesome style={styles.icons} name='user' size={45} color="#ffffff"></FontAwesome>  
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#6DC1F2',
    flex: 1,
    paddingTop: 55,
    alignItems: 'center',
  },
  textoreg: {
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat_800ExtraBold',

  },
  icons: {
    flexDirection: 'column-reverse',
  }
});


export default Historico