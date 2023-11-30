import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import style from './style.js'
import GoogleFonts from '../../components/GoogleFonts/index.js';
import { useNavigation } from '@react-navigation/native';

function Pesoatual() {
    const navigation = useNavigation()
    const tst = GoogleFonts()

    if (!tst) {
        return null
    }
    return (
        <View style={style.container}>
            <View style={style.containerSecundario}>
                <Text style={style.titulo}>Seu peso atual</Text>

                <View style={style.containerAviso}>
                    <Text style={style.aviso}>O consumo de água varia de acordo com o peso de cada pessoa.</Text>
                </View>

                <View style={style.containerInput}>
                    <TextInput style={style.inputkg} placeholder='60' keyboardType='numeric'>60</TextInput>
                    <Text style={style.kg}>Kg</Text>
                </View>

                <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('TelaHorarios')}>
                    <Text style={style.textoBotao}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Pesoatual


