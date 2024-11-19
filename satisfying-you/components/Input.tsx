import { View, StyleSheet, TouchableOpacity, Text, TextInput } from 'react-native'
import { theme } from '@/constants/theme'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

interface InputProps {
    label: string
    secureText?: boolean
}

export function Input({ label, secureText }:InputProps) {
    return (
        <View>
            <Text style={styles.label}>{label}</Text>
            <TextInput style={styles.input} secureTextEntry={secureText}></TextInput>
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