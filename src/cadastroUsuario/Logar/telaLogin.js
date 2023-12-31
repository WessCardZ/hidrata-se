import { Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import style from "./style";
import GoogleFonts from "../../components/GoogleFonts";
import { useNavigation } from "@react-navigation/native";
import { useCallback, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ActivityIndicator, IconButton } from "react-native-paper";

const TelaLogin = () => {
    const navigation = useNavigation();
    const tst = GoogleFonts();
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [showSenha, setShowSenha] = useState(true);
    const [icone, setIcone] = useState('eye-off')

    const fazerLogin = useCallback(async () => {
        setIsLoading(true);

        try {
            const response = await fetch('https://aguaprojeto.onrender.com/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                    senha,
                }),
            });

            if (response.status === 200) {
                const responseData = await response.json();
                const usuarioId = responseData.id;

                await AsyncStorage.setItem('userId', usuarioId.toString());

                realizarLogin();
            } else if (response.status === 404) {
                alert('Erro desconhecido. Tente novamente mais tarde.');
            } else {
                alert('Conta não encontrada. Verifique suas credenciais.');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [email, senha, realizarLogin]);

    const realizarLogin = useCallback(async () => {
        const userId = await AsyncStorage.getItem('userId');

        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuario/${userId}`);
            const json = await response.json();

            navigation.navigate(json.usuarioConfig && json.usuarioConfig.length > 0 ? 'TelaInicial' : 'TelaCadastroConfig');
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }, [navigation]);

    const mostrarSenha = () => {
        if (showSenha == false) {
            setIcone('eye-off')
        }
        else {
            setIcone('eye')
        }

        setShowSenha(!showSenha)
    }
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
                        onChangeText={setEmail}
                        value={email}
                        keyboardType="email-address"
                    />
                </View>
                <View>
                    <Text style={style.label}>Senha</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={style.input}
                            placeholder="Digite uma senha"
                            onChangeText={setSenha}
                            value={senha}
                            secureTextEntry={showSenha}
                        />
                        <View style={style.containerMostrarSenha}>
                            <IconButton style={style.mostrarSenha} icon={icone} onPress={() => mostrarSenha()} />
                        </View>
                    </View>
                </View>
            </View>

            <View style={style.containerBotao}>
                <TouchableOpacity style={style.botao} onPress={fazerLogin}>
                    {isLoading ? <ActivityIndicator size="small" /> : <Text style={style.textoBotao}>Fazer Login</Text>}
                </TouchableOpacity>

                <Pressable onPress={() => navigation.navigate('TelaCadastro')}>
                    <Text style={style.texto}>Criar conta!</Text>
                </Pressable>
            </View>
        </View>
    ) : null;
};

export default TelaLogin;