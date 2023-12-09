import { View, Text, TouchableOpacity, } from "react-native";
import { ActivityIndicator, Button } from 'react-native-paper';
import styles from "./style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import GoogleFonts from "../components/GoogleFonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaInicio() {
    const [isLoading, setLoading] = useState(true);
    const [somaMl, setSomaMl] = useState(0);
    const [porcentagem, setPorcentagem] = useState(0);
    const [atualizarDados, setAtualizarDados] = useState();
    const [metaDiaria, setMetaDiaria] = useState();

    useFocusEffect(
        useCallback(() => {
            setAtualizarDados(new Date());
        }, [])
    );

    const fetchData = async () => {
        try {
            const userId = await AsyncStorage.getItem('userId');
            const [responseRegistroAgua, responseMeta] = await Promise.all([
                fetch(`https://aguaprojeto.onrender.com/usuario/${userId}`),
                fetch(`https://aguaprojeto.onrender.com/usuario/${userId}`)
            ]);

            const [jsonRegistroAgua, jsonMeta] = await Promise.all([
                responseRegistroAgua.json(),
                responseMeta.json()
            ]);

            const calculoMl = (jsonRegistroAgua.registroAgua || []).reduce((acc, item) => acc + item.quantidadeML, 0);

            setSomaMl(calculoMl);

            if (jsonMeta.usuarioConfig && jsonMeta.usuarioConfig.length > 0) {
                const { metaDiaria: meta } = jsonMeta.usuarioConfig[0];
                setMetaDiaria(meta);

                const calculoPorcentagem = (calculoMl * 100) / meta;
                setPorcentagem(calculoPorcentagem);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [atualizarDados]);

    const navigation = useNavigation();
    const fonts = GoogleFonts();

    return fonts ? (
        <View style={styles.container}>
            <View style={styles.containerInformacao}>
                <Text style={styles.meta}>Meta: {metaDiaria} ml</Text>
                <View style={styles.containerMl}>
                    {isLoading ? <ActivityIndicator size='large' /> : <Text style={styles.consumido}>{somaMl}</Text>}
                    <Text style={styles.ml}> ml</Text>
                </View>
                {isLoading ? <ActivityIndicator size='default' /> : <Text style={styles.porcentagem}>{porcentagem.toFixed(2)}%</Text>}
            </View>

            <View>
                <View style={styles.agua} />
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Button
                        style={styles.botao}
                        mode="contained-total"
                        buttonColor="#FFFFFF"
                        textColor="#2D4F63"
                        onPress={() => navigation.navigate('Beber')}
                    >
                        BEBER +
                    </Button>
                </TouchableOpacity>
            </View>
        </View>
    ) : null;
}