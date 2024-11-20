import { View, StyleSheet, Text } from 'react-native'
import { theme } from '@/constants/theme'

interface ErrorMessageProps {
    message: string
}

export function ErrorMessage({message}:ErrorMessageProps) {
      
    return (
        <View>
            <Text style={styles.errorMessage}>{message}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    errorMessage: {
        color: theme.colors.red,
        fontSize: 14,
        fontFamily: 'Averia'
    }
})