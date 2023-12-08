import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import GoogleFonts from "../../components/GoogleFonts";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator } from "react-native-paper";

export default function TelaLogin() {
    const navigation = useNavigation()
    const tst = GoogleFonts()
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    if (!tst) {
        return null
    }

    const fazerLogin = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://aguaprojeto.onrender.com/auth/login', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    senha: senha,
                })
            });

            if (response.status === 200) {
                const responseData = await response.json();
                const usuarioId = responseData.id

                await AsyncStorage.setItem('userId', usuarioId.toString())

                realizarLogin()
            } else if (response.status === 404) {
                alert("Erro desconhecido. Tente novamente mais tarde.")
                setIsLoading(false)
            } else {
                alert("Conta não encontrada. Verifique suas credenciais. ")
                setIsLoading(false)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const realizarLogin = async () => {
        const userId = await AsyncStorage.getItem('userId');
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuario/${userId}`)
            const json = await response.json()

            if (json.usuarioConfig && json.usuarioConfig.length > 0) {
                navigation.navigate('TelaInicial')
            } else {
                navigation.navigate('TelaCadastroConfig')
            }
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }
    return (
        <View style={style.container}>
            <View style={style.containerTitulo}>
                <Text style={style.titulo}>Hidrata-se</Text>
            </View>

            <View style={style.containerInput}>
                <View>
                    <Text style={style.label}>Email</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Digite seu email"
                        onChangeText={setEmail}
                        value={email}
                    />
                </View>
                <View>
                    <Text style={style.label}>Senha</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Digite uma senha"
                        onChangeText={setSenha}
                        value={senha}
                        secureTextEntry={true}
                    />
                </View>

            </View>
            <View style={style.containerBotao}>
                <TouchableOpacity style={style.botao} onPress={() => fazerLogin()}>
                    {isLoading ? (
                        <ActivityIndicator size='small' />
                    ) : (
                        <Text style={style.textoBotao}>Fazer Login</Text>
                    )}
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