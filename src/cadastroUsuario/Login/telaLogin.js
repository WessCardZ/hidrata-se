import { Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import GoogleFonts from "../../components/GoogleFonts";

export default function TelaLogin() {
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
                    <Text style={style.label}>Usuário</Text>
                    <TextInput style={style.input} placeholder="Digite um usuário" />
                </View>
                <View>
                    <Text style={style.label}>Senha</Text>
                    <TextInput style={style.input} placeholder="Digite uma senha" />
                </View>
                <View>
                    <Text style={style.label}>Confirme sua senha</Text>
                    <TextInput style={style.input} placeholder="Digite sua senha novamente" />
                </View>

            </View>
            <View style={style.containerBotao}>
                <TouchableOpacity style={style.botao} >
                    <Text style={style.textoBotao}>Próximo</Text>
                </TouchableOpacity>
                <Text style={style.texto}>Tem conta? Acesse já!</Text>
            </View>
        </View>
    )
}