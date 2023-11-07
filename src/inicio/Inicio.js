import { View, Text, } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Button } from 'react-native-paper';
import styles from "./style";

export default function TelaInicio() {

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
                    <Text style={styles.consumido}>0</Text>
                    <Text style={styles.ml}> ml</Text>
                </View>
                <Text style={styles.porcentagem}>0%</Text>
            </View>

            <Button style={styles.botao}
                mode="contained-tonal"
                buttonColor="#FFFFFF"
                textColor="#2D4F63">BEBER +</Button>
            <View style={styles.agua} />
        </View>
    )
}


// 2D4F63