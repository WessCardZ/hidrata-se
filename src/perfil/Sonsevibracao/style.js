import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E6E6E6s'
    },
    titulo: {
        color: '#0071B2',
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
        marginLeft: 20,
        marginTop: 32,
    },
    pressionavel: {
        marginTop: 8,
        flexDirection: 'column',
        marginLeft: 17
    },
    textoPrincipal: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 12,
    },
    textoSecundario: {
        marginTop: 4,
        fontFamily: 'Montserrat_700Bold',
        fontSize: 10,
        color: '#5B5B5B'
    },
    textoVibracao: {
        position: 'absolute',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 12,
        marginLeft: 20,
    },
    botao: {
        justifyContent: 'center',
        marginRight: 20
    }
})

export default styles