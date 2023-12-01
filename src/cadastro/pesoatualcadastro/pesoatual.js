import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import style from './style.js'
import GoogleFonts from '../../components/GoogleFonts/index.js';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';

function Pesoatual() {
    const navigation = useNavigation()
    const [peso, setPeso] = useState('')


    const handleTrocaInput = (text) => {
        //Remove qualquer caractere não numerico
        const numericValue = text.replace(/[^0-9]/g, '');

        //Formata o valor para exibir os dois últimos dígitos
        const formattedValue = formantandoKg(numericValue, 2)

        setPeso(formattedValue);
    }

    const formantandoKg = (value, decimalPlaces) => {
        // Calcula 10 elevado à potência de decimalPlaces e converte o valor dividindo pelo resultado de Math.pow
        const floatValue = parseFloat(value) / Math.pow(10, decimalPlaces)
        return floatValue.toFixed(decimalPlaces)
    }

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
                    <TextInput style={style.inputkg} placeholder='60.00' keyboardType='decimal-pad' maxLength={6} textAlign='left' value={peso} onChangeText={handleTrocaInput}></TextInput>
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


