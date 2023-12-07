import { Pressable, Text, View, Modal, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import style from './style'
import { ActivityIndicator, IconButton, useTheme } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import GoogleFonts from "../components/GoogleFonts";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
            console.log('Tela Perfil')
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

    if (!fonts) {
        return null
    }



    return (
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
                            console.log('foi')
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
                            console.log('foi')
                            navigation.navigate("sonsevibracao")
                        }}
                    />
                </ScrollView>
            </View>
        </View >
    )
}

const Modalhorario = ({ modalVisible, setModalVisible }) => {
    const [peso, setPeso] = useState('')
    const [meta, setMeta] = useState('')
    const [acordar, setAcordar] = useState('')
    const [dormir, setDormir] = useState('')

    useEffect(() => {
        getHorario()
    }, [])

    const getHorario = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuarioconfig/usuario/${userId}`)
            const json = await response.json()
            const acordar = json.horarioAcordar;
            setAcordar(acordar)

            const dormir = json.horarioDormir;
            setDormir(dormir)

            const pesoAtual = json.pesoAtual
            setPeso(pesoAtual)

            const metaD = json.metaDiaria
            setMeta(metaD)
        } catch (error) {
            console.error(error)
        }
    }

    const handleTrocaInputAcordar = (text) => {
        //Remove qualquer caractere não numerico
        const numericValue = text.replace(/[^0-9]/g, '')

        // Garante que vai ta limitado a 4 dígitos
        const limiteNumerico = numericValue.slice(0, 4)

        const valorFormatado = formatarHora(limiteNumerico)

        setAcordar(valorFormatado)
    }

    const handleTrocaInputDormir = (text) => {
        //Remove qualquer caractere não numerico
        const numericValue = text.replace(/[^0-9]/g, '')

        // Garante que vai ta limitado a 4 dígitos
        const limiteNumerico = numericValue.slice(0, 4)

        const valorFormatado = formatarHora(limiteNumerico)

        setDormir(valorFormatado)
    }

    const formatarHora = (value) => {
        if (value.length <= 2) {
            return value
        } else {
            const hora = value.slice(0, 2)
            const minutos = value.slice(2, 4)
            return `${hora}:${minutos}`
        }
    }

    const putHorarios = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuarioconfig/usuario/${userId}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    pesoAtual: peso,
                    horarioAcordar: acordar,
                    horarioDormir: dormir,
                    metaDiaria: meta
                })
            })
            if (response.status === 204) {
                setModalVisible(false)
            }
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <KeyboardAvoidingView style={{}}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
            >

                <View style={style.fundoModa}>

                    <View style={style.modal}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={style.tituloModal}>Horários</Text>
                        </View>

                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 20, color: '#525252' }}>Acordar</Text>
                                <Text style={{ fontFamily: 'Montserrat_500Medium', fontSize: 20, color: '#525252' }}>Dormir</Text>
                            </View>

                            <View style={style.inputs}>
                                <TextInput keyboardType="numeric" style={style.textoInput} maxLength={5} value={acordar} onChangeText={handleTrocaInputAcordar}></TextInput>
                                <TextInput keyboardType="numeric" style={style.textoInput} maxLength={5} value={dormir} onChangeText={handleTrocaInputDormir}></TextInput>
                            </View>
                        </View>

                        <Pressable style={style.botaoModal}>
                            <Pressable onPress={() => setModalVisible(false)} style={style.containerBotaoModal}>
                                <Text style={style.textoBotaoModal}>Cancelar</Text>
                            </Pressable>
                            <Pressable onPress={() => putHorarios()} style={style.containerBotaoModal2} >
                                <Text style={style.textoBotaoModal}>Salvar</Text>
                            </Pressable>
                        </Pressable>
                    </View>

                </View>
            </Modal >
        </KeyboardAvoidingView>
    )
}

const ModalPeso = ({ modalPesoVisible, setModalPesoVisible }) => {
    const [peso, setPeso] = useState('')
    const [meta, setMeta] = useState('')
    const [acordar, setAcordar] = useState('')
    const [dormir, setDormir] = useState('')

    useEffect(() => {
        getUsuarioConfig()
    }, [])

    const getUsuarioConfig = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuarioconfig/usuario/${userId}`)
            const json = await response.json()
            const pesoAtual = json.pesoAtual
            setPeso(pesoAtual)

            const metaD = json.metaDiaria
            setMeta(metaD)

            const horarioAcordar = json.horarioAcordar
            const [acordarHoras, acordarMinutos] = horarioAcordar.split(':')
            const formatoAcordar = `${acordarHoras}${acordarMinutos}`
            setAcordar(formatoAcordar)

            const horarioDormir = json.horarioDormir
            const [dormirHoras, dormirMinutos] = horarioDormir.split(':')
            const formatoDormir = `${dormirHoras}${dormirMinutos}`
            setDormir(formatoDormir)
        } catch (error) {
            console.error(error)
        }
    }
    const putPeso = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuarioconfig/usuario/${userId}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    pesoAtual: peso,
                    horarioAcordar: acordar,
                    horarioDormir: dormir,
                    metaDiaria: meta
                })
            })
            if (response.status === 204) {
                setModalPesoVisible(false)
            }
            console.log('status:' + response.status)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <KeyboardAvoidingView style={{}}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalPesoVisible}
            >
                <View style={style.fundoModa}>

                    <View style={style.modal}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={style.tituloModal}>Peso</Text>
                        </View>

                        <View style={style.inputModal}>
                            <TextInput keyboardType="numeric" style={style.textoInputModal} maxLength={5} value={peso} onChangeText={(text) => setPeso(text)}></TextInput>
                            <Text style={style.Kg}>Kg</Text>
                        </View>
                        <Pressable style={style.botaoModal}>
                            <Pressable onPress={() => setModalPesoVisible(false)} style={style.containerBotaoModal}>
                                <Text style={style.textoBotaoModal}>Cancelar</Text>
                            </Pressable>
                            <Pressable onPress={() => putPeso()} style={style.containerBotaoModal2} >
                                <Text style={style.textoBotaoModal}>Salvar</Text>
                            </Pressable>
                        </Pressable>

                    </View>
                </View>
            </Modal>
        </KeyboardAvoidingView>
    )
}

const ModalMeta = ({ modalMetaVisible, setModalMetaVisible }) => {
    const [peso, setPeso] = useState('')
    const [meta, setMeta] = useState('')
    const [acordar, setAcordar] = useState('')
    const [dormir, setDormir] = useState('')

    useEffect(() => {
        getUsuarioConfig()
    }, [])

    const getUsuarioConfig = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuarioconfig/usuario/${userId}`)
            const json = await response.json()
            const pesoAtual = json.pesoAtual
            setPeso(pesoAtual)

            const metaD = json.metaDiaria
            setMeta(metaD.toString())

            const horarioAcordar = json.horarioAcordar
            const [acordarHoras, acordarMinutos] = horarioAcordar.split(':')
            const formatoAcordar = `${acordarHoras}${acordarMinutos}`
            setAcordar(formatoAcordar)

            const horarioDormir = json.horarioDormir
            const [dormirHoras, dormirMinutos] = horarioDormir.split(':')
            const formatoDormir = `${dormirHoras}${dormirMinutos}`
            setDormir(formatoDormir)
        } catch (error) {
            console.error(error)
        }
    }
    const putMeta = async () => {
        const userId = await AsyncStorage.getItem('userId')
        try {
            const response = await fetch(`https://aguaprojeto.onrender.com/usuarioconfig/usuario/${userId}`, {
                method: 'PUT',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    pesoAtual: peso,
                    horarioAcordar: acordar,
                    horarioDormir: dormir,
                    metaDiaria: meta
                })
            })
            if (response.status === 204) {
                setModalMetaVisible(false)
            }
            console.log('status:' + response.status)
        } catch (error) {
            console.error(error)
        }
    }
    return (
        <KeyboardAvoidingView style={{}}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalMetaVisible}
            >

                <View style={style.fundoModa}>

                    <View style={style.modal}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={style.tituloModal}>Meta diária</Text>
                        </View>

                        <View style={style.inputModal}>
                            <TextInput keyboardType="numeric" style={style.textoInputMeta} value={meta} onChangeText={(text) => setMeta(text)}></TextInput>
                            <Text style={style.Ml}>ML</Text>
                        </View>
                        <Pressable style={style.botaoModal}>
                            <Pressable onPress={() => setModalMetaVisible(false)} style={style.containerBotaoModal}>
                                <Text style={style.textoBotaoModal}>Cancelar</Text>
                            </Pressable>
                            <Pressable onPress={() => putMeta()} style={style.containerBotaoModal2} >
                                <Text style={style.textoBotaoModal}>Salvar</Text>
                            </Pressable>
                        </Pressable>
                    </View>
                </View>
            </Modal>

        </KeyboardAvoidingView>
    )
}



const Lista = ({ titulo, subtitulo, nomeIcone, tela, onPress }) => {


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
