import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#6DC1F2',
      paddingTop: 55,
      borderWidth: 10,
    },
    textoregistro: {
    paddingTop: 5,
    paddingBottom: 14,
    paddingLeft: 155,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    },
    containermeio: {
        flex: 1,
        backgroundColor: '#1897F2',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    listahistorico: {
        borderWidth: 4,
        backgroundColor: '#61B5F2',
        paddingTop: 14,
        paddingLeft: 5,
        paddingBottom: 14,
        borderRadius: 10,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderLeftColor: '#1897F2',
        borderRightColor: '#1897F2',
        borderTopColor: '#1897F2',
        borderBottomColor: '#1897F2',
    },
    historico: {
        flex: 18,
        backgroundColor: '#1897F2',
    },
    ml: {
        color: 'white',
        fontSize: 16,
        fontFamily: 'Montserrat_700Bold',
    },
    hora: {
        color: '#CCCCCC',
        fontSize: 12,
        fontFamily: 'Montserrat_700Bold',
    }
  });


export default style;