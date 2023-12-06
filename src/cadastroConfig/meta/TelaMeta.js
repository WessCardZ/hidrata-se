import { View, Text, TextInput, TouchableOpacity } from "react-native";
import GoogleFonts from "../../components/GoogleFonts";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function Meta() {
    const getMetaDiaria = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuario/${userId}`)
            const json = await response.json();

            if (json.usuarioConfig && json.usuarioConfig.length > 0) {
                // Se `usuarioConfig` é uma matriz, acessamos o primeiro elemento aqui
                const primeiroUsuarioConfig = json.usuarioConfig[0];

                // Agora, podemos acessar `metaDiaria` do primeiro elemento
                const metaD = primeiroUsuarioConfig.metaDiaria;

                setMeta(metaD)
            } else {
                console.log('usuarioConfig não está definido ou vazio');
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getMetaDiaria()
    }, [])

    const [meta, setMeta] = useState(0)
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
                        <Text style={style.textoMeta}>{meta}</Text>
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