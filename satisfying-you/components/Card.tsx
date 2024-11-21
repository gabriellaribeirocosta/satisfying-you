import { View, Image, StyleSheet, TouchableOpacity, Text, ViewStyle } from 'react-native'
import { theme } from '@/constants/theme'
import { router } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

interface CardProps {
    icon?: React.ComponentProps<typeof MaterialIcons>['name']
    nome: string
    data: string,
    onPress: () => void
}

export function Card({ icon, nome, data, onPress }:CardProps) {
      
    return (
        <View style={styles.card}>
            <TouchableOpacity onPress={onPress}>
                {icon && (
                    <MaterialIcons 
                        name={icon}
                        size={70}
                        color={'#000'}
                        style={styles.icon}
                    />
                )}
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
    },
    icon: {
        alignSelf: 'center'
    }
})