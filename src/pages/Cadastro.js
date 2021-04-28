import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import firebase from '../config/Firebase';

export default function Cadastro({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    async function cadastrar() {

        await firebase.auth().createUserWithEmailAndPassword(email, senha)
            .then(() => {
                Alert.alert('Cadastrado com Sucesso!');
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
             <Text style={styles.logo}>Cadastre-se</Text>
            <TextInput placeholder="Email" style={styles.input} onChangeText={email => setEmail(email)} value={email} />
            <TextInput placeholder="Senha" style={styles.input} secureTextEntry={true} onChangeText={senha => setSenha(senha)} value={senha} />

            <TouchableOpacity onPress={() => { cadastrar() }} style={styles.botao}>
                <Text style={styles.loginText}>Salvar</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Login') } style={styles.botao}>
                <Text style={styles.loginText}>Voltar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
    loginText: {
        color: 'white'
    },
    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 40,
        color: "#308C30",
    },
    botao: {
        color: 'white',
        width: '70%',
        backgroundColor: '#308C30',
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
        backgroundColor: '#F7F7F7',
        borderRadius: 25,
        justifyContent: 'center',
    }
});