import { StyleSheet, View, Text } from 'react-native'
import { theme } from '@/constants/theme'
import { useRouter } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import { Btn } from '@/components/Btn'
import { Input } from '@/components/Input'

export default function Login() {
  const router = useRouter();
  
  function handleEntrar() {
    router.push('/screens/Home')
  }

  function handleRegistro() {
    router.push('/screens/SignUp')
  }

  function handleRedefinir() {
    router.push('/screensRecuperarSenha')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Satisfying.you</Text>
        <MaterialIcons name="sentiment-satisfied" size={45} color="#fff" />
      </View>
      <View style={styles.content}>
        <View style={styles.inputs}>
          <Input label={'E-mail'}></Input>
          <Input label={'Senha'} secureText={true}></Input>
          <Btn title={'Entrar'} onPress={handleEntrar}></Btn>
        </View>
        <Btn title={'Criar minha conta'} onPress={handleRegistro} style={styles.registro}></Btn>
        <Btn title={'Esqueci minha senha'} onPress={handleRedefinir} style={styles.redefinir}></Btn>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.purple,
    flex: 1,
    paddingTop: 20,
    paddingBottom: 10,
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 24,
    alignItems: 'center'
  },
  content:{
    width: '100%',
    paddingRight: 200,
    paddingLeft: 200,
  },
  title: {
    color: theme.colors.white,
    fontSize: 36,
    fontFamily: 'Averia'
  },
  registro: {
    backgroundColor: theme.colors.blue,
    height: 27,
    marginTop: 36,
    marginBottom: 8
  },
  redefinir: {
    backgroundColor: theme.colors.gray,
    height: 27
  },
  inputs: {
    gap: 14,
    marginTop: 15
  }
})
