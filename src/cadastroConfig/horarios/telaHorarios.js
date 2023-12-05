import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import style from './style.js';
import GoogleFonts from '../../components/GoogleFonts/index.js';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect, useState } from 'react';

function Horarios() {
    const navigation = useNavigation()
    const [horarioAcordar, setHorarioAcordar] = useState('')
    const [horarioDormir, setHorarioDormir] = useState('')
    const [meta, setMeta] = useState(0)
    const route = useRoute();
    const { peso } = route.params;

    const handleTrocaInputAcordar = (text) => {
        //Remove qualquer caractere não numerico
        const numericValue = text.replace(/[^0-9]/g, '')

        // Garante que vai ta limitado a 4 dígitos
        const limiteNumerico = numericValue.slice(0, 4)

        const valorFormatado = formatarHora(limiteNumerico)

        setHorarioAcordar(valorFormatado)
    }

    const handleTrocaInputDormir = (text) => {
        //Remove qualquer caractere não numerico
        const numericValue = text.replace(/[^0-9]/g, '')

        // Garante que vai ta limitado a 4 dígitos
        const limiteNumerico = numericValue.slice(0, 4)

        const valorFormatado = formatarHora(limiteNumerico)

        setHorarioDormir(valorFormatado)
    }

    const formatarHora = (value) => {
        if (value.length <= 2) {
            return value
        } else {
            const hora = value.slice(0, 2)
            const minutos = value.slice(2)
            return `${hora}:${minutos}`
        }
    }

    const calcularMeta = () => {
        const calculo = peso * 35
        setMeta(calculo)
    }

    useEffect(() => {
        calcularMeta()
    }, [])


    const criarConta = async () => {
        try {
            const response = await fetch('http://aguaprojeto.onrender.com/usuario', {
                method: 'POST',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify({
                    pesoAtual: peso,
                    horarioAcordar: horarioAcordar,
                    horarioDormir: horarioDormir,
                    metaDiaria: meta
                }),
            })
            if (!response.ok) {
                console.error(`Erro do servidor: ${response.status}`)
            } else {
                const json = await response.json();
                console.log(json)

                navigation.navigate('TelaMeta')
            }
        } catch (error) {
            console.error('erro ao criar conta:', error)
        }
    }


    const tst = GoogleFonts()

    if (!tst) {
        return null
    }
    return (
        <View style={style.container}>
            <View style={style.containerSecundario}>
                <Text style={style.titulo}>Qual horário você dorme e acorda?</Text>
                <Text>{`Peso recebido: ${peso} Kg`}</Text>
                <Text>{`Meta de água: ${meta}`}</Text>

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
                                onChangeText={handleTrocaInputAcordar}></TextInput>
                        </View>
                        <View style={style.containerInputs}>
                            <TextInput
                                style={style.inputHorario}
                                placeholder='24:00'
                                keyboardType='numeric'
                                maxLength={5}
                                value={horarioDormir}
                                onChangeText={handleTrocaInputDormir}></TextInput>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={style.botao} onPress={() => criarConta()}>
                    <Text style={style.textoBotao}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}


export default Horarios


