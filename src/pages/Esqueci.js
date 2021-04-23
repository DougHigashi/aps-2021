import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import firebase from '../config/Firebase';

export default function Esqueci({ navigation }) {

    const [email, setEmail] = useState('');

    async function confirma() {

        await firebase.auth().sendPasswordResetEmail(email)
            .then(() => {
                Alert.alert('Email enviado!');
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
            <TextInput placeholder="Email" style={styles.input} onChangeText={email => setEmail(email)} value={email} />
           
            <TouchableOpacity onPress={() => { confirma() }} style={styles.botao}>
                <Text style={styles.loginText}>Confirma</Text>
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