import { Text, View } from "react-native";
import { FontAwesome } from '@expo/vector-icons'
import { useFonts, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import style from './style'

export default function Perfil() {

    let [fontsLoaded, fontError] = useFonts({
        Montserrat_700Bold 
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
                <View style={style.horario}>
                    <View style={style.grupoTexto}>
                        <Text style={style.titulo}>Horários de dormir e acordar</Text>
                        <Text style={style.subtitulo}>Poderá modificar o horário de acordar e dormir</Text>
                    </View>
                </View>

                <View style={style.lembretes}>
                    <View style={style.grupoTexto}>
                        <Text style={style.titulo}>Lembretes</Text>
                        <Text style={style.subtitulo}>Poderá modificar o horário que será notificado para beber água</Text>
                    </View>
                </View>

                <View style={style.meta}>
                    <View style={style.grupoTexto}>
                        <Text style={style.titulo}>Meta</Text>
                        <Text style={style.subtitulo}>Poderá modificar o seu consumo ideal de acordo com sua preferência</Text>
                    </View>
                </View>

                <View style={style.peso}>
                    <View style={style.grupoTexto}>
                        <Text style={style.titulo}>Peso</Text>
                        <Text style={style.subtitulo}>Poderá modificar o seu peso</Text>
                    </View>
                </View>

                <View style={style.som}>
                    <View style={style.grupoTexto}>
                        <Text style={style.titulo}>Sons e Vibração</Text>
                        <Text style={style.subtitulo}>Poderá modificar se deseja uma notificção com som ou com vibração</Text>
                    </View>
                </View>

            </View>
        </View >
    )
}

