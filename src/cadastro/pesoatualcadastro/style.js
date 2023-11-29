import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6CC2F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSecundario: {
        minHeight: 221,
        maxHeight: 221,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titulo: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 36,
        color: '#2D4F63',
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
    tituloSecundario: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 14,
        color: '#457A99'

    },
    containerAviso: {
        borderRadius: 8,
        borderColor: '#AAD8F2',
        width: 283,
        height: 66,
        borderWidth: 1,
        justifyContent:'center',
        backgroundColor: '#AAD8F2',
        alignItems: 'center'
    }
});

// AAD8F2

export default style;