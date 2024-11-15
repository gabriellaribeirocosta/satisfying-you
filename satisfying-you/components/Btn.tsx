import { View, StyleSheet, TouchableOpacity, Text, ViewStyle } from 'react-native'
import { theme } from '@/constants/theme'

interface ButtonProps {
    onPress: () => void
    title: string
    style?: ViewStyle
}

export function Btn({onPress, title, style}:ButtonProps) {
      
    return (
        <View>
            <TouchableOpacity
                style={[styles.button, style]}
                onPress={onPress}>
                <Text style={styles.title}>{title}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: theme.colors.green,
        width: '100%',
        height: 50, 
        justifyContent: 'center'
    },
    title: {
        fontWeight: 400,
        fontSize: 28,
        color: theme.colors.white,
        textAlign: 'center',
        fontFamily: 'Averia',
        
    }
});