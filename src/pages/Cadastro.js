import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { database } from './config/Firebase';

export default function Cadastro() {

    const [usuarios, setUsuarios] = useState({});
    const [user, setUser] = useState('');
    const [senha, setSenha] = useState('');

    useEffect(() => {
        database.collection("usuarios").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            })
            setUsuarios(list);
        });
    }, [])

    function addUser() {
        database.collection("usuarios").add({ user, senha });
    }

    return (
        <View style={styles.container}>
            <TextInput placeholder="Username" style={styles.input} value={user} onChangeText={setUser} />
            <TextInput placeholder="Senha" style={styles.input} value={senha} onChangeText={setSenha} />

            <TouchableOpacity onPress={addUser} style={styles.botao}>
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