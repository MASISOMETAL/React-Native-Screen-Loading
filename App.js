import React, { useState, useEffect } from 'react'
import * as SplashScreen from "expo-splash-screen"
import { useFonts, Lora_400Regular, Lora_700Bold } from '@expo-google-fonts/lora'
import { Home, Loading } from './src/screens';
import { SafeAreaView, Platform, StatusBar, View, Text } from 'react-native';



SplashScreen.preventAutoHideAsync();

const App = () => {

  const [load, setLoad] = useState(false);

  const [fontsLoaded] = useFonts({
    Lora_400Regular,
    Lora_700Bold,
  })

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {load ? (
        <SafeAreaView style={{ flex: 1, marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0 }}>
          <Home />
        </SafeAreaView>
      ) : (
          <Loading setLoad={setLoad} />
      )}
    </>
  )
}

export default App