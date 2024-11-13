import { Stack,  } from 'expo-router';
import * as ScreenOrientation from 'expo-screen-orientation';
import { useEffect } from 'react';

export default function Layout() {
  useEffect(() => {
    ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
  }, []);
  
  return (
    <Stack screenOptions={{
      headerShown: false,
    }}/>
  )
}