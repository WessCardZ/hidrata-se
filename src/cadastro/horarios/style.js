import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6CC2F2',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSecundario: {
        minHeight: 381,
        maxHeight: 381,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titulo: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 32,
        color: '#2D4F63'
    },
    containerAviso: {
        // borderWidth: 1,
        maxWidth: 283,
        minWidth: 283,
        minHeight: 66,
        maxHeight: 66,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#AAD8F2',
        borderRadius: 8
    },
    aviso: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 14,
        color: '#457A99',
        textAlign: 'center'
    },
    containerInformacao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        // borderWidth: 1,
        maxWidth: 283,
        minWidth: 283,
    },
    textoInformacao: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 28,
        color: '#F2F2F2'
    },
    containerHorarios: {
        // borderWidth: 1,
        maxWidth: 283,
        minWidth: 283,
        minHeight: 51,
        maxHeight: 51,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    containerInputs: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#D9D9D9',
        maxWidth: 117,
        minWidth: 117,
        minHeight: 51,
        maxHeight: 51,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputHorario: {
        // borderWidth: 1,
        maxWidth: 85,
        minWidth: 85,
        fontFamily: 'Montserrat_700Bold',
        color: '#F2F2F2',
        fontSize: 28,
    },
    botao: {
        width: 296,
        height: 47, justifyContent: 'space-around',
        backgroundColor: '#00A1FF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBotao: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#fff'
    },
});

// AAD8F2

export default style;