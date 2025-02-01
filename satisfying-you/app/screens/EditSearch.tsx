import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import { theme } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Btn } from "@/components/Btn";
import { useState } from 'react';
import { ErrorMessage } from '@/components/ErrorMessage';
import Popup from '@/components/Popup';
import { updateDoc, doc, deleteDoc } from 'firebase/firestore';

export default function EditSearch() {
    const [nome, setNome] = useState('');
    const [date, setDate] = useState('');
    const [imagemBase64, setImagemBase64] = useState('');
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
        if (valid){
            changePesquisa(idPesquisa, nome, date, imagemBase64);
            alert("Pesquisa atualizada com sucesso!");
        }
    }

    const changePesquisa = async (id, novoNome, novaData, novaImagem) => {
        if (!id) {
            console.error("ID da pesquisa não encontrado!");
            return;
        }

        const pesRef = doc(db, "pesquisa", id);

        try {
            await updateDoc(pesRef, {
                nome: novoNome,
                ano: novaData,
                image: novaImagem
            });
            alert("Pesquisa atualizada com sucesso!");
        } catch (error) {
            console.error("Erro ao atualizar a pesquisa:", error);
        }
    };

    const deletePesquisa = async (id) => {
        if (!id) {
            console.error("ID da pesquisa não encontrado!");
            return;
        }

        try {
            await deleteDoc(doc(db, "pesquisa", id));
            alert("Pesquisa apagada com sucesso!");
            navigation.goBack(); // Volta para a tela anterior após deletar
        } catch (error) {
            console.error("Erro ao apagar a pesquisa:", error);
        }
    };

    function handleApagar() {
        setModalIsOpen(true)
    }

    function confirmarApagar() {
        deletePesquisa(id);
        setModalIsOpen(false);
    }

    function handleFecharModal(){
        setModalIsOpen(false)
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
                <View>
                    <Btn title="CADASTRAR" onPress={handleSave} />
                </View>                
            </View>
            <View style={styles.binDiv}>
                <TouchableOpacity style={styles.bin} onPress={handleApagar}>
                    <MaterialIcons name="delete-outline" size={36} color="white"/>
                    <Text style={styles.texto}>Apagar</Text>
                </TouchableOpacity>
            </View>
            {modalIsOpen && <Popup message={'Tem certeza de apagar essa pesquisa?'} onClose={handleFecharModal} onConfirm={confirmarApagar}/>}
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
        marginTop: -70
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
        marginBottom: 15,  
    },
    content: {
        width: '60%',
        justifyContent: 'flex-start', 
        marginTop: 10, 
    }, 
    input: {
        marginBottom: '5%',
        position: 'relative',
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
        marginBottom: 5, 
    },
    cameraTxt: {
        fontFamily: 'Averia',
        fontSize: 14,
        color: theme.colors.gray,
        textAlign: 'center',
        justifyContent: 'center'
    }
});
