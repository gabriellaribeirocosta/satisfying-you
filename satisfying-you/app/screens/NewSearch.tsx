import { StyleSheet, View, Text, TextInput, Image, Pressable, Touchable, TouchableOpacity } from 'react-native';
import { theme } from "@/constants/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { Btn } from "@/components/Btn";
import { useState, useEffect } from 'react';
import { ErrorMessage } from '@/components/ErrorMessage';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';
import { initializeFirestore, collection, addDoc, updateDoc, deleteDoc, doc, query, onSnapshot } from 'firebase/firestore'
import { app } from '../../firebase/config'

export default function EditSearch() {
    const [nome, setNome] = useState('');
    const [date, setDate] = useState('');
    const [errorNome, setErrorNome] = useState('');
    const [errorDate, setErrorDate] = useState('');
    const [imagem, setImagem] = useState();
    const [imagemBase64, setImagemBase64] = useState();
    const db = initializeFirestore(app, {experimentalForceLongPolling: true});
    const searchCollection = collection(db, "nova pesquisa");

    const addPesquisa = async () => {
        if (!imagemBase64) {
            console.error("Erro: Nenhuma imagem foi selecionada.");
            return;
        }
    
        const docUser = {
            nome: nome,
            data: date,
            image: imagemBase64 // Armazena a string Base64 no Firestore
        };
    
        try {
            const docRef = await addDoc(searchCollection, docUser);
            console.log("Novo documento inserido com sucesso:", docRef.id);
        } catch (erro) {
            console.error("Erro ao salvar documento:", erro);
        }

        
    };
    

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
        if (imagem === undefined) {
            setErrorNome('Selecione um imagem');
            valid = false;
        }
        if (valid) {
            setErrorNome('');
            setErrorDate('');
            addPesquisa();
        }

    };

    const pickImage = async () => {
        let permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert("Conceda a permissão para acessar a galeria!");
            return;
        }
    
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        console.log(result);
        if (!result.canceled && result.assets.length > 0) {
            const uri = result.assets[0]?.uri;
            await resizeAndConvertImage(uri);
        }
    };

    const resizeAndConvertImage = async (uri) => {
        try {
            const manipResult = await ImageManipulator.manipulateAsync(
                uri,
                [{ resize: { width: 700, height: 700 } }],
                { compress: 1, format: ImageManipulator.SaveFormat.JPEG, base64: true }
            );
            
            setImagem(manipResult.uri);         // Salva a URI para exibição
            setImagemBase64(manipResult.base64); // Salva a string Base64
        } catch (error) {
            console.error("Error resizing image:", error);
        }
    };
    

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
                    <Pressable 
                        style={styles.img}
                        onPress={pickImage}
                    >
                        {
                            imagem === undefined
                            ? <Text style={styles.cameraTxt}>Câmera/Galeria de imagens</Text>
                            : <Image source={{uri: imagem}} style={{ height: 100, width: 100}}/>
                        }
                    </Pressable>
                </View>
                <View style={styles.button}>
                    <Btn title="CADASTRAR" onPress={handleSave} />
                </View>                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: theme.colors.purple,
        flexDirection: 'row',
        width: '100%',
        height: '100%',
        justifyContent: 'center'
    },
    label: {
        textAlign: 'left',
        color: theme.colors.white,
        fontSize: 14,
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
        justifyContent: 'flex-start', 
        marginTop: 10,  
    }, 
    input: {
        marginBottom: '2%',
        position: 'relative',
    },
    button: {
        marginTop: '5%'
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
        top: 15, 
        right: 10, 
        transform: [{ translateY: -15 }], 
    },
    labelCal: {
        color: theme.colors.white,
        fontSize: 14,
        fontFamily: 'Averia'
    },
    cameraTxt: {
        fontFamily: 'Averia',
        fontSize: 14,
        color: theme.colors.gray,
        textAlign: 'center',
        justifyContent: 'center'
    }
});
