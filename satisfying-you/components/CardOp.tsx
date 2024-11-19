import { View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import { theme } from '@/constants/theme';
import { MaterialCommunityIcons } from '@expo/vector-icons';

interface Props {
    onPress: ()=> void
    icon: string
    text: string
};

export function CardOp ({onPress, icon, text}:Props) {
    return (
        <TouchableOpacity style={styles.card} onPress={onPress}>
            <MaterialCommunityIcons size={75} color="white" style={styles.icon} name={icon}></MaterialCommunityIcons>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
       
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: theme.colors.darkPurple,
        flexDirection: 'column',
        height: 150,
        width: 150,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontFamily: 'Averia',
        color: theme.colors.white,
        fontSize: 20
    },
    icon: {
        flexDirection: 'column',
        alignItems: 'center',
        marginHorizontal: 8,
    }
})