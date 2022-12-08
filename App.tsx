import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from "react";


SplashScreen.preventAutoHideAsync();

export default function App() {

    const [fontsLoaded] = useFonts({
        'Space Grotesk': require('./assets/fonts/SpaceGrotesk-VariableFont_wght.ttf')
    })

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded){
        return null;
    }

    return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>

        <TouchableOpacity style={styles.button} onPress={()=>{console.log("A")} }>
            <Text style={{fontFamily: 'Space Grotesk', fontSize: 26, color: '#C15548'}}>
                Skip
            </Text>
        </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button:{
        width: '90%',
        height: '6vh',
        backgroundColor: 'white',
        borderColor: '#C15548',
        borderWidth: 2,
        alignItems: "center",
        justifyContent: "center"
    }
});
