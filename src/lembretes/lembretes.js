import { View, Text, StyleSheet } from "react-native"

export default function Lembretes() {
    return (
        <View style={styles.container}>
            <Text>Alá teu pai</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})