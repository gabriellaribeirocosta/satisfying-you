import { View, StyleSheet, Modal, TouchableOpacity, Text, TextInput } from "react-native";
import { Theme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { theme } from "@/constants/theme";


  
interface ConfirmationModalProps {
    message: string
    onClose: () => void
}
  
export default function ConfirmationModal({
    message,
    onClose
    }: ConfirmationModalProps) {

    return (
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{message}</Text>
            <View style={styles.modalButtonContainer}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonSim]}
                onPress={onClose}
              >
                <Text style={styles.modalButtonText}>SIM</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonCancelar]}
                onPress={onClose}
              >
                <Text style={styles.modalButtonText}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: theme.colors.darkPurple,
      padding: 20,
      alignItems: 'center',
      width: '35%',
    },
    modalText: {
      fontSize: 16,
      color: theme.colors.white,
      marginBottom: 20,
      alignItems: 'center',
      fontFamily: 'Averia',
      textAlign: 'center'
    },
    modalButtonContainer: {
      flexDirection: 'row',
      gap: 10, 
    },
    modalButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      width: 120,
      
    },
    modalButtonSim: {
      backgroundColor: '#FF8C8C',
      
    },
    modalButtonCancelar: {
      backgroundColor: theme.colors.blue, // Cor do botão CANCELAR
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
      fontFamily: 'Averia'
    },
  });
  