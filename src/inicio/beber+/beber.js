import { View, Text, TextInput } from "react-native";
import styles from "./style";
import { Button } from "react-native-paper";


export default function TelaBeber(){
    return(
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder="Inserir ML"></TextInput>

            <Button style={{ justifyContent: 'center', alignItems: 'center', width: 154, height: 56, top: 511 }}
                    mode="contained-total"
                    buttonColor="#FFFFFF"
                    textColor="#2D4F63"
                    >BEBER +
                </Button>
        </View>
    )
}