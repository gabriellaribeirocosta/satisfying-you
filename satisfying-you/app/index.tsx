import { StyleSheet, View, Text } from 'react-native'
import { theme } from '@/constants/theme'

export default function Login() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Satisfying.you</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.purple,
    flex: 1
  },
  title: {
    color: theme.colors.text,
    fontSize: 64,
    fontWeight: 400,
    textAlign: 'center'
  }

})
