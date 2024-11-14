import { Stack } from 'expo-router'
import * as ScreenOrientation from 'expo-screen-orientation'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function Layout() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);

  const [fontsLoaded] = useFonts({
    Averia: require('../assets/fonts/AveriaLibre-Regular.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  
  return (
    <Stack screenOptions={{
        headerShown: false,
      }}
    />
  )
}