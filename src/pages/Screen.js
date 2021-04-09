import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';




export default function App() {

    const [form, setForm] = useState({
        login: "",
        password: ""
    });
    return (
        <View style={styles.container}>
            <Text>Tela 2</Text>

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
});
