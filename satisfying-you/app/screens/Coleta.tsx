import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { theme } from '@/constants/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { addDoc, collection, doc, getDoc } from 'firebase/firestore';
import { app, auth_mod, db } from '@/firebase/config';
import { useEffect, useState } from 'react';

export default function Coleta() {

  const [ nome, setNome] = useState("")

  const router = useRouter();

  const handleIconPress = () => {
    // Redirection to acknowledment page 
    router.push('/screens/Acknowledgements');
    // Wait for 3 seconds, then returns to Coleta
    setTimeout(() => {
      router.replace('/screens/Coleta');
    }, 3000);
  };

  const params = useLocalSearchParams();
  const { id } = params;

  const user = auth_mod.currentUser
  const uid = user.uid

  async function fetchDocument(){

    const docRef = doc(db, "nova pesquisa", id)      
          
    try {
      const docSnap = await getDoc(docRef); // Aguarda a busca do documento
      
      if (docSnap.exists()) {
        const data = docSnap.data(); // Obtém os dados do documento
        //console.log("Dados do documento:", data);
        setNome(data.nome || '');
        //console.log(nome)
      }
    } catch (error) {
      console.error("Erro ao buscar o documento:", error);
    }
  }

  useEffect(() => {
    if (id) {
      fetchDocument(id);
    }
  }, [id]);

  //Funcionou
  const coletaCollections = collection(db, "nova pesquisa/" + id + "/coletar")

  const addColeta = (valor) => {
    
    addDoc(coletaCollections, {
        nota: valor
    }).then((docRef) => {
        //console.log("Novo documento inserido: " + JSON.stringify(docRef))
    }).catch((err) => {
        console.log("Erro: " + err)
    })

    handleIconPress()
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>O que você achou do {nome}</Text>
      </View>
      <View style={styles.content}>
        <TouchableOpacity style={styles.icon} onPress={() => {addColeta(1)}}>
          <MaterialIcons name="sentiment-very-dissatisfied" size={75} color="red" />
          <Text style={styles.label}>Péssimo</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => {addColeta(2)}}>
          <MaterialIcons name="sentiment-dissatisfied" size={75} color="tomato" />
          <Text style={styles.label}>Ruim</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => {addColeta(3)}}>
          <MaterialIcons name="sentiment-neutral" size={75} color="yellow" />
          <Text style={styles.label}>Neutro</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => {addColeta(4)}}>
          <MaterialIcons name="sentiment-satisfied" size={75} color="#2d9923" />
          <Text style={styles.label}>Bom</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon} onPress={() => {addColeta(5)}}>
          <MaterialIcons name="sentiment-very-satisfied" size={75} color="green" />
          <Text style={styles.label}>Excelente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.purple,
    flex: 1,
    paddingTop: 30,
    paddingBottom: 20,
    width: '100%',
  },
  header: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '4%',
    gap: 48,
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    padding: 10,
    flexWrap: 'wrap',
  },
  icon: {
    flexDirection: 'column',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  title: {
    color: theme.colors.white,
    fontSize: 36,
    fontFamily: 'Averia',
  },
  label: {
    color: theme.colors.white,
    fontSize: 28,
    fontFamily: 'Averia',
  },
});
