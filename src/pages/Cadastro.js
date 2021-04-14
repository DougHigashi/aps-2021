import React, { useState,useEffect } from 'react';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { database } from './config/Firebase';

export default function Cadastro() {

    const [usuarios, setUsuarios]= useState({});
    const [user, setUser]= useState('');
    const [senha, setSenha]= useState('');

    useEffect(() => {
     database.collection("usuarios").onSnapshot((query)=> { 
         const list = [];
        query.forEach((doc)=>{
            list.push({...doc.data(), id : doc.id});
        })
        setUsuarios(list);
     });
    },[])

    function addUser(){
        database.collection("usuarios").add({user,senha});
    }

    return (
        <View style={styles.container}>
        <TextInput placeholder="Username"  value={user} onChangeText={setUser} />
        <TextInput placeholder="Senha"  value={senha} onChangeText={setSenha}/>

        <Button title='confirmar' onPress={addUser}/>
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
    botao: {
        color: 'white',
    },
    sinput: {
        width: '70%',
        marginBottom: 20,
        padding: 10,
        height: 50,
        backgroundColor: '#465881',
        borderRadius: 25,
        justifyContent: 'center',
    }
});