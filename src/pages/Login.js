import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import firebase from '../config/Firebase';

export default function App({ navigation }) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user)
        }
    });

    async function authentication() {

        await firebase.auth().signInWithEmailAndPassword(login, password)
            .then(() => navigation.navigate('Chat')
            ).catch((error) => {
                switch (error.code) {
                    case 'auth/wrong-password':
                        Alert.alert('Senha incorreta', 'Verifique a senha digitada e tente novamente')
                        break;
                    case 'auth/user-not-found':
                        Alert.alert('Usuário não encontrado', 'Verifique o email digitado e tente novamente')
                        break;
                    default:
                        Alert.alert('Ops!', 'Verifique as informações inseridas e tente novamente')
                }
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Faça Login</Text>
            <TextInput placeholder="Email" style={styles.input} onChangeText={login => setLogin(login)} value={login} />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={password => setPassword(password)} value={password} />

            <TouchableOpacity onPress={() => { authentication() }} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
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
