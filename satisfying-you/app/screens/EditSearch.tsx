import { StyleSheet, View, Text, TextInput } from 'react-native';
import { theme } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Btn } from "@/components/Btn";
import { useState } from 'react';

export default function EditSearch() {
    const [nome, setNome] = useState('');
    const [date, setDate] = useState('');
    const [errorNome, setErrorNome] = useState('');
    const [errorDate, setErrorDate] = useState('');

    const handleSave = () => {
        let valid = true;
        
        if (!nome.trim()) {
            setErrorNome('Preencha o nome da pesquisa');
            valid = false;
        } else {
            setErrorNome('');
        }
        if (!date.trim()) {
            setErrorDate('Preencha a data');
            valid = false;
        } else {
            setErrorDate('');
        }
        if (valid) {
            setErrorNome('');
            setErrorDate('');
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.div}></View>
            <View style={styles.content}>
                <Text style={styles.labelCal}>Nome</Text>
                <View style={styles.input}>
                    <TextInput
                            style={styles.inputCal}
                            value={nome}
                            onChangeText={(text) => {
                                setNome(text);
                                if (text.trim()) setErrorNome(''); 
                            }}
                        />
                    {errorNome ? <Text style={[styles.errorText, {top: 35}]}>{errorNome}</Text> : null}
                </View>

                <View style={styles.input}>
                    <Text style={styles.labelCal}>Data</Text>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.inputCal}
                            value={date}
                            onChangeText={(text) => {
                                setDate(text);
                                if (text.trim()) setErrorDate(''); 
                            }}
                        />
                        <MaterialIcons name="calendar-month" size={30} color='gray' style={styles.icon} />
                        {errorDate ? <Text style={[styles.errorText, {top: 35}]}>{errorDate}</Text> : null}
                    </View>
                </View>

                <View>
                    <Text style={styles.label}>Imagem</Text>
                    <View style={styles.img}>
                        <Text style={styles.cameraTxt}>Câmera/Galeria de imagens</Text>
                    </View>
                </View>
                <View style={styles.button}>
                    <Btn title="CADASTRAR" onPress={handleSave} />
                </View>                
            </View>
            <View style={styles.binDiv}></View>
        </View>
    );
}

const styles = StyleSheet.create({
    div: {
        width: '20%'
    },
    container: {
        backgroundColor: theme.colors.purple,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        justifyContent: 'flex-start',  
    },
    texto: {
        color: theme.colors.white,
        fontSize: 20,
        fontFamily: 'Averia',
        textAlign: 'center',
        margin: '2%'
    },
    label: {
        textAlign: 'left',
        color: theme.colors.white,
        fontSize: 18,
        fontFamily: 'Averia',
        marginBottom: 5, // Pequeno espaço entre o label e o input
    },
    img: {
        width: '50%',
        height: 70,
        backgroundColor: 'white', 
        justifyContent: 'center',
        alignItems: 'center', 
        marginBottom: 15,  // Adiciona um pequeno espaçamento abaixo da imagem
    },
    content: {
        width: '60%',
        justifyContent: 'flex-start', 
        marginTop: 10, 
    }, 
    input: {
        marginBottom: 15,  // Menor distância entre os campos
        position: 'relative',
    },
    button: {
        marginTop: 15,  // Menor margem para aproximar o botão
    },
    bin: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    binDiv: {
        alignItems: 'flex-end',
        width: '20%',
        height: '100%',
        padding: '2%',
        justifyContent: 'flex-end'
    },
    errorText: {
        color: theme.colors.red,
        fontFamily: 'Averia',
        fontSize: 14,
        textAlign: 'left',
        position: 'absolute',
        left: 0,
        right: 0,
    },
    inputCal: {
        backgroundColor: theme.colors.white,
        color: theme.colors.blue,
        fontFamily: 'Averia',
        fontSize: 14,
        height: 30,
        paddingLeft: 20, 
        paddingRight: 40, 
    },
    inputContainer: {
        position: 'relative', 
    },
    icon: {
        position: 'absolute',
        top: '50%', 
        right: 10, 
        transform: [{ translateY: -15 }], 
    },
    labelCal: {
        color: theme.colors.white,
        fontSize: 14,
        fontFamily: 'Averia',
        marginBottom: 5, // Pequeno espaço entre o label e o input
    },
    cameraTxt: {
        fontFamily: 'Averia',
        fontSize: 14,
        color: theme.colors.gray,
        textAlign: 'center',
        justifyContent: 'center'
    }
});
