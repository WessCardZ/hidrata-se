import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Modal, Pressable, TextInput } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { ActivityIndicator, Button, IconButton } from "react-native-paper";
import style from './style1';


const Telahistorico = () => {
    const [isLoading, setLoading] = useState(true);
    const [historico, setHistorico] = useState([]);
    const [modalVisible, setModalVisible] = useState(false)
    const [modalAtualizarVisible, setModalAtualizarVisible] = useState(false)

    const getHistorico = async () => {
        try {
            const response = await fetch('https://aguaprojeto.onrender.com/registro-agua');
            const json = await response.json();
            setHistorico(json);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getHistorico();
    }, []);

    let [fontsLoaded, fontError] = useFonts({
        Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_500Medium
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    const Historico = ({ quantidadeML, dataHoraConsumo }) => {
        const historico = new Date(dataHoraConsumo);
        const options = { day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' };
        const dataHoraConsumoFormatado = historico.toLocaleDateString('pt-BR', options);

        return (
            <View style={style.listahistorico}>
                <View>
                    <Text style={style.ml}>{quantidadeML}</Text>
                    <Text style={style.hora}>{dataHoraConsumoFormatado}</Text>
                </View>
                <View style={style.iconContainer}>
                    <IconButton icon={"pencil"} size={30} iconColor="#fff" onPress={() => setModalAtualizarVisible(true)} />
                    <IconButton icon={"trash-can-outline"} size={30} iconColor="#FF8080" onPress={() => setModalVisible(true)} />
                </View>

            </View>
        )
    }

    return (
        <View style={style.container}>
            <Text style={style.textoregistro}>Registros</Text>
            <View style={style.containermeio}>
                <ModalDeletar modalVisible={modalVisible} setModalVisible={setModalVisible} />
                <ModalAtualizar modalAtualizarVisible={modalAtualizarVisible} setModalAtualizarVisible={setModalAtualizarVisible} />
                {isLoading ? (
                    <ActivityIndicator size='large' />
                ) : (
                    <FlatList
                        data={historico}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <Historico quantidadeML={item.quantidadeML} dataHoraConsumo={item.dataHoraConsumo} />
                        )}
                    />)}
            </View>
        </View>
    );
};

const ModalDeletar = ({ modalVisible, setModalVisible }) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}
        >
            <View style={style.fundoModal}>
                <View style={style.modal}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={style.tituloModal}>Você tem certeza?</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <View style={style.caixaSubTitulo}>
                            <Text style={style.subTituloModal}>Assim que confirmar, o dado de registro de água selecionado irá ser apagado</Text>
                        </View>
                    </View>
                    <Pressable style={style.botaoModal}>
                        <Pressable onPress={() => setModalVisible(false)} style={style.containerBotaoModal}>
                            <Text style={style.textoBotaoModal}>Cancelar</Text>
                        </Pressable>
                        <Pressable onPress={() => alert('ala teu mae')} style={style.containerBotaoModal2} >
                            <Text style={style.textoBotaoModalDelete}>Apagar</Text>
                        </Pressable>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const ModalAtualizar = ({ modalAtualizarVisible, setModalAtualizarVisible }) => {
    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalAtualizarVisible}
        >
            <View style={style.fundoModal}>
                <View style={style.modal}>
                    <IconButton
                        icon='close'
                        size={20}
                        onPress={() => setModalAtualizarVisible(false)}
                    />

                    <View style={style.containerInputs}>
                        <View style={style.ContainerinputML}>
                            <TextInput style={style.inputML}>230</TextInput>
                            <Text style={style.textoML}>ML</Text>
                        </View>
                        <TextInput style={style.inputHorario}>19:51</TextInput>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Button style={style.botaoSalvarModal} textColor='white'>Salvar</Button>
                    </View>

                </View>
            </View>
        </Modal>
    );
}






export default Telahistorico;
