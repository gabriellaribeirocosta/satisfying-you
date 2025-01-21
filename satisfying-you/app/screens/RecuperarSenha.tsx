import { StyleSheet, View } from 'react-native'
import { theme } from '@/constants/theme'
import { Btn } from '@/components/Btn'
import { Input } from '@/components/Input'
import { sendPasswordResetEmail } from 'firebase/auth'
import { auth_mod } from '../../firebase/config'
import { useState } from 'react'
import { ErrorMessage } from '@/components/ErrorMessage'
import { useRouter } from 'expo-router'

export default function RecuperarSenha() {
  const router = useRouter();
  const [email, setEmail] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  const handleRecuperar = () => {
    sendPasswordResetEmail(auth_mod, email)
    .then(() => {
      console.log('e-mail de confirmação enviado com sucesso')
      setErrorMessage('')
      router.push('/');
    })
    .catch((error) => {
      setErrorMessage('Este e-mail não existe')
      console.log('erro no email: ' + error)
    })
  }

  return (
    <View style={styles.container}>
        <View style={styles.inputs}>
          <Input label={'E-mail'} value={email} onChangeText={setEmail}></Input>
          <ErrorMessage message={errorMessage}></ErrorMessage>
          <Btn title={'Recuperar'} onPress={handleRecuperar}></Btn>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.purple,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    marginTop: -60
  },
  content:{
    
  },
  title: {
    color: theme.colors.white,
    fontSize: 64,
    fontFamily: 'Averia'
  },
  inputs: {
    width: '60%',
    gap: 20
  }
})
