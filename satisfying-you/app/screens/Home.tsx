import { StyleSheet, View, Text, ScrollView, TextInput, FlatList, TouchableOpacity} from "react-native";
import { theme } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Btn } from "@/components/Btn";
import { useRouter } from "expo-router";
import { Card } from "@/components/Card";
import { query, onSnapshot, initializeFirestore, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { app, db } from '../../firebase/config'
import React from "react";

export default function Home () {
    const router = useRouter();
    const searchCollection = collection(db, "nova pesquisa");
    const [listaPesquisas, setListaPesquisas] = useState([])
    const [listaId, setListaId] = useState([])

    function handleNovaPes(){
        router.push('/screens/NewSearch');
    }

    function handleAcoes(id: string) {
        router.push({
            pathname: '/screens/ActionSearch',
            params: { id: listaId[id] }
        });
    }

    useEffect( () => {
        const q = query(searchCollection)
        const unsubscribe = onSnapshot(q, (snapshot) => {

            const search = [];
            const ids = []

            snapshot.forEach((doc) => {
                search.push({
                    id: doc.id,
                    ...doc.data()
                })

                ids.push(doc.id)
            })


            setListaId(ids)
            setListaPesquisas(search)
        })

        return () => unsubscribe();
    }, [])

    console.log(listaId)

    const itemPesquisa = ({item}) => {
        return(
            <Card 
                nome={item.nome}
                data={item.data}
                onPress={() => {changePesquisa(item.id)}}
                icon={item.imagemBase64}
            />
            
            
        )
    }


    return(
        <View style={styles.container}>
            <View style={{flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f2', paddingHorizontal: 10, marginHorizontal: 20, marginBottom: 30, marginTop: 5, borderRadius: 2}}>
                <MaterialIcons name="search" size={24} color="#ccc" />
                <TextInput style={styles.search} placeholder="Insira o termo de busca..."/>
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
                    <View style={styles.cards}>
                        {listaPesquisas.map((item, index) => (
                            <Card 
                                key={item.id} 
                                nome={item.nome} 
                                data={item.data} 
                                onPress={() => {handleAcoes(index)}} 
                                image={item.imagemBase64} 
                            />
                        ))}
                    </View>
                </ScrollView>
                
            </View>
            <View>
                <Btn title={"Nova Pesquisa"} style={{marginTop: 20, width: '90%', marginLeft: 40 }} onPress={handleNovaPes}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: theme.colors.purple,
        flex: 1,
        width: '100%',
        margin: 0,
        top: 0,
    },
    search: {
        fontFamily: 'Averia',
        fontSize: 16,
        color: '#333'
    },
    scroll: {
        marginLeft: 20
    },
    cards: {
        flexDirection: 'row',
        gap: 30
    }
})