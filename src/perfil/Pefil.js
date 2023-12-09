import { Pressable, Text, View, Modal, TextInput, KeyboardAvoidingView, ScrollView } from "react-native";
import style from './style'
import { ActivityIndicator, IconButton, useTheme } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import GoogleFonts from "../components/GoogleFonts";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Modalhorario from "./horarios/modalHorario";

export default function TelaPerfil() {
    const [isLoading, setLoading] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
    const [modalPesoVisible, setModalPesoVisible] = useState(false);
    const [modalMetaVisible, setModalMetaVisible] = useState(false);
    const [somaMl, setSomaMl] = useState(0)
    const [atualizarMlIngerido, setAtualizarMlIngerido] = useState()

    useFocusEffect(
        React.useCallback(() => {
            setAtualizarMlIngerido(new Date());
        }, [])
    )
    const contaMl = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuario/${userId}`)
            const json = await response.json()

            let calculoMl = 0
            if (json.registroAgua && json.registroAgua.length > 0) {
                for (let i = 0; i < json.registroAgua.length; i++) {
                    calculoMl += json.registroAgua[i].quantidadeML
                }
                setSomaMl(calculoMl)
            }
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        contaMl();
    }, [atualizarMlIngerido]);

    const navigation = useNavigation();

    const fonts = GoogleFonts()

    return fonts ? (
        <View style={style.container} >
            <View style={style.containerBarraSuperior} />

            <View style={style.containerSuperior}>
                <View style={style.caixaML}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        {isLoading ? (
                            <ActivityIndicator size='large' />
                        ) : (
                            <Text style={style.numeracao}>{somaMl}</Text>
                        )}
                        <Text style={style.ml}>ml</Text>
                    </View>
                    <Text style={style.texto}>Total ingerido</Text>
                </View>
            </View>

            <Modalhorario modalVisible={modalVisible} setModalVisible={setModalVisible} />
            <ModalPeso modalPesoVisible={modalPesoVisible} setModalPesoVisible={setModalPesoVisible} />
            <ModalMeta modalMetaVisible={modalMetaVisible} setModalMetaVisible={setModalMetaVisible} />

            <View style={style.containerInferior}>
                <ScrollView>
                    <Lista
                        nomeIcone='clock-outline'
                        titulo='Horários de dormir e acordar'
                        subtitulo='Poderá modificar o horário de acordar e dormir'
                        onPress={() => setModalVisible(true)}
                    />
                    <Lista
                        nomeIcone='bell-outline'
                        titulo='Lembretes'
                        subtitulo='Poderá modificar o horário que será notificado para beber água'
                        tela='Lembretes'
                        onPress={() => {
                            navigation.navigate("Lembretes")
                        }}
                    />
                    <Lista
                        nomeIcone='check'
                        titulo='Meta'
                        subtitulo='Poderá modificar o seu consumo ideal de acordo com sua preferência'
                        onPress={() => setModalMetaVisible(true)}
                    />
                    <Lista
                        nomeIcone='square-edit-outline'
                        titulo='Peso'
                        subtitulo='Poderá modificar o seu peso'
                        onPress={() => setModalPesoVisible(true)}
                    />
                    <Lista
                        nomeIcone='volume-high'
                        titulo='Sons e Vibração'
                        subtitulo='Poderá modificar se deseja uma notificção com som ou com vibração'
                        tela='sonsevibracao'
                        onPress={() => {
                            navigation.navigate("sonsevibracao")
                        }}
                    />
                </ScrollView>
            </View>
        </View >
    ) : null;
}

const Lista = ({ titulo, subtitulo, nomeIcone, onPress }) => {
    return (
        <Pressable onPress={onPress}>
            <View style={style.grupoPerfil}>
                <View style={{ justifyContent: 'center' }}>
                    <IconButton icon={nomeIcone} size={30} iconColor="#fff" />
                </View>
                <View style={style.grupoTexto}>
                    <Text style={style.titulo}>{titulo}</Text>
                    <Text style={style.subtitulo}>{subtitulo}</Text>
                </View>
            </View>
        </Pressable>
    );
}


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
                <View style={style.fundoModa}>
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

const ModalMeta = ({ modalMetaVisible, setModalMetaVisible }) => {
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
            setMeta(json.metaDiaria.toString());
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

    const putMeta = async () => {
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
                setModalMetaVisible(false);
            }
            console.log('status:' + response.status);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <KeyboardAvoidingView style={{}}>
            <Modal animationType="fade" transparent={true} visible={modalMetaVisible}>
                <View style={style.fundoModa}>
                    <View style={style.modal}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={style.tituloModal}>Meta diária</Text>
                        </View>

                        <View style={style.inputModal}>
                            <TextInput
                                keyboardType="numeric"
                                style={style.textoInputMeta}
                                value={meta}
                                onChangeText={(text) => setMeta(text)}
                            />
                            <Text style={style.Ml}>ML</Text>
                        </View>

                        <Pressable style={style.botaoModal}>
                            <Pressable onPress={() => setModalMetaVisible(false)} style={style.containerBotaoModal}>
                                <Text style={style.textoBotaoModal}>Cancelar</Text>
                            </Pressable>
                            <Pressable onPress={putMeta} style={style.containerBotaoModal2}>
                                <Text style={style.textoBotaoModal}>Salvar</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    );
}

