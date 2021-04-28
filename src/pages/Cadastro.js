import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import firebase from '../config/Firebase';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');



    async function cadastrar() {

        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(() => {
                alert('Cadastrado com Sucesso!');
                navigation.navigate('Login');
            })
            .catch((error) => {
                console.log(error.code);
                switch (error.code) {
                    case 'auth/email-already-in-use':
                        Alert.alert('Email em uso', 'Este email já está cadastrado');
                        break;
                    case 'auth/invalid-email':
                        Alert.alert('Email inválido', 'Verifique o email e tente novamente')
                    default:
                        Alert.alert('Ops!', 'Verifique as informações inseridas e tente novamente')
                }
            });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Cadastre-se</Text>
            <TextInput placeholder="Email" style={styles.input} onChangeText={email => setEmail(email)} value={email} />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={senha => setSenha(senha)} value={senha} />

            <TouchableOpacity onPress={() => { cadastrar() }} style={styles.botao}>
                <Text style={styles.loginText}>Cadastrar-se</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex'
    },
    loginText: {
        color: 'white'
    },
    botao: {
        color: 'white',
        width: '70%',
        backgroundColor: '#fb5b5a',
        height: 50,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
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
    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 40,
        color: "#fb5b5a",
    }
});