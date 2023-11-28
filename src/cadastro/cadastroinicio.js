import { View, Text, Pressable,} from 'react-native';
import { Button } from 'react-native-paper';
import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { StyleSheet } from 'react-native';
import style from './style.js'



function Cadastroinicio(){
    let [fontsLoaded, fontError] = useFonts({
        Montserrat_700Bold
    });

    if (!fontsLoaded && !fontError) {
        return null;
    }
    return (
        <View style={style.container}>
            <Text style={style.texto}> Vamos começar </Text>

        <View style={style.continainer2}>
        <Button style={style.Button} mode="contained" buttonColor='#00A1FF' onPress={() => console.log('Pressed')}>
        Proximo
        </Button>
        </View>
        </View>

    )
  }


  export default Cadastroinicio



//   function app(){
//     return(
//       <View style={{flex: 1}}>
//         <Cadastroinicio/>
//       </View>
//     )
//   }
  
//   export default app
  
