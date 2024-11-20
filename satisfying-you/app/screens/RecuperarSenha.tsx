import { StyleSheet, View, Text } from 'react-native'
import { theme } from '@/constants/theme'
import { Btn } from '@/components/Btn'
import { Input } from '@/components/Input'

export default function Login() {

  function handleRecuperar() {

  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputs}>
          <Input label={'E-mail'}></Input>
          <Btn title={'Recuperar'} style={{marginTop: 20}} onPress={handleRecuperar}></Btn>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.purple,
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    width: '100%'
  },
  content:{
    width: '100%',
    paddingRight: 200,
    paddingLeft: 200,
    marginTop: 65,
  },
  title: {
    color: theme.colors.white,
    fontSize: 64,
    fontFamily: 'Averia'
  },
  inputs: {
    gap: 20,
    marginTop: 10
  }
})
