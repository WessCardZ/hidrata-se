import { StyleSheet } from "react-native";

const style = StyleSheet.create({
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
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    botaoFechar: {
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    containerRegistroAgua: {
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

export default style