import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import style from './style.js'
import GoogleFonts from '../../components/GoogleFonts/index.js';
import { useNavigation } from '@react-navigation/native';
import { useCallback, useState } from 'react';

function Pesoatual() {
    const navigation = useNavigation();
    const [peso, setPeso] = useState('');

    const handleTrocaInput = useCallback((text) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        const formattedValue = formatandoKg(numericValue, 2);
        setPeso(formattedValue);
    }, []);

    const formatandoKg = (value, decimalPlaces) => {
        const floatValue = parseFloat(value) / Math.pow(10, decimalPlaces);
        return floatValue.toFixed(decimalPlaces);
    };

    const handleNavigation = useCallback(() => {
        const pesoNumero = parseFloat(peso);

        if (!isNaN(pesoNumero)) {
            navigation.navigate('TelaHorarios', { peso: pesoNumero });
        } else {
            console.error('Peso inválido');
        }
    }, [navigation, peso]);

    const tst = GoogleFonts();

    return tst ? (
        <View style={style.container}>
            <View style={style.containerSecundario}>
                <Text style={style.titulo}>Seu peso atual</Text>

                <View style={style.containerAviso}>
                    <Text style={style.aviso}>O consumo de água varia de acordo com o peso de cada pessoa.</Text>
                </View>

                <View style={style.containerInput}>
                    <TextInput
                        style={style.inputkg}
                        placeholder='60.00'
                        keyboardType='decimal-pad'
                        maxLength={6}
                        textAlign='left'
                        value={peso}
                        onChangeText={handleTrocaInput}
                    />
                    <Text style={style.kg}>Kg</Text>
                </View>

                <TouchableOpacity style={style.botao} onPress={handleNavigation}>
                    <Text style={style.textoBotao}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    ) : null;
}

export default Pesoatual;


