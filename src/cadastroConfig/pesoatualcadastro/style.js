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
        maxWidth: 283,
        minWidth: 283,
        minHeight: 66,
        maxHeight: 66,
        justifyContent: 'center',
        backgroundColor: '#AAD8F2',
        borderRadius: 8
    },
    aviso: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 14,
        color: '#457A99',
        textAlign: 'center'
    },
    containerInput: {
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#D9D9D9',
        maxWidth: 283,
        minWidth: 283,
        minHeight: 51,
        maxHeight: 51,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    inputkg: {
        maxWidth: 100,
        minWidth: 100,
        fontFamily: 'Montserrat_700Bold',
        color: '#F2F2F2',
        fontSize: 28,
    },
    kg: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 14,
        color: '#F2F2F2',

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

export default style;