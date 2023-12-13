import { View, Text, TextInput } from "react-native";
import styles from "./style";
import { Button } from "react-native-paper";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";


export default function TelaBeber() {
    const navigation = useNavigation()
    const [ml, setMl] = useState('')

    const createPost = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/registro-agua/${userId}`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    quantidadeML: ml
                }),
            })
            const json = await response.json()
            console.log(json)

            navigation.navigate('TelaInicio')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <View style={styles.container}>

            <View style={styles.inferior}>
                <TextInput
                    style={styles.input}
                    placeholder="Inserir ML"
                    value={ml}
                    keyboardType="numeric"
                    maxLength={4}
                    onChangeText={(text) => setMl(text)}
                />
                <Button style={styles.botao}
                    mode="contained-total"
                    buttonColor="#FFFFFF"
                    textColor="#2D4F63"
                    onPress={() => createPost()}
                >BEBER +
                </Button>
            </View>
        </View>
    )
}