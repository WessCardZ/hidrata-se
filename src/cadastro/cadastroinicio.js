import { View, Text, TouchableOpacity} from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import style from './style.js'
import GoogleFonts from '../components/GoogleFonts/index.js';


function Cadastroinicio(){
    const tst = GoogleFonts()

    if(!tst){
        return null
    }
    return (
   <View style={style.container}>
    <View style={style.containerSecundario}>
    <Text style={style.titulo}>Vamos começar</Text>

    <TouchableOpacity style={style.botao} onPress={() => console.log('Segunda tela')}>
       <Text style={style.textoBotao}>Próximo</Text> 
    </TouchableOpacity>
    </View>
   </View>

    )
  }


  export default Cadastroinicio


