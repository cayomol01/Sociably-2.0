import * as Font from "expo-font";

export default async function useFonts() {
    await Font.loadAsync({'Space Grotesk': require('../assets/fonts/SpaceGrotesk.ttf')})
};
