import { View, Text } from "react-native"
import styles from "./style"
import { useState } from "react";
import { Switch } from "react-native-paper";
import GoogleFonts from "../../components/GoogleFonts";

export default function TelaSonsevibracao() {
    const fonts = GoogleFonts()

    return fonts ? (
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
    ) : null
}

const Botao = () => {
    const [botaoOn, setBotaoOn] = useState(true)
    const trocarBotao = () => setBotaoOn(!botaoOn)
    return <Switch value={botaoOn} onValueChange={trocarBotao} color="#00A1FF" />
}