import { View, Text, StyleSheet} from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import style from './style1';


const Historico = () => {
  return (
    <View style={style.container}>
      <Text style={style.textoregistro}>Registros</Text>

      <View style={style.containermeio}/>
      <View style={style.historico}>
                <Lista
                    ml='250 ML'
                    hora='19:35'
                />
                 <Lista
                    ml='350 ML'
                    hora='21:35'
                />
                 <Lista
                    ml='500 ML'
                    hora='07:38'
                />
                 <Lista
                    ml='100 ML'
                    hora='8:35'
                />
                 <Lista
                    ml='425 ML'
                    hora='11:35'
                />
                 <Lista
                    ml='265 ML'
                    hora='12:30'
                />
                
            </View>


    </View>
  );
}

const Lista = ({ ml , hora }) => {
  return (
      <View style={style.listahistorico}>
          <View style={{paddingRight: 16 }}>
          </View>
          <View style={style.listatexto}>
              <Text style={style.ml}>{ml}</Text>
              <Text style={style.hora}>{hora}</Text>
          </View>
      </View>



  );
}


export default Historico


