import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import style from './style.js';
import GoogleFonts from '../../components/GoogleFonts/index.js';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native-paper';

function Horarios() {
    const navigation = useNavigation();
    const route = useRoute();
    const { peso } = route.params;
    const [horarioAcordar, setHorarioAcordar] = useState('');
    const [horarioDormir, setHorarioDormir] = useState('');
    const [meta, setMeta] = useState(0);
    const [isLoading, setLoading] = useState(false)

    const handleTrocaInput = useCallback((text, setFunction) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        const limiteNumerico = numericValue.slice(0, 4);
        const valorFormatado = formatarHora(limiteNumerico);
        setFunction(valorFormatado);
    }, []);

    const formatarHora = (value) => {
        if (value.length <= 2) {
            return value;
        } else {
            const hora = value.slice(0, 2);
            const minutos = value.slice(2);
            return `${hora}:${minutos}`;
        }
    };

    const calcularMeta = useCallback(() => {
        const calculo = peso * 35;
        setMeta(calculo);
    }, [peso]);

    useEffect(() => {
        calcularMeta();
    }, [calcularMeta]);

    const criarConta = useCallback(async () => {
        const userId = await AsyncStorage.getItem('userId');
        setLoading(true)

        try {
            const response = await fetch(`http://aguaprojeto.onrender.com/usuarioconfig/${userId}`, {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    pesoAtual: peso,
                    horarioAcordar,
                    horarioDormir,
                    metaDiaria: meta,
                }),
            });

            if (!response.ok) {
                console.error(`Erro do servidor: ${response.status}`);
            } else {
                const json = await response.json();
                console.log(json);
                navigation.navigate('TelaMeta');
            }
        } catch (error) {
            console.error('Erro ao criar conta:', error);
        } finally {
            setLoading(false)
        }
    }, [navigation, peso, horarioAcordar, horarioDormir, meta]);

    const tst = GoogleFonts();

    return tst ? (
        <View style={style.container}>
            <View style={style.containerSecundario}>
                <Text style={style.titulo}>Qual horário você dorme e acorda?</Text>

                <View style={style.containerAviso}>
                    <Text style={style.aviso}>A pergunta visa evitar notificações durante o sono para não atrapalhar o descanso.</Text>
                </View>

                <View>
                    <View style={style.containerInformacao}>
                        <Text style={style.textoInformacao}>Acordar</Text>
                        <Text style={style.textoInformacao}>Dormir</Text>
                    </View>
                    <View style={style.containerHorarios}>
                        <View style={style.containerInputs}>
                            <TextInput
                                style={style.inputHorario}
                                placeholder='06:00'
                                keyboardType='numeric'
                                maxLength={5}
                                value={horarioAcordar}
                                onChangeText={(text) => handleTrocaInput(text, setHorarioAcordar)}
                            />
                        </View>
                        <View style={style.containerInputs}>
                            <TextInput
                                style={style.inputHorario}
                                placeholder='00:00'
                                keyboardType='numeric'
                                maxLength={5}
                                value={horarioDormir}
                                onChangeText={(text) => handleTrocaInput(text, setHorarioDormir)}
                            />
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={style.botao} onPress={criarConta}>
                    {isLoading ? <ActivityIndicator size={"small"} /> : <Text style={style.textoBotao}>Finalizar</Text>}
                </TouchableOpacity>
            </View>
        </View>
    ) : null;
}

export default Horarios;


