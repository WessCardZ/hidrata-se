import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D9D9D9',
        alignItems: 'center'
    },
    containerInferior: {
        flex: 0.8,
        justifyContent: 'flex-end',
    },
    inputBotao: {
        maxHeight: 116,
        minHeight: 116,
        justifyContent: 'space-between'
    },
    input: {
        borderBottomWidth: 1,
        alignItems: 'center',
        textAlign: 'center',
        maxWidth: 154,
        minWidth: 154
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 154,
        height: 56,
    },
    containerBotoes: {
        flexDirection: 'row',
        maxWidth: 50,
        minWidth: 50,
        justifyContent: 'space-between'
    },
    botaoHistorico: {
        backgroundColor: '#fff',
        marginLeft: 29
    },
})

export default styles