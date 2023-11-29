import { Pressable, Text, View, Modal, TextInput, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, ScrollView } from "react-native";
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import style from './style'
import { ActivityIndicator, IconButton, useTheme } from "react-native-paper";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";

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
        try {
            const response = await fetch('https://aguaprojeto.onrender.com/registro-agua')
            const json = await response.json()

            var calculoMl = 0
            for (let i = 0; i < json.length; i++) {
                calculoMl += json[i].quantidadeML
            }
            setSomaMl(calculoMl);
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

    
    let [fontsLoaded, fontError] = useFonts({
        Montserrat_700Bold, Montserrat_400Regular, Montserrat_500Medium
    });

    if (!fontsLoaded && !fontError) {
        return null;
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
                                <TextInput keyboardType="numeric" style={style.textoInput}>00:00</TextInput>
                                <TextInput keyboardType="numeric" style={style.textoInput}>00:00</TextInput>
                            </View>
                        </View>

                        <Pressable style={style.botaoModal}>
                            <Pressable onPress={() => setModalVisible(false)} style={style.containerBotaoModal}>
                                <Text style={style.textoBotaoModal}>Cancelar</Text>
                            </Pressable>
                            <Pressable onPress={() => alert('ala teu mae')} style={style.containerBotaoModal2} >
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
                            <TextInput keyboardType="numeric" style={style.textoInputModal}>60</TextInput>
                            <Text style={style.Kg}>Kg</Text>
                        </View>
                        <Pressable style={style.botaoModal}>
                            <Pressable onPress={() => setModalPesoVisible(false)} style={style.containerBotaoModal}>
                                <Text style={style.textoBotaoModal}>Cancelar</Text>
                            </Pressable>
                            <Pressable onPress={() => alert('ala teu pai')} style={style.containerBotaoModal2} >
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
                            <TextInput keyboardType="numeric" style={style.textoInputMeta}>1822</TextInput>
                            <Text style={style.Ml}>ML</Text>
                        </View>
                        <Pressable style={style.botaoModal}>
                            <Pressable onPress={() => setModalMetaVisible(false)} style={style.containerBotaoModal}>
                                <Text style={style.textoBotaoModal}>Cancelar</Text>
                            </Pressable>
                            <Pressable onPress={() => alert('ala teu tio')} style={style.containerBotaoModal2} >
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
