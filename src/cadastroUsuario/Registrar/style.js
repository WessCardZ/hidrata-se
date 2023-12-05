import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6CC2F2'
    },
    containerTitulo: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 36,
        color: '#2D4F63'
    },
    containerInput: {
        alignItems: 'center',
        maxHeight: 164,
        minHeight: 164,
        justifyContent: 'space-between'
    },
    input: {
        width: 310,
        height: 50,
        backgroundColor: '#E6E6E6',
        borderRadius: 8,
        paddingLeft: 12,
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16
    },
    label: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        color: '#2D4F63',
        paddingLeft: 8,
        paddingBottom: 4
    },
    containerBotao: {
        alignItems: 'center',
        marginTop: 20,
        maxHeight: 127,
        minHeight: 127,
        justifyContent: 'space-between'
    },
    botao: {
        width: 310,
        height: 47,
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
    texto: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        color: '#2D4F63'
    }
})

export default style;