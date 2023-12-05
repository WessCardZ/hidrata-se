import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import GoogleFonts from "../../components/GoogleFonts";
import { useNavigation } from "@react-navigation/native";

export default function TelaLogin() {
    const navigation = useNavigation()
    const tst = GoogleFonts()

    if (!tst) {
        return null
    }

    return (
        <View style={style.container}>
            <View style={style.containerTitulo}>
                <Text style={style.titulo}>Hidrata-se</Text>
            </View>

            <View style={style.containerInput}>
                <View>
                    <Text style={style.label}>Email</Text>
                    <TextInput style={style.input} placeholder="Digite seu email" />
                </View>
                <View>
                    <Text style={style.label}>Senha</Text>
                    <TextInput style={style.input} placeholder="Digite uma senha" />
                </View>

            </View>
            <View style={style.containerBotao}>
                <TouchableOpacity style={style.botao} >
                    <Text style={style.textoBotao}>Próximo</Text>
                </TouchableOpacity>

                <Pressable>
                    <Text style={style.texto}>Esqueceu a senha?</Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate('TelaCadastro')}>
                    <Text style={style.texto}>Criar conta!</Text>
                </Pressable>
            </View>
        </View>
    )
}