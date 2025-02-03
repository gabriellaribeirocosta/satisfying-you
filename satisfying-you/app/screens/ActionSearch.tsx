import { StyleSheet, View } from 'react-native'
import { theme } from '@/constants/theme'
import { CardOp } from '@/components/CardOp';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useState } from 'react';

export default function ActionSearch() {
  const [ myId, setMyId ] = useState("")

  const router = useRouter();

  const params = useLocalSearchParams()
  const {id} = params

  //guarda ID
  useEffect(() => {
    if (id) {
      setMyId(id);
      console.log(id);
    }
  }, [id]);

  //passa o ID da pesquisa
  const handlePress = (path:string) => {
    router.push({
        pathname: path,
        params: { id: myId }
    });
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        
        <CardOp onPress={() => handlePress('/screens/EditSearch')} icon="file-document-edit-outline" text="Modificar"></CardOp>
        <CardOp onPress={() => handlePress('/screens/Coleta')} icon="checkbox-multiple-marked-outline" text="Coletar dados"></CardOp>
        <CardOp onPress={() => handlePress('/screens/Report')} icon="chart-donut" text="Relatório"></CardOp>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.purple,
    flex: 1,
    paddingBottom: 10,
    width: '100%'
  },
  content:{
    width: '100%',
    height: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
})
