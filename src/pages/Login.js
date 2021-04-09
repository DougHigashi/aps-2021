import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function App({ navigation }) {

    const [form, setForm] = useState({
        login: "",
        password: ""
    });
    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Faça Login</Text>
            <TextInput placeholder="Login" style={styles.input} />
            <TextInput placeholder="Senha" style={styles.input} />

            <TouchableOpacity>
                <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Screen')} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.esqueciSenha}>Se cadastrar</Text>
            </TouchableOpacity>

            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },

    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 40,
        color: "#fb5b5a",
    },

    input: {
        width: '70%',
        marginBottom: 20,
        padding: 10,
        height: 50,
        backgroundColor: '#465881',
        borderRadius: 25,
        justifyContent: 'center',
    },

    esqueciSenha: {
        color: 'white',
    },

    loginBtn: {
        width: '70%',
        backgroundColor: '#fb5b5a',
        height: 50,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },

    loginText: {
        color: 'white'
    }
});
