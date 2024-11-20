import { View, StyleSheet, TextInput, Text } from 'react-native'
import { theme } from '@/constants/theme'

interface InputProps {
    label: string;
    secureText?: boolean;
    value: string; // O valor que será exibido no campo de entrada
    onChangeText: (text: string) => void; // Função que será chamada ao mudar o texto
}

export function Input({ label, secureText, value, onChangeText }: InputProps) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                secureTextEntry={secureText}
                value={value} 
                onChangeText={onChangeText} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        backgroundColor: theme.colors.white,
        color: theme.colors.blue,
        fontFamily: 'Averia',
        fontSize: 14,
        height: 34,
        paddingLeft: 20
    },
    label: {
        color: theme.colors.white,
        fontSize: 14,
        fontFamily: 'Averia'
    }
})
