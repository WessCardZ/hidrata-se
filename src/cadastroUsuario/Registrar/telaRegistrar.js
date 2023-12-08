import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import GoogleFonts from "../../components/GoogleFonts";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { ActivityIndicator } from "react-native-paper";

const TelaRegistro = () => {
    const navigation = useNavigation();
    const tst = GoogleFonts();
    const [email, setEmail] = useState('');
    const [usuario, setUsuario] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [senhaMatch, setSenhaMatch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleConfirmarSenha = useCallback((text) => {
        setConfirmarSenha(text);
        setSenhaMatch(text === senha);
    }, [senha]);

    const criarConta = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await fetch('https://aguaprojeto.onrender.com/usuario', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    email,
                    nome: usuario,
                    senha: confirmarSenha,
                }),
            });

            if (response.status === 201) {
                alert('Conta criada com sucesso! Agora faça o login');
                navigation.navigate('TelaLogin');
            } else {
                alert('Verifique se as suas credenciais estão corretas.');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [email, usuario, confirmarSenha, navigation]);

    return tst ? (
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
                        secureTextEntry
                    />
                </View>
                <View>
                    <Text style={style.label}>Confirme sua senha</Text>
                    <TextInput
                        style={[style.input, !senhaMatch && style.inputError]}
                        placeholder="Digite sua senha novamente"
                        onChangeText={handleConfirmarSenha}
                        value={confirmarSenha}
                        secureTextEntry
                    />
                </View>
            </View>

            <View style={style.containerBotao}>
                <TouchableOpacity
                    style={!senhaMatch ? style.botaoDesabilitado : style.botao}
                    disabled={!senhaMatch}
                    onPress={criarConta}>
                    {isLoading ? (
                        <ActivityIndicator size="small" />
                    ) : (
                        <Text style={style.textoBotao}>Criar conta</Text>
                    )}
                </TouchableOpacity>

                <Pressable onPress={() => navigation.navigate('TelaLogin')}>
                    <Text style={style.texto}>Tem conta? Acesse já!</Text>
                </Pressable>
            </View>
        </View>
    ) : null;
};

export default TelaRegistro;