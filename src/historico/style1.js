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
    fundoModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "center",
        backgroundColor: 'rgba(0,0,0,0.4)'
    },
    modal: {
        minHeight: 207,
        maxHeight: 210,
        width: 280,
        backgroundColor: 'white',
        borderRadius: 16,
        // alignItems: 'center',
        justifyContent: "space-between"

    },
    tituloModal: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 24,
        paddingTop: 16,
        color: '#2D4F63',
    },
    caixaSubTitulo: {
        // paddingTop: 17,
        maxWidth: 230,
        alignItems: 'center',
    },
    subTituloModal: {
        fontFamily: 'Montserrat_600SemiBold',
        color: '#457A99',
        fontSize: 16
    },
    botaoModal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 2,
        //width: '100%',
        // flex: 1,
        // marginTop: 32
    },
    textoBotaoModal1: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
    },
    textoBotaoModalDelete: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 16,
        color: '#FF3434'
    },
    containerBotaoModal: {
        height: 49,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        flex: 1,
    },
    containerBotaoModal2: {
        height: 49,
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
        borderLeftWidth: 2,
        // backgroundColor: 'yellow',
        flex: 1,
    },
    containerInputs: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    ContainerinputML: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputML: {
        color: '#2D4F63',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 40
    },
    textoML: {
        color: '#2D4F63',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 20,
    },
    inputHorario: {
        color: '#2D4F63',
        fontFamily: 'Montserrat_600SemiBold',
        fontSize: 40
    },
    botaoSalvarModal: {
        width: 264,
        height: 44,
        backgroundColor: '#00A1FF',
        marginBottom: 16
    },
});


export default style;