import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "./screens/Home";
import { MaterialIcons } from '@expo/vector-icons';
import { theme } from "@/constants/theme";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router'; 
import { auth_mod } from '../firebase/config'
import { signOut } from 'firebase/auth'

const DrawerNavigator = createDrawerNavigator();

export default function Drawer() {
    return (
        <DrawerNavigator.Navigator
            screenOptions={{
                drawerStyle: styles.drawerContainer,
                drawerActiveTintColor: 'red',
                drawerInactiveTintColor: 'gray',
                headerStyle: styles.headerStyle,
                headerTitleStyle: styles.headerTitleStyle,
                headerTintColor: 'white',
            }}
            drawerContent={(props) => <CustomDrawerContent />}
        >
            <DrawerNavigator.Screen
                name="Home"
                component={Home}
                options={{
                    headerTitle: "",
                }}
            />

        </DrawerNavigator.Navigator>
    );
}

const CustomDrawerContent = () => {
    const router = useRouter();
    
    const handleSair = async () => {
        try {
            await signOut(auth_mod)
            router.replace('/')
        }catch(error){
            console.log(error)
        }
    }

    return (
        <View style={styles.drawerContainer}>
            <View style={styles.emailContainer}>
                <Text style={styles.drawerLabel}>usuario@dominio.com</Text>
            </View>

            <View style={styles.divider}></View>

            <View style={styles.mainContent}>
                <TouchableOpacity
                    onPress={() => router.push('/screens/NewSearch')}
                    style={styles.footerItem}
                >
                    <MaterialIcons
                        name="article"
                        size={18}
                        color={'white'}
                    />
                    <Text style={styles.footerLabel}>Pesquisas</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.footerContainer}>
                <TouchableOpacity
                    onPress={handleSair}
                    style={styles.footerItem}
                >
                    <MaterialIcons
                        name="exit-to-app"
                        size={18}
                        color={'white'}
                    />
                    <Text style={styles.footerLabel}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: theme.colors.darkPurple,
    },
    emailContainer: {
        padding: 20,
        paddingBottom: 10
    },
    drawerLabel: {
        fontSize: 18,
        marginLeft: '5%',
        fontFamily: 'Averia',
        color: theme.colors.white,
    },
    divider: {
        height: 1,
        backgroundColor: theme.colors.white,
        width: '80%',
        alignSelf: 'center',
        marginVertical: 10,
    },
    mainContent: {
        flex: 1,
        padding: 10,
        marginBottom: 20,
    },
    drawerItem: {
        paddingVertical: 15,
        paddingLeft: 20,
    },
    headerStyle: {
        backgroundColor: theme.colors.darkPurple,
    },
    headerTitleStyle: {
        fontSize: 24,
        fontFamily: 'Averia',
        color: theme.colors.white,
    },
    footerContainer: {
        padding: 10,
        marginBottom: 20,
    },
    footerItem: {
        paddingVertical: 15,
        paddingLeft: 20,
        flexDirection: 'row',
    },
    footerLabel: {
        fontSize: 18,
        fontFamily: 'Averia',
        color: theme.colors.white,
    },
});
