import { StyleSheet, View } from 'react-native'
import { theme } from '@/constants/theme'
import { Btn } from '@/components/Btn'
import { Input } from '@/components/Input'

export default function RecuperarSenha() {

  function handleRecuperar() {
    
  }

  return (
    <View style={styles.container}>
        <View style={styles.inputs}>
          <Input label={'E-mail'}></Input>
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
