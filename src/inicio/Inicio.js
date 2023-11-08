import { View, Text, Pressable, TouchableOpacity, } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Button } from 'react-native-paper';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

export default function TelaInicio() {
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
                    <Text style={styles.consumido}>0</Text>
                    <Text style={styles.ml}> ml</Text>
                </View>
                <Text style={styles.porcentagem}>0%</Text>
            </View>

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
    )
}


// 2D4F63