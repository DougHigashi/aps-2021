import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Alert } from 'react-native';

import Clipboard from 'expo-clipboard';
import Map from '../components/Map'

import { useCoord } from '../contexts/Coordinate'


export default function Location({ navigation }) {
    const { coordinate } = useCoord();

    const sendLocation = () => {
        Clipboard.setString(`Estou na latitude ${coordinate.latitude} e longitude ${coordinate.longitude}`);
        Alert.alert('Copiado', 'Sua localização foi copiada para a área de transferência!');
        navigation.navigate('Chat');
    }

    return (
        <View style={styles.container}>
            <Map />

            <TouchableOpacity style={styles.alignBottom} onPress={() => { sendLocation() }}>
                <Text style={styles.button}>Copiar Localização</Text>
            </TouchableOpacity>

            <StatusBar style='auto' />
        </View >


    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#003f5c',
    },
    button: {
        color: 'white'
    },
    alignBottom: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'flex-end',
        position: 'absolute',
        bottom: 15,
        right: 5,
        backgroundColor: '#308C30',
        height: 50,
        width: 160,
        borderRadius: 25
    }
});
