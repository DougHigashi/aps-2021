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
                console.log(error.message)
                const errorCode = error.code;
                const errorMessage = error.message;
                Alert.alert("Ops!", errorMessage);
            });
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Username" style={styles.input} onChangeText={email => setEmail(email)} value={email} />
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
    }
});