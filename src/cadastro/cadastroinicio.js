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
<<<<<<< HEAD
        <View style={style.container}>
            <Text style={style.texto}> Vamos começar </Text>

        <View style={style.continainer2}>
        <TouchableOpacity style={style.Button}><Text style={style.buttontexto}>Proximo</Text></TouchableOpacity>
        </View>
        </View>
=======
   <View style={style.container}>
    <View style={style.containerSecundario}>
    <Text style={style.titulo}>Vamos começar</Text>

    <TouchableOpacity style={style.botao} onPress={() => console.log('Segunda tela')}>
       <Text style={style.textoBotao}>Próximo</Text> 
    </TouchableOpacity>
    </View>
   </View>
>>>>>>> f771e9c686edcfca386900fc9b0afc5b96c9b480

    )
  }


  export default Cadastroinicio


