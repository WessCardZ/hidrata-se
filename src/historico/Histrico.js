import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Modal, Pressable, TextInput } from 'react-native';
import { ActivityIndicator, Button, IconButton } from "react-native-paper";
import style from './style1';
import { useFocusEffect } from '@react-navigation/native';
import GoogleFonts from '../components/GoogleFonts';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Telahistorico = () => {
    const [isLoading, setLoading] = useState(true);
    const [historico, setHistorico] = useState([]);
    const [modalVisible, setModalVisible] = useState(false)
    const [modalAtualizarVisible, setModalAtualizarVisible] = useState(false)
    const [idHistorico, setIdHistorico] = useState(0)
    const [atualizarLista, setAtualizarLista] = useState()
    const [inputMl, setInputMl] = useState(0)

    useFocusEffect(
        React.useCallback(() => {
            handleSetAtulizarLista(new Date());
        }, [])
    );

    function handleSetAtulizarLista(state) {
        setAtualizarLista(state)
    }

    const getHistorico = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuario/${userId}`);
            const json = await response.json();
            const registroAgua = json.registroAgua
            setHistorico(registroAgua);

        } catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getHistorico();
    }, [atualizarLista]);

    const fonts = GoogleFonts()

    const Historico = ({ id, quantidadeML, dataHoraConsumo }) => {
        const historico = new Date(dataHoraConsumo);
        const options = { day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' };
        const dataHoraConsumoFormatado = historico.toLocaleDateString('pt-BR', options);

        return fonts ? (
            <View style={style.listahistorico}>
                <View>
                    <Text style={style.ml}>{quantidadeML}</Text>
                    <Text style={style.hora}>{dataHoraConsumoFormatado}</Text>
                </View>
                <View style={style.iconContainer}>
                    <IconButton
                        icon={"pencil"}
                        size={30}
                        iconColor="#fff"
                        onPress={() => {
                            setInputMl(quantidadeML)
                            setIdHistorico(id);
                            setModalAtualizarVisible(true)
                        }} />
                    <IconButton
                        icon={"trash-can-outline"}
                        size={30}
                        iconColor="#FF8080"
                        onPress={() => {
                            setIdHistorico(id);
                            setModalVisible(true);
                        }} />
                </View>

            </View>
        ) : null;
    }

    return (
        <View style={style.container}>
            <Text style={style.textoregistro}>Registros</Text>
            <View style={style.containermeio}>
                <ModalDeletar modalVisible={modalVisible} setModalVisible={setModalVisible} idHistorico={idHistorico} state={handleSetAtulizarLista} />
                <ModalAtualizar modalAtualizarVisible={modalAtualizarVisible} idHistorico={idHistorico} setModalAtualizarVisible={setModalAtualizarVisible} inputML={inputMl} state={handleSetAtulizarLista} />
                {isLoading ? (<ActivityIndicator size='large' />)
                    : (
                        <FlatList
                            data={historico}
                            keyExtractor={({ id }) => id}
                            renderItem={({ item }) => (
                                <Historico id={item.id} quantidadeML={item.quantidadeML} dataHoraConsumo={item.dataHoraConsumo} />
                            )}
                        />)}
            </View>
        </View>
    );
};


const ModalDeletar = ({ modalVisible, setModalVisible, idHistorico, state }) => {

    const deleteHistorico = async (id) => {
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/registro-agua/${id}`, {
                method: 'DELETE',
                headers: { 'Content-type': 'application/json' },
            });
            state(new Date());
        } catch (error) {
            console.error(error);
        }
    }

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
                        <Pressable onPress={() => { deleteHistorico(idHistorico), setModalVisible(false) }} style={style.containerBotaoModal2} >
                            <Text style={style.textoBotaoModalDelete}>Apagar</Text>
                        </Pressable>
                    </Pressable>
                </View>
            </View>
        </Modal>
    )
}

const ModalAtualizar = ({ modalAtualizarVisible, setModalAtualizarVisible, idHistorico, inputML, state }) => {

    const [ml, setMl] = useState('')

    const atualizarHistorico = async (id) => {
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/registro-agua/${id}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    quantidadeML: ml
                })
            })
            state(new Date())
        } catch (error) {
            console.error(error)
        }
    }

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
                            <TextInput
                                keyboardType='numeric'
                                style={style.inputML}
                                onChangeText={(text) => setMl(text)}
                            >{inputML}</TextInput>
                            <Text style={style.textoML}>ML</Text>
                        </View>
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <Button style={style.botaoSalvarModal} textColor='white' onPress={() => { atualizarHistorico(idHistorico), setModalAtualizarVisible(false) }}>Salvar</Button>
                    </View>

                </View>
            </View>
        </Modal>
    );
}

export default Telahistorico;
