import { View, Text, TextInput, Modal, FlatList, TouchableOpacity, Alert } from "react-native";
import styles from "./style";
import { Button, IconButton } from "react-native-paper";
import { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import GoogleFonts from "../../components/GoogleFonts";


export default function TelaBeber() {
    const navigation = useNavigation()
    const [ml, setMl] = useState('')
    const [modalVisible, setModalVisible] = useState(false);

    const createPost = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/registro-agua/${userId}`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    quantidadeML: ml
                }),
            })
            const json = await response.json()
            console.log(json)

            navigation.navigate('TelaInicio')
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <View style={styles.container}>

            <ModalHistorico modalVisible={modalVisible} setModalVisible={setModalVisible} />

            <View style={styles.containerInferior}>
                <View style={styles.inputBotao}>
                    <TextInput
                        style={styles.input}
                        placeholder="Inserir ML"
                        value={ml}
                        keyboardType="numeric"
                        maxLength={4}
                        onChangeText={(text) => setMl(text)}
                    />
                    <View style={styles.containerBotoes}>
                        <Button style={styles.botao}
                            mode="contained-total"
                            buttonColor="#FFFFFF"
                            textColor="#2D4F63"
                            onPress={() => createPost()}
                        >BEBER +
                        </Button>
                        <IconButton
                            icon={"history"}
                            size={34}
                            style={styles.botaoHistorico}
                            containerColor="#fff"
                            onPress={() => setModalVisible(true)}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}

const ModalHistorico = ({ modalVisible, setModalVisible }) => {
    const navigation = useNavigation()
    const [historico, setHistorico] = useState([])
    const [ml, setMl] = useState('')

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

    const fonts = GoogleFonts()
    const Historico = ({ quantidadeML }) => {
        setMl(quantidadeML)
        return fonts ? (
            <TouchableOpacity onPress={() => postQuantidadeMl()}>
                <View style={styles.containerRegistroAgua}>
                    <Text style={styles.textoMl}>{quantidadeML}</Text>
                </View>
            </TouchableOpacity>
        ) : null
    }

    return (
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.fundoModal}>
                <View style={styles.modal}>
                    <View style={styles.botaoFechar}>
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

