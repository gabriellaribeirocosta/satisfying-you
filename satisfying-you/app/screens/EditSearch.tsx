import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { theme } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Btn } from "@/components/Btn";
import { useState } from 'react';
import { ErrorMessage } from '@/components/ErrorMessage';
import Popup from '@/components/Popup';

export default function EditSearch() {
    const [nome, setNome] = useState('');
    const [date, setDate] = useState('');
    const [errorNome, setErrorNome] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [modalIsOpen, setModalIsOpen] = useState(false);

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
    }

    function handleApagar() {

    }

    return (
        <View style={styles.container}>
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
                    {errorNome ? <ErrorMessage message={errorNome}/> : null}
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
                        {errorDate ? <ErrorMessage message={errorDate}/> : null}
                    </View>
                </View>

                <View>
                    <Text style={styles.label}>Imagem</Text>
                    <View style={styles.img}>
                        <MaterialIcons name="celebration" size={60} color="tomato" />
                    </View>
                </View>
                <View style={styles.button}>
                    <Btn title="SALVAR" onPress={handleSave} />
                </View>                
            </View>
            <View style={styles.binDiv}>
                <TouchableOpacity style={styles.bin} onPress={handleApagar}>
                    <MaterialIcons name="delete-outline" size={36} color="white"/>
                    <Text style={styles.texto}>Apagar</Text>
                </TouchableOpacity>
            </View>
            {modalIsOpen && <Popup></Popup>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.purple,
        flexDirection: 'row',
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -60
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
        fontSize: 16,
        fontFamily: 'Averia'
    },
    img: {
        width: '50%',
        height: 70,
        backgroundColor: 'white', 
        justifyContent: 'center',
        alignItems: 'center', 
    },
    content: {
        width: '60%',
        justifyContent: 'center'
    }, 
    input: {
        marginBottom: '2%',
        position: 'relative',
    },
    button: {
        marginTop: '5%'
    },
    bin: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    binDiv: {
        position: 'absolute',
        bottom: 70,
        right: 10,
        width: 70
    },
    errorText: {
        color: theme.colors.red,
        fontFamily: 'Averia',
        fontSize: 14,
        textAlign: 'left',
        position: 'absolute',
        left: 0,
        right: 0
    },
    inputCal: {
        backgroundColor: theme.colors.white,
        color: theme.colors.blue,
        fontFamily: 'Averia',
        fontSize: 14,
        height: 40,
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
        fontFamily: 'Averia'
    }
});
