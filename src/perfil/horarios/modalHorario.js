import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Modal, Pressable, TextInput, View, Text } from "react-native";
import style from "../style";

const Modalhorario = ({ modalVisible, setModalVisible }) => {
    const [peso, setPeso] = useState('');
    const [meta, setMeta] = useState('');
    const [acordar, setAcordar] = useState('');
    const [dormir, setDormir] = useState('');

    useEffect(() => {
        getHorario();
    }, []);

    const getHorario = async () => {
        const userId = await AsyncStorage.getItem('userId');
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuarioconfig/usuario/${userId}`);
            const json = await response.json();

            setAcordar(json.horarioAcordar);
            setDormir(json.horarioDormir);
            setPeso(json.pesoAtual);
            setMeta(json.metaDiaria);
        } catch (error) {
            console.error(error);
        }
    };

    const handleTrocaInput = (text, setState) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        const limiteNumerico = numericValue.slice(0, 4);
        const valorFormatado = formatarHora(limiteNumerico);

        setState(valorFormatado);
    };

    const formatarHora = (value) => {
        if (value.length <= 2) {
            return value;
        } else {
            const hora = value.slice(0, 2);
            const minutos = value.slice(2, 4);
            return `${hora}:${minutos}`;
        }
    };

    const putHorarios = async () => {
        const userId = await AsyncStorage.getItem('userId');
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuarioconfig/usuario/${userId}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    pesoAtual: peso,
                    horarioAcordar: acordar,
                    horarioDormir: dormir,
                    metaDiaria: meta,
                }),
            });

            if (response.status === 204) {
                setModalVisible(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <KeyboardAvoidingView>
            <Modal animationType="fade" transparent={true} visible={modalVisible}>
                <View style={style.fundoModa}>
                    <View style={style.modal}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={style.tituloModal}>Horários</Text>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={style.textoHora}>Acordar</Text>
                                <Text style={style.textoHora}>Dormir</Text>
                            </View>

                            <View style={style.inputs}>
                                <TextInput
                                    keyboardType="numeric"
                                    style={style.textoInput}
                                    maxLength={5}
                                    value={acordar}
                                    onChangeText={(text) => handleTrocaInput(text, setAcordar)}
                                />
                                <TextInput
                                    keyboardType="numeric"
                                    style={style.textoInput}
                                    maxLength={5}
                                    value={dormir}
                                    onChangeText={(text) => handleTrocaInput(text, setDormir)}
                                />
                            </View>
                        </View>

                        <Pressable style={style.botaoModal}>
                            <Pressable onPress={() => setModalVisible(false)} style={style.containerBotaoModal}>
                                <Text style={style.textoBotaoModal}>Cancelar</Text>
                            </Pressable>
                            <Pressable onPress={putHorarios} style={style.containerBotaoModal2}>
                                <Text style={style.textoBotaoModal}>Salvar</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
};

export default Modalhorario