import { View, StyleSheet, Modal, TouchableOpacity, Text, TextInput } from "react-native";
import { Theme } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { theme } from "@/constants/theme";


  
interface ConfirmationModalProps {
    visible: boolean;
    onConfirm: () => void;
    onCancel: () => void;
    onRequestClose?: () => void; // Opcional para Android
    message: string; // Mensagem personalizada
}
  
export default function ConfirmationModal({
    visible,
    onConfirm,
    onCancel,
    onRequestClose,
    message,
  }: ConfirmationModalProps) {
    return (
      <Modal
        visible={visible}
        transparent
        animationType="slide"
        onRequestClose={onRequestClose}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>{message}</Text>
            <View style={styles.modalButtonContainer}>
              {/* Botão SIM */}
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonSim]}
                onPress={onConfirm}
              >
                <Text style={styles.modalButtonText}>SIM</Text>
              </TouchableOpacity>
  
              {/* Botão CANCELAR */}
              <TouchableOpacity
                style={[styles.modalButton, styles.modalButtonCancelar]}
                onPress={onCancel}
              >
                <Text style={styles.modalButtonText}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    );
}

const styles = StyleSheet.create({
    modalOverlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
      backgroundColor: theme.colors.darkPurple,
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      width: '50%',
    },
    modalText: {
      fontSize: 18,
      color: theme.colors.white,
      marginBottom: 20,
      alignItems: 'center'
    },
    modalButtonContainer: {
      flexDirection: 'row',
      gap: 20, 
    },
    modalButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 5,
      width: '35%'
    },
    modalButtonSim: {
      backgroundColor: '#FF8C8C', // Cor do botão SIM
    },
    modalButtonCancelar: {
      backgroundColor: theme.colors.blue, // Cor do botão CANCELAR
    },
    modalButtonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center'
    },
  });
  