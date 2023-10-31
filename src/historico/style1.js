import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6DC1F2',
        paddingTop: 40,
    },
    textoregistro: {
        paddingTop: 5,
        paddingBottom: 16,
        paddingLeft: 155,
        color: '#2D4F63',
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
    },
    containermeio: {
        flex: 1,
        paddingTop: 36,
    },
    listahistorico: {
        borderRadius: 10,
        backgroundColor: '#55B0F2',
        opacity: 0.8,
        marginTop: 8,
        paddingTop: 15,
        paddingLeft: 9,
        paddingBottom: 14,
        marginHorizontal: 4,
    },
    ml: {
        color: '#2D4F63',
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
    },
    hora: {
        color: '#E6E6E6',
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold',
    },
    iconContainer: {
        position: 'absolute',
        flexDirection: 'row',
        right: 10,
    },
});


export default style;