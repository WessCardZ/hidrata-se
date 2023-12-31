import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#D9D9D9',
        justifyContent: 'space-between'
    },
    containerInformacao: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerMl: {
        flexDirection: 'row',
        alignItems: 'baseline'
    },
    meta: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 20,
        color: '#2D4F63'
    },
    consumido: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 80,
        color: '#2D4F63'
    },
    ml: {
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color: '#2D4F63'
    },
    porcentagem: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 20,
        color: '#2D4F63'
    },
    agua: {
        height: 39,
        backgroundColor: '#1897F2',
    },
    botao: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 154,
        height: 56,
        bottom: 17,
        position: 'absolute',
    }
})

export default styles