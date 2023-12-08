import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import GoogleFonts from "../../components/GoogleFonts";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { ActivityIndicator } from "react-native-paper";

export default function TelaRegistro() {
    const navigation = useNavigation()
    const tst = GoogleFonts()
    const [email, setEmail] = useState('')
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')
    const [confirmarSenha, setConfirmarSenha] = useState('')
    const [senhaMatch, setSenhaMatch] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    if (!tst) {
        return null
    }

    const handleConfirmarSenha = (text) => {
        setConfirmarSenha(text)
        setSenhaMatch(text === senha)
    }


    const criarConta = async () => {
        setIsLoading(true)
        try {
            const response = await fetch('https://aguaprojeto.onrender.com/usuario', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    email: email,
                    nome: usuario,
                    senha: confirmarSenha
                }),
            })

            if (response.status === 201) {
                alert('Conta criada com sucesso! Agora faça o login')
                navigation.navigate('TelaLogin')
                setIsLoading(false)
            } else {
                alert('Verifique se as suas credenciais estão corretas.')
                setIsLoading(false)
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
                        onChangeText={(text) => setEmail(text)}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                <View>
                    <Text style={style.label}>Usuário</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Digite um usuário"
                        onChangeText={(text) => setUsuario(text)}
                        value={usuario}
                    />
                </View>
                <View>
                    <Text style={style.label}>Senha</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Digite uma senha"
                        onChangeText={(text) => setSenha(text)}
                        value={senha}
                        secureTextEntry={true}
                    />
                </View>
                <View>
                    <Text style={style.label}>Confirme sua senha</Text>
                    <TextInput
                        style={[style.input, !senhaMatch && style.inputError]}
                        placeholder="Digite sua senha novamente"
                        onChangeText={handleConfirmarSenha}
                        value={confirmarSenha}
                        secureTextEntry={true}
                    />
                </View>

            </View>
            <View style={style.containerBotao}>
                <TouchableOpacity style={[!senhaMatch ? style.botaoDesabilitado : style.botao]} disabled={!senhaMatch} onPress={() => criarConta()}>
                    {isLoading ? (
                        <ActivityIndicator size={'small'} />
                    ) : (
                        <Text style={style.textoBotao}>Criar conta</Text>
                    )}
                </TouchableOpacity>

                <Pressable onPress={() => navigation.navigate('TelaLogin')}>
                    <Text style={style.texto}>Tem conta? Acesse já!</Text>
                </Pressable>
            </View>
        </View>
    )
}