import { View, Text, Pressable, TouchableOpacity, } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { ActivityIndicator, Button } from 'react-native-paper';
import styles from "./style";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

export default function TelaInicio() {
    const [isLoading, setLoading] = useState(true)
    const [somaMl, setSomaMl] = useState(0)
    const [porcentagem, setPorcentagem] = useState(0)
    const [atualizarDados, setAtualizarDados] = useState()

    useFocusEffect(
        React.useCallback(() => {
            setAtualizarDados(new Date());
            console.log('tela inicial')
        }, [])
    )

    const contaMl = async () => {
        try {
            const response = await fetch('https://aguaprojeto.onrender.com/registro-agua')
            const json = await response.json()

            var calculoMl = 0
            for (let i = 0; i < json.length; i++) {
                calculoMl += json[i].quantidadeML
            }
            setSomaMl(calculoMl);
            console.log(json)

        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    };

    const contaPorcetagem = async () => {
        const total = 1882

        let calculoPorcentagem = (somaMl * 100) / total
        setPorcentagem(calculoPorcentagem)
    }

    useEffect(() => {
        contaMl();
        contaPorcetagem()
    }, [atualizarDados]);


    const navigation = useNavigation();

    let [fontsLoaded, fontError] = useFonts({
        Montserrat_700Bold, Montserrat_400Regular, Roboto_400Regular
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={styles.containerInformacao}>
                <Text style={styles.meta}>Meta: 1882 ml</Text>
                <View style={{ flexDirection: 'row', alignItems: 'baseline' }}>
                    {isLoading ? (
                        <ActivityIndicator size='large' />
                    ) : (
                        <Text style={styles.consumido}>{somaMl}</Text>
                    )}
                    <Text style={styles.ml}> ml</Text>
                </View>
                <Text style={styles.porcentagem}>{porcentagem.toFixed(2)}%</Text>
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


// 2D4F63