import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { KeyboardAvoidingView, Modal, Pressable, TextInput, View, Text } from "react-native";
import style from "../style";

const ModalPeso = ({ modalPesoVisible, setModalPesoVisible }) => {
    const [peso, setPeso] = useState('');
    const [meta, setMeta] = useState('');
    const [acordar, setAcordar] = useState('');
    const [dormir, setDormir] = useState('');

    useEffect(() => {
        getUsuarioConfig();
    }, []);

    const getUsuarioConfig = async () => {
        const userId = await AsyncStorage.getItem('userId');
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuarioconfig/usuario/${userId}`);
            const json = await response.json();

            setPeso(json.pesoAtual);
            setMeta(json.metaDiaria);

            setAcordar(formatarHora(json.horarioAcordar));
            setDormir(formatarHora(json.horarioDormir));
        } catch (error) {
            console.error(error);
        }
    };

    const formatarHora = (value) => {
        const [horas, minutos] = value.split(':');
        return `${horas}${minutos}`;
    };

    const putPeso = async () => {
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
                setModalPesoVisible(false);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <KeyboardAvoidingView>
            <Modal animationType="fade" transparent={true} visible={modalPesoVisible}>
                <View style={style.fundoModal}>
                    <View style={style.modal}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={style.tituloModal}>Peso</Text>
                        </View>

                        <View style={style.inputModal}>
                            <TextInput
                                keyboardType="numeric"
                                style={style.textoInputModal}
                                maxLength={5}
                                value={peso}
                                placeholder="60"
                                onChangeText={(text) => setPeso(text)}
                            />
                            <Text style={style.Kg}>Kg</Text>
                        </View>

                        <Pressable style={style.botaoModal}>
                            <Pressable onPress={() => setModalPesoVisible(false)} style={style.containerBotaoModal}>
                                <Text style={style.textoBotaoModal}>Cancelar</Text>
                            </Pressable>
                            <Pressable onPress={putPeso} style={style.containerBotaoModal2}>
                                <Text style={style.textoBotaoModal}>Salvar</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
}

export default ModalPeso
