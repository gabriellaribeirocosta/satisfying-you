import { StyleSheet, View, Text } from 'react-native'
import { theme } from '@/constants/theme'
import { MaterialIcons } from '@expo/vector-icons'
import { Btn } from '@/components/Btn'
import { Input } from '@/components/Input'

export default function Login() {
  
  function handleEntrar() {

  }

  function handleRegistro() {

  }

  function handleRedefinir() {

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Satisfying.you</Text>
        <MaterialIcons name="sentiment-satisfied" size={75} color="#fff" />
      </View>
      <View style={styles.content}>
        <View style={styles.inputs}>
          <Input label={'E-mail'}></Input>
          <Input label={'Senha'}></Input>
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
    paddingTop: 30,
    paddingBottom: 20,
    width: '100%'
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 48,
  },
  content:{
    width: '100%',
    paddingRight: 200,
    paddingLeft: 200,
  },
  title: {
    color: theme.colors.white,
    fontSize: 64,
    fontFamily: 'Averia'
  },
  registro: {
    backgroundColor: theme.colors.blue,
    height: 37,
    marginTop: 62,
    marginBottom: 14
  },
  redefinir: {
    backgroundColor: theme.colors.gray,
    height: 37
  },
  inputs: {
    gap: 20,
    marginTop: 35
  }
})
