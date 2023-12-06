import { View, Text, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import style from './style.js'
import GoogleFonts from '../../components/GoogleFonts/index.js';
import { useNavigation, useRoute } from '@react-navigation/native';


function Cadastroinicio() {
    const tst = GoogleFonts()
    const navigation = useNavigation()

    if (!tst) {
        return null
    }
    return (
        <View style={style.container}>
            <View style={style.containerSecundario}>
                <Text style={style.titulo}>Vamos começar</Text>

                <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('TelaPeso')}>
                    <Text style={style.textoBotao}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Cadastroinicio


