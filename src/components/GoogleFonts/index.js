import { useFonts, Montserrat_700Bold, Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_500Medium } from "@expo-google-fonts/montserrat";

const GoogleFonts = () => {
 let [fontsLoaded, fontError] = useFonts({
        Montserrat_700Bold
    })

    if (!fontsLoaded && !fontError) {
        return null;
    }

    return fontsLoaded


    
  }

  export default GoogleFonts;