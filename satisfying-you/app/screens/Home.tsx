import { StyleSheet, View, Text, ScrollView, TextInput} from "react-native";
import { theme } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Btn } from "@/components/Btn";
import { useRouter } from "expo-router";
import { Card } from "@/components/Card";

export default function Home () {
    const router = useRouter();
    function handleNovaPes(){
        router.push('/screens/NewSearch');
    }

    function handleAcoes() {
        router.push('/screens/ActionSearch')
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
                        <Card nome={'Secomp 2023'} data={'10/10/2023'} onPress={handleAcoes} icon={'devices'}></Card>
                        <Card nome={'Ubuntu 2022'} data={'05/06/2022'} onPress={handleAcoes} icon={'groups'}></Card>
                        <Card nome={'Meninas CPU'} data={'01/04/2022'} onPress={handleAcoes} icon={'woman'} ></Card>
                        <Card nome={'Secomp 2023'} data={'10/10/2023'} onPress={handleAcoes} icon={'devices'}></Card>
                        <Card nome={'Ubuntu 2022'} data={'05/06/2022'} onPress={handleAcoes} icon={'groups'}></Card>
                        <Card nome={'Meninas CPU'} data={'01/04/2022'} onPress={handleAcoes} icon={'woman'} ></Card>
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