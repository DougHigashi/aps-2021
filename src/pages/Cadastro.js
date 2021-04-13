import React, { useState,useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Cadastro() {
    return (
        <View style={styles.container}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Senha" style={styles.input} />

        <TouchableOpacity>
                <Text style={styles.botao}>confirmar</Text>
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