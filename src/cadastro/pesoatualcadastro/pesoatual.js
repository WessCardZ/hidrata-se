import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import style from './style.js'
import GoogleFonts from '../../components/GoogleFonts/index.js';

function Pesoatual() {
    const tst = GoogleFonts()

    if (!tst) {
        return null
    }
    return (
        <View style={style.container}>
            <View style={style.containerSecundario}>
                <Text style={style.titulo}>Seu peso atual</Text>


                <View style={style.containerAviso}>
                    <Text style={style.tituloSecundario}>O consumo de água varia de acordo com o peso de cada pessoa.</Text>
                </View>
                
                <View style={style.Peso}>
                            <TextInput keyboardType="numeric" style={style.textoPeso}>60</TextInput>
                            <Text style={style.Kg}>Kg</Text>
                </View>

                <TouchableOpacity style={style.botao} onPress={() => console.log('Terceira tela')}>
                    <Text style={style.textoBotao}>Próximo</Text>
                </TouchableOpacity>
                </View>
        </View>
    )
}


export default Pesoatual


