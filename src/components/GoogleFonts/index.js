import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_500Medium } from "@expo-google-fonts/montserrat";
import { Roboto_400Regular } from '@expo-google-fonts/roboto';
const GoogleFonts = () => {
    let [fontsLoaded, fontError] = useFonts({
        Montserrat_700Bold, Roboto_400Regular, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_500Medium
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return fontsLoaded



}

export default GoogleFonts;