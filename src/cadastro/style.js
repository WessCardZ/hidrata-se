import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6CC2F2',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerSecundario:{
        minHeight: 176, 
        maxHeight: 176, 
        justifyContent: 'space-between', 
        alignItems: 'center'
    },
    titulo:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 36,
    },
    botao:{
        width: 296,
        height: 47,
        backgroundColor: '#00A1FF',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textoBotao:{
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#fff'
    }
});


export default style;