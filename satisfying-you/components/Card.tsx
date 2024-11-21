import { View, Image, StyleSheet, TouchableOpacity, Text, ViewStyle } from 'react-native'
import { theme } from '@/constants/theme'
import { router } from 'expo-router'

interface CardProps {
    icon?: string
    nome: string
    data: string,
    onPress: () => void
}

export function Card({ icon, nome, data, onPress }:CardProps) {
      
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={onPress}>
                <Image source={{ uri: icon }}/>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.data}>{data}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        height: 150,
        width: 170,
        borderRadius: 5,
        backgroundColor: theme.colors.white,
        justifyContent: 'center',
        alignItems: 'center'
    },
    nome: {
        fontFamily: 'Averia',
        fontSize: 22,
        color: theme.colors.blue,
        textTransform: 'uppercase',
        textAlign: 'center'
    },
    data: {
        fontFamily: 'Averia',
        fontSize: 12,
        color: '#8B8B8B',
        textAlign: 'center'
    }
})