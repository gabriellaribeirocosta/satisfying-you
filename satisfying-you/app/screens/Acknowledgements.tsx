import { StyleSheet, View, Text } from 'react-native';
import { theme } from '@/constants/theme';

export default function Acknowledgements() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Obrigado por participar da pesquisa!</Text>
      <Text style={styles.texto}>Aguardamos você no próximo ano!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.purple,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30,
    paddingBottom: 20,
    width: '100%',
  },
  texto: {
    color: theme.colors.white,
    fontSize: 36,
    fontFamily: 'Averia',
    textAlign: 'center',
    margin: '2%'
  },
});
