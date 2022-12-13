import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context'
import * as SplashScreen from 'expo-splash-screen';

import { useFonts } from 'expo-font';
import { useCallback } from "react";

import NavigationIndex from './navigation/navigationIndex'

SplashScreen.preventAutoHideAsync();

export default function App() {

    const [fontsLoaded] = useFonts({
        'Space Grotesk': require('./assets/fonts/SpaceGrotesk.ttf')
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
        <SafeAreaProvider>
            <NavigationIndex/>
            <StatusBar style="auto" />
        </SafeAreaProvider>
  );
}
