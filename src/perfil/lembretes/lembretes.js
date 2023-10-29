import { View, Text } from "react-native"
import styles from "./style"
import { useFonts, Montserrat_600SemiBold } from "@expo-google-fonts/montserrat";
import { useState } from "react"
import { Switch } from "react-native-paper"

export default function Lembretes() {

    let [fontsLoaded, fontError] = useFonts({
        Montserrat_600SemiBold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View style={{ marginTop: 30 }}>
                <Lista texto='Após acordar' />
                <Lista texto='Antes do almoço' />
                <Lista texto='Após o almoço' />
                <Lista texto='Antes do jantar' />
                <Lista texto='Após o jantar' />
                <Lista texto='Antes de dormir' />
            </View>

            <Text style={styles.tituloMeta}>Meta</Text>
            <View style={{ marginTop: 12 }}>
                <Lista texto='Meta atingida' />
            </View>
        </View>
    )
}

const Botao = () => {
    const [botaoOn, setBotaoOn] = useState(true)

    const trocarBotao = () => setBotaoOn(!botaoOn)

    return <Switch value={botaoOn} onValueChange={trocarBotao} color="#00A1FF" />
}

const Lista = ({ texto }) => {
    return (
        <View style={styles.containerLista}>
            <Text style={styles.texto}>{texto}</Text>
            <Botao />
        </View>
    )
}