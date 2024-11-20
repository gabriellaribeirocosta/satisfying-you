import { Stack } from 'expo-router'
import * as ScreenOrientation from 'expo-screen-orientation'
import { useEffect } from 'react'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'
import { theme } from '@/constants/theme'
import Login from './index'
import { MaterialIcons } from '@expo/vector-icons'

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
        headerShown: true,
        headerStyle: { backgroundColor: theme.colors.darkPurple },
        headerTintColor: theme.colors.purple,
        headerTitleStyle: { fontSize: 20, fontFamily: 'Averia', color: theme.colors.white },
      }}
    >
      <Stack.Screen name='index' options={{headerShown: false}}/>
      <Stack.Screen name='screens/Home' options={{ 
        title: '', 
        headerBackVisible: false, 
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={30}
            color="white"
            style={{ marginLeft: 10 }}
            onPress={()=> {}}
          />
        )}}/>
      <Stack.Screen name= 'screens/SignUp' options={{ title: 'Nova Conta' }}/>
      <Stack.Screen name='screens/RecuperarSenha' options={{ title: 'Recuperação de Senha' }}/>
      <Stack.Screen name='screens/NewSearch' options={{ title: 'Nova Pesquisa' }}/>
      <Stack.Screen name='screens/EditSearch' options={{ title: 'Modificar Pesquisa' }}/>
      <Stack.Screen name='screens/Report' options={{ title: 'Relatório' }}/>
      <Stack.Screen name='screens/ActionSearch' options={{ title: 'Pesquisa' }}/>
    </Stack>
  )
}