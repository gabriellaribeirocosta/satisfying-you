import { StyleSheet, View, Text } from 'react-native'
import { theme } from '@/constants/theme'
import { Btn } from '@/components/Btn'
import { Input } from '@/components/Input'
import { useState } from 'react';
import { useRouter } from 'expo-router';
import { ErrorMessage } from '@/components/ErrorMessage';

export default function SignUp() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [error, setError] = useState('');  

  const handleCadastrar = () => {
    // Verificação se todos os campos foram preenchidos
    if (!email || !senha || !confSenha) {
      setError('Por favor, preencha todos os campos.');
      return; 
    }

    // Verificação se as senhas coincidem
    if (senha !== confSenha) {
      setError('O campo repetir senha se difere da senha');
      return; 
    }

    setError('');
    router.push('screens/Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.inputs}>
          <Input 
            label={'E-mail'} 
            value={email} 
            onChangeText={setEmail} 
          />
          <Input 
            label={'Senha'} 
            secureText={true} 
            value={senha} 
            onChangeText={setSenha} 
          />
          <Input 
            label={'Repetir senha'} 
            secureText={true} 
            value={confSenha} 
            onChangeText={setConfSenha} 
          />
        </View>

        {error ? <ErrorMessage message={error}/> : null}

        <View style={styles.cadastrarBt}>
          <Btn title={'Cadastrar'} onPress={handleCadastrar}></Btn>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.purple,
    flex: 1,
    paddingTop: 10,
    paddingBottom: 10,
    width: '100%'
  },
  content: {
    width: '100%',
    paddingRight: 200,
    paddingLeft: 200,
  },
  inputs: {
    gap: 14,
    marginTop: 15
  },
  cadastrarBt: {
    marginTop: 20
  },
  errorText: {
    color: theme.colors.red,
    fontFamily: 'Averia',
    fontSize: 14,
    textAlign: 'left',
  }
})
