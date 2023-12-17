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
    fundoModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    modal: {
        minHeight: 207,
        maxHeight: 210,
        width: '100%',
        backgroundColor: 'white',
        borderTopRightRadius: 12,
        borderTopLeftRadius: 12,
        // justifyContent: "space-between"
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    botaoFechar: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    containerRegistroAgua: {
        // borderWidth: 2,
        backgroundColor: '#6CC2F2',
        maxWidth: 346,
        minWidth: 346,
        minHeight: 44,
        maxHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginBottom: 12
    },
    textoMl: {
        fontFamily: 'Montserrat_700Bold',
        color: '#FFFFFF',
        fontSize: 20
    }
})

export default styles