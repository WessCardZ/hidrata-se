import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import style from './style.js';
import GoogleFonts from '../../components/GoogleFonts/index.js';

function Horarios() {
    const tst = GoogleFonts()

    if (!tst) {
        return null
    }
    return (
        <View style={style.container}>
            <View style={style.containerSecundario}>
                <Text style={style.titulo}>Qual horário você dorme e acorda?</Text>

                <View style={style.containerAviso}>
                    <Text style={style.aviso}>A pergunta visa evitar notificações durante o sono para não atrapalhar o descanso.</Text>
                </View>

                <View>
                    <View style={style.containerInformacao}>
                        <Text style={style.textoInformacao}>Acordar</Text>
                        <Text style={style.textoInformacao}>Dormir</Text>
                    </View>
                    <View style={style.containerHorarios}>
                        <View style={style.containerInputs}>
                            <TextInput style={style.inputHorario} placeholder='60' keyboardType='numeric'>06:00</TextInput>
                        </View>
                        <View style={style.containerInputs}>
                            <TextInput style={style.inputHorario} placeholder='60' keyboardType='numeric'>12:00</TextInput>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={style.botao}>
                    <Text style={style.textoBotao}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Horarios


