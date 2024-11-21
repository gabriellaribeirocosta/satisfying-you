import { StyleSheet, View, Text, ScrollView, TextInput} from "react-native";
import { theme } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Btn } from "@/components/Btn";
import { useRouter } from "expo-router";

export default function Home () {
    const router = useRouter();
    function handleNovaPes(){
        router.push('/screens/NewSearch');
    }

    return(
        <View style={styles.container}>
            <View style={{height: '12%', flexDirection: 'row', alignItems: 'center', backgroundColor: '#f2f2f2', paddingHorizontal: 10, marginHorizontal: 10, marginBottom: 10, marginTop: 5, borderRadius: 2}}>
                <MaterialIcons name="search" size={20} color="#ccc" />
                <TextInput style={styles.search} placeholder="Insira o termo de busca..."/>
            </View>
            <View>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.block}>
                    <MaterialIcons name="laptop" size={50} color="#362828" />
                    <Text style={styles.text}>SECOMP 2023</Text>
                    <Text style={styles.date}>10/10/2023</Text>
                </View>
                <View style={styles.block}>
                    <FontAwesome name="users" size={50} color="black" />
                    <Text style={styles.text}>UBUNTU 2022</Text>
                    <Text style={styles.date}>05/06/2022</Text>
                </View>
                <View style={styles.block}>
                    <FontAwesome name="female" size={50} color="red" />
                    <Text style={styles.text}>MENINAS CPU</Text>
                    <Text style={styles.date}>01/04/2022</Text>
                </View>
                <View style={styles.block}>
                    <MaterialIcons name="book" size={50} color="#404267" />
                    <Text style={styles.text}>FECHANDO PORTAS</Text>
                    <Text style={styles.date}>03/05/2023</Text>
                </View>
                <View style={styles.block}>
                    <MaterialIcons name="lock" size={50} color="brown" />
                    <Text style={styles.text}>SALA DE ESCAPE</Text>
                    <Text style={styles.date}>07/10/2023</Text>
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
    block: {
        width: 160,
        height: 160,
        backgroundColor: 'white',
        borderRadius: 10,
        padding: 10,
        marginTop: 12,
        marginHorizontal: 10, 
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 3, 
    },
    text: {
      fontFamily: 'Averia',
      color: theme.colors.blue,
      fontSize: 20,
      marginTop: 5,
    },
    date: {
      fontFamily: 'Averia',
      color: theme.colors.gray,
      fontSize: 12,
    },
    title: {
        color: 'blue',
        fontSize: 16,
    },
    search: {
        flex: 1,
        paddingTop: 4,
        fontFamily: 'Averia',
        paddingBottom: 4,
        fontSize: 16,
        color: '#333',
    },
})