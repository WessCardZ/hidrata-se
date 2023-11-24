import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import { ActivityIndicator, IconButton } from "react-native-paper";
import style from './style1';


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
        const options = { day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit' };
        const dataHoraConsumoFormatado = historico.toLocaleDateString('pt-BR', options);

        return (
            <View style={style.listahistorico}>
                <View>
                    <Text style={style.ml}>{quantidadeML}</Text>
                    <Text style={style.hora}>{dataHoraConsumoFormatado}</Text>
                </View>
                <View style={style.iconContainer}>
                    <IconButton icon={"pencil"} size={30} iconColor="#fff" />
                    <IconButton icon={"trash-can-outline"} size={30} iconColor="#FF8080" />
                </View>

            </View>
        )
    }

    useEffect(() => {
        getHistorico();
    }, []);

    let [fontsLoaded, fontError] = useFonts({
        Montserrat_700Bold, Montserrat_400Regular
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return (
        <View style={style.container}>
            <Text style={style.textoregistro}>Registros</Text>
            <View style={style.containermeio}>
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





export default Telahistorico;
