import { Pressable, View, Text } from "react-native"
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import styles from "./style"
import { useState } from "react";
import { Switch } from "react-native-paper";

export default function Sonsevibracao() {
    let [fontsLoaded, fontError] = useFonts({
        Montserrat_700Bold, Montserrat_400Regular
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.titulo}>Lembretes</Text>

                <View style={styles.pressionavel}>
                    <Text style={styles.textoPrincipal}> Som de notificação</Text>
                    <Text style={styles.textoSecundario}> Padrão</Text>
                </View>

                <View style={styles.botao}>
                    <Text style={styles.textoVibracao}>Vibração</Text>
                    <Botao />
                </View>

                <Text style={styles.titulo}>Meta</Text>

                <View style={styles.meta}>
                    <View style={styles.pressionavel}>
                        <Text style={styles.textoPrincipal}> Som de notificação</Text>
                        <Text style={styles.textoSecundario}> Padrão</Text>
                    </View>
                </View>

                <View style={styles.botao}>
                    <Text style={styles.textoVibracao}>Vibração</Text>
                    <Botao />
                </View>

            </View>
        </View>
    )
}

const Botao = () => {
    const [botaoOn, setBotaoOn] = useState(true)

    const trocarBotao = () => setBotaoOn(!botaoOn)

    return <Switch value={botaoOn} onValueChange={trocarBotao} color="#00A1FF" />
}