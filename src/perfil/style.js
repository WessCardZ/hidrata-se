import { StyleSheet } from "react-native";


const style = StyleSheet.create({
    container: {
        flex: 1
    },
    containerBarraSuperior: {
        flex: 0.25
    },
    containerSuperior: {
        flex: 1.5,
        borderWidth: 2,
        borderBottomColor: '#99DAFF',
        borderTopColor: 'transparent',
        borderLeftColor: 'transparent',
        borderRightColor: 'transparent',
        backgroundColor: '#6DC1F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    caixaML: {
        width: 172,
        height: 70,
        backgroundColor: '#61B5F2',
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    numeracao: {
        color: '#FFF',
        fontSize: 32,
        fontWeight: 'bold',
        fontFamily: 'Montserrat_700Bold'
    },
    ml: {
        color: '#FFF',
        fontSize: 16,
        paddingLeft: 6,
        fontFamily: 'Montserrat_700Bold'
    },
    texto: {
        color: '#FFF',
        fontSize: 12,
        color: '#427699',
        fontFamily: 'Montserrat_700Bold'
    },
    containerInferior: {
        flex: 6.5,
        backgroundColor: '#6DC1F2',
        paddingTop: 18
    },

    grupoPerfil: {
        flexDirection: 'row',
        height: 66,
        marginTop: 28,
    },
    grupoTexto: {
        width: 310,
        height: 66,
        justifyContent: 'space-evenly',
    },
    titulo: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Montserrat_700Bold'
    },
    subtitulo: {
        color: '#5992B2',
        fontSize: 12,
        fontFamily: 'Montserrat_400Regular'
    },
    fundoModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.4)'
    },
    modal: {
        minHeight: 207,
        maxHeight: 210,
        width: 280,
        backgroundColor: 'white',
        borderRadius: 16,
        justifyContent: "space-between"

    },
    tituloModal: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 24,
        paddingTop: 16,
        color: '#2D4F63',
    },
    inputs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    containerTextInput: {
        maxWidth: 115, minWidth: 115
    },
    textoInput: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 40,
    },
    botaoModal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 2,
    },
    textoBotaoModal1: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
    },
    containerBotaoModal: {
        height: 49,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        flex: 1,
    },
    containerBotaoModal2: {
        height: 49,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        borderLeftWidth: 2,
        flex: 1,
    },
    inputModal: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textoInputModal: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 50,
    },
    Kg: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 20,
        color: '#525252',
        marginLeft: 3,
        paddingTop: 27,
    },
    textoInputMeta: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 50,
    },
    Ml: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 20,
        color: '#525252',
        marginLeft: 3,
        paddingTop: 27,
    },
    textoBotaoModal: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16
    }

})

export default style