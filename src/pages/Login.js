import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert, Image, LogBox } from 'react-native';
import firebase from '../config/Firebase';

export default function App({ navigation }) {

    const [user, setLogin] = useState('');
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
            <Image source={require('../assets/logo.png')} style={styles.logo} />
            <TextInput placeholder="Email" style={styles.input} onChangeText={user => setLogin(user)} value={user} />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={password => setPassword(password)} value={password} />

            <TouchableOpacity onPress={() => { authentication() }} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.esqueciSenha}>Se cadastrar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Esqueci')}>
                <Text style={styles.esqueciSenha}>Esqueci minha senha</Text>
            </TouchableOpacity>
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        width: 270,
        height: 115,
        resizeMode: 'stretch',
    },
    input: {
        width: '70%',
        marginBottom: 20,
        padding: 10,
        height: 50,
        backgroundColor: '#F7F7F7',
        borderRadius: 25,
        justifyContent: 'center',
    },
    esqueciSenha: {
        color: '#308C30',
    },
    loginBtn: {
        width: '70%',
        backgroundColor: '#308C30',
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
