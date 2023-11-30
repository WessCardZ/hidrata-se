import { View, Text, TextInput, TouchableOpacity } from "react-native";
import GoogleFonts from "../../components/GoogleFonts";
import style from "./style";
import { useNavigation } from "@react-navigation/native";

function Meta() {
    const navigation = useNavigation()
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
                    <View style={style.containerMeta}>
                        <Text style={style.textoMeta}>1882</Text>
                        <Text style={style.textoMl}>ML</Text>
                    </View>
                </View>

                <TouchableOpacity style={style.botao} onPress={() => navigation.navigate('MinhasTabelas')}>
                    <Text style={style.textoBotao}>Finalizar</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Meta