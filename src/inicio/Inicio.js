import { View, Text, Pressable, TouchableOpacity, } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { ActivityIndicator, Button } from 'react-native-paper';
import styles from "./style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import GoogleFonts from "../components/GoogleFonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function TelaInicio() {
    const [isLoading, setLoading] = useState(true)
    const [somaMl, setSomaMl] = useState(0)
    const [porcentagem, setPorcentagem] = useState(0)
    const [atualizarDados, setAtualizarDados] = useState()
    const [metaDiaria, setMetaDiaria] = useState()

    useFocusEffect(
        React.useCallback(() => {
            setAtualizarDados(new Date());
            console.log('tela inicial')
        }, [])
    )

    const contaMl = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const responseRegistroAgua = await fetch(`https://aguaprojeto.onrender.com/usuario/${userId}`)
            const jsonRegistroAgua = await responseRegistroAgua.json()

            let calculoMl = 0
            if (jsonRegistroAgua.registroAgua && jsonRegistroAgua.registroAgua.length > 0) {

                for (let i = 0; i < jsonRegistroAgua.registroAgua.length; i++) {
                    calculoMl += jsonRegistroAgua.registroAgua[i].quantidadeML
                }
                setSomaMl(calculoMl)
            }

            const responseMeta = await fetch(`https://aguaprojeto.onrender.com/usuario/${userId}`)
            const jsonMeta = await responseMeta.json()

            if (jsonMeta.usuarioConfig && jsonMeta.usuarioConfig.length > 0) {
                const usuarioConfigApi = jsonMeta.usuarioConfig[0]

                const meta = usuarioConfigApi.metaDiaria;
                setMetaDiaria(meta)

                let calculoPorcentagem = (calculoMl * 100) / meta
                setPorcentagem(calculoPorcentagem)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        contaMl();
    }, [atualizarDados]);


    const navigation = useNavigation();

    const fonts = GoogleFonts()

    if (!fonts) {
        return null
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInformacao}>
                <Text style={styles.meta}>Meta: {metaDiaria} ml</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    {isLoading ? (
                        <ActivityIndicator size='large' />
                    ) : (
                        <Text style={styles.consumido}>{somaMl}</Text>
                    )}
                    <Text style={styles.ml}> ml</Text>
                </View>
                {isLoading ? (
                    <ActivityIndicator size='default' />
                ) : (
                    <Text style={styles.porcentagem}>{porcentagem.toFixed(2)}%</Text>
                )}
            </View>

            <View>
                <View style={styles.agua} />
                <TouchableOpacity style={{ alignItems: 'center' }}>
                    <Button style={{ justifyContent: 'center', alignItems: 'center', width: 154, height: 56, bottom: 17, position: 'absolute', }}
                        mode="contained-total"
                        buttonColor="#FFFFFF"
                        textColor="#2D4F63"
                        onPress={() => navigation.navigate('Beber')}
                    >BEBER +
                    </Button>
                </TouchableOpacity>
            </View>
        </View>
    )
}