import AsyncStorage from "@react-native-async-storage/async-storage"
import { useNavigation } from "@react-navigation/native"
import { useEffect, useState } from "react"
import GoogleFonts from "../../components/GoogleFonts"
import { Alert, FlatList, Modal, TouchableOpacity, View, Text } from "react-native"
import style from "./style"
import { IconButton } from "react-native-paper"

function ModalHistorico({ modalVisible, setModalVisible }) {
    const navigation = useNavigation()
    const [historico, setHistorico] = useState([])
    const [ml, setMl] = useState('')
    const fonts = GoogleFonts()

    const getQuantidadeMl = async () => {
        const userId = await AsyncStorage.getItem('userId');
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuario/${userId}`);
            const json = await response.json();
            const registroAgua = json.registroAgua;
            setHistorico(registroAgua);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getQuantidadeMl()
    }, []);

    const postQuantidadeMl = async () => {
        const userId = await AsyncStorage.getItem('userId');
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/registro-agua/${userId}`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    quantidadeML: ml
                })
            });
            if (response.status == 201) {
                setModalVisible(false)
                navigation.navigate('TelaInicio')
            } else {
                Alert.alert('Opa parece que você está com problemas', response.status)
            }
        } catch (error) {
            console.error(error)
        }
    }


    const Historico = ({ quantidadeML }) => {
        setMl(quantidadeML)

        return fonts ? (
            <TouchableOpacity onPress={() => postQuantidadeMl()}>
                <View style={style.containerRegistroAgua}>
                    <Text style={style.textoMl}>{quantidadeML}</Text>
                </View>
            </TouchableOpacity>
        ) : null
    }

    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={style.fundoModal}>
                <View style={style.modal}>
                    <View style={style.botaoFechar}>
                        <IconButton icon={'close'} size={28} onPress={() => setModalVisible(false)} />
                    </View>
                    <FlatList
                        data={historico}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) =>
                            <Historico quantidadeML={item.quantidadeML} />
                        }
                    />
                </View>
            </View>
        </Modal>
    )
}

export default ModalHistorico;