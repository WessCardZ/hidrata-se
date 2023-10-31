import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { ActivityIndicator, IconButton } from "react-native-paper";
import style from './style1';


const Item = ({ ml, hora, nomeIcone, nomeIcone2 }) => (
    <View style={style.listahistorico}>
        <View style={style.textContainer}>
            <Text style={style.ml}>{ml}</Text>
            <Text style={style.hora}>{hora}</Text>
        </View>
        <View style={style.iconContainer}>
            <IconButton icon={nomeIcone} size={30} iconColor="#fff" />
            <IconButton icon={nomeIcone2} size={30} iconColor="#fff" />
        </View>
    </View>
);

const Telahistorico = () => {
    const [isLoading, setLoading] = useState(true);
    const [historico, setHistorico] = useState([]);

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

    const Historico = ({ quantidadeML, dataHoraConsumo }) => {
        const historico = new Date(dataHoraConsumo);
        const options = { day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' };
        const dataHoraConsumoFormatado = historico.toLocaleDateString('pt-BR', options);

        return (
            <Text>
                {quantidadeML}, {dataHoraConsumoFormatado}
            </Text>
        )
    }

    useEffect(() => {
        getHistorico();
    }, []);

    return (
        <View style={style.container}>
            <Text style={style.textoregistro}>Registros</Text>
            <View style={style.containermeio}>
                {isLoading ? (
                    <ActivityIndicator />
                ) : (
                    <FlatList
                        data={historico}
                        keyExtractor={({ id }) => id}
                        renderItem={({ item }) => (
                            <Historico dataHoraConsumo={item.dataHoraConsumo} quantidadeML={item.quantidadeML} />
                        )}
                    />)}
            </View>
        </View>
    );
};





export default Telahistorico;
