import { StyleSheet } from "react-native";

const style = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#6DC1F2',
      paddingTop: 40,
      borderWidth: 10,
    },
    textoregistro: {
    paddingTop: 5,
    paddingBottom: 16,
    paddingLeft: 155,
    color: 'white',
    fontSize: 16,
    fontFamily: 'Montserrat_700Bold',
    },
    containermeio: {
        flex: 1,
        paddingTop: 28,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        backgroundColor: '#1897F2',
    },
    listahistorico: {
        borderRadius: 10,
        backgroundColor: '#61B5F2',
        marginTop: 9,
        paddingTop: 15,
        paddingLeft: 5,
        paddingBottom: 14,
        marginHorizontal: 4,
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
    },
    iconContainer: {
        flexDirection: 'row', 
        justifyContent: 'space-between',
        right: 10,
        position: 'absolute'
      },
  });


export default style;