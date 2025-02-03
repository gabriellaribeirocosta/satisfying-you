import { StyleSheet, View, Text, Image } from 'react-native';
import { theme } from '@/constants/theme';
import { useEffect, useState } from 'react';
import { collection, doc, onSnapshot, query } from 'firebase/firestore';
import { db } from '@/firebase/config';
import { useLocalSearchParams } from 'expo-router';

export default function Report() {
  const [valor, setValor] = useState([])

  const colors = ['#F1CE7E', '#6994FE', '#EA7288', '#5FCDA4', '#53D8D8']; 

  const legendItems = [
    { label: 'Excelente', color: colors[0] },
    { label: 'Bom', color: colors[1] },
    { label: 'Neutro', color: colors[2] },
    { label: 'Ruim', color: colors[3] },
    { label: 'Péssimo', color: colors[4] },
  ];

  console.log("=====================================")

  const params = useLocalSearchParams();
  const { id } = params;

  //const coletaDocRef = doc(db, "nova pesquisa", id)
  const coletaCollection = collection(db, "nova pesquisa/" + id + "/coletar")
  //console.log(coletaDocRef)
  //console.log(coletaCollection)

  useEffect(() => {
    const q = query(coletaCollection)
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const valores = []
      snapshot.forEach((doc) => {
        valores.push({
          id: doc.id,
          ...doc.data()
        });
      })
      setValor(valores)
    })
  }, [])

  console.log(valor)

  return (
    <View style={styles.container}>
        <View style={styles.image}>  
            <Image
                source={require('../../public/images/piechart.png')}
                style={{ width: 270, height: 270 }}
            />
        </View>  
        <View style={styles.legenda}>
            {legendItems.map((item, index) => (
            <View style={styles.legendaItem} key={index}>
                <View style={[styles.square, { backgroundColor: item.color }]}></View>
                <Text style={styles.texto}>{item.label}</Text>
            </View>
            ))}
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.colors.purple,
        flex: 1,
        alignItems: 'center',
        paddingTop: 10, 
        paddingBottom: 70, 
        width: '100%',
    },
    legenda: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 10, 
    },
    legendaItem: {
        flexDirection: 'row',
        marginVertical: 5, 
    },
    texto: {
        color: theme.colors.white,
        fontSize: 22,
        fontFamily: 'Averia',
        textAlign: 'center',
        margin: '1%',
    },
    square: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    image: {
        width: '60%',
        paddingLeft: '10%',
        alignItems: 'center'
    }
});
  