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
                <Text style={style.titulo}>Sua meta diária é</Text>

                <View style={style.containerAviso}>
                    <Text style={style.aviso}>Caso você não esteja satisfeito com sua meta, é possivel modificá-la na seção perfil.</Text>
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