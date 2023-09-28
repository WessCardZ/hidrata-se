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
        marginLeft: 16,
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

})

export default style