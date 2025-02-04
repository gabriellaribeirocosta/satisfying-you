import { StyleSheet, View, Text } from 'react-native'
import { theme } from '@/constants/theme'
import { useRouter } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'
import { Btn } from '@/components/Btn'
import { Input } from '@/components/Input'
import { ErrorMessage } from '@/components/ErrorMessage'
import { useState } from 'react'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth_mod } from '../firebase/config'

export default function Login() {
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const [errorMessage, setErrorMessage] = useState<string>('')
  const router = useRouter()

  function validaEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }
  
  const handleEntrar = () => {
    signInWithEmailAndPassword(auth_mod, email, senha)
      .then ((userLogged) => {
        console.log('usuário autenticado com sucesso: ' + userLogged)
        router.push('/Drawer')
      })
      .catch((error) => {
        if(!email || !senha) {
         setErrorMessage('Preencha todos os campos')
        } else if(email && !validaEmail(email)) {
         setErrorMessage('Insira um email válido')
        } else {
          setErrorMessage('E-mail e/ou senha estão incorretos')
          console.log('erro ao autenticar usuario: ' + error)
        }
      })

  }

  function handleRegistro() {
    router.push('/screens/SignUp')
  }

  function handleRedefinir() {
    router.push('/screens/RecuperarSenha')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Satisfying.you</Text>
        <MaterialIcons name="sentiment-satisfied" size={45} color="#fff" />
      </View>
      <View style={styles.content}>
        <View style={styles.inputs}>
          <Input label={'E-mail'} onChangeText={setEmail} value={email}></Input>
          <Input label={'Senha'} onChangeText={setSenha} secureText={true} value={senha}></Input>
        </View>
        <View style={styles.messageAndButton}>
          {errorMessage && <ErrorMessage message={errorMessage}></ErrorMessage>}
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
    height: 24,
    marginTop: 24,
    marginBottom: 8
  },
  redefinir: {
    backgroundColor: theme.colors.gray,
    height: 24
  },
  inputs: {
    gap: 12,
    marginTop: 15,
    marginBottom: 5
  },
  messageAndButton: {
    gap: 10
  }
})
