import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { useFonts, Montserrat_700Bold, Montserrat_400Regular } from "@expo-google-fonts/montserrat";
import style from './style'

export default function Perfil() {

    let [fontsLoaded, fontError] = useFonts({
        Montserrat_700Bold, Montserrat_400Regular
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
                        <Text style={style.numeracao}>230</Text>
                        <Text style={style.ml}>ml</Text>
                    </View>
                    <Text style={style.texto}>Total ingerido</Text>
                </View>
            </View>

            <View style={style.containerInferior}>
                <Lista
                    nomeIcone='check'
                    titulo='Horários de dormir e acordar'
                    subtitulo='Poderá modificar o horário de acordar e dormir'
                />
                <Lista
                    nomeIcone='bell'
                    titulo='Lembretes'
                    subtitulo='Poderá modificar o horário que será notificado para beber água'
                />
                <Lista
                    nomeIcone='check'
                    titulo='Meta'
                    subtitulo='Poderá modificar o seu consumo ideal de acordo com sua preferência'
                />
                <Lista
                    nomeIcone='check'
                    titulo='Peso'
                    subtitulo='Poderá modificar o seu peso'
                />
                <Lista
                    nomeIcone='check'
                    titulo='Sons e Vibração'
                    subtitulo='Poderá modificar se deseja uma notificção com som ou com vibração'
                />
            </View>
        </View >
    )
}

const Lista = ({ titulo, subtitulo, nomeIcone }) => {
    return (
        <View style={style.grupoPerfil}>
            <View style={{ justifyContent: 'center', paddingRight: 16 }}>
                <FontAwesome name={nomeIcone} size={24} color={'#fff'} />
            </View>
            <View style={style.grupoTexto}>
                <Text style={style.titulo}>{titulo}</Text>
                <Text style={style.subtitulo}>{subtitulo}</Text>
            </View>
        </View>
    );
}
