import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';


import Map from '../components/Map'


export default function Location({ navigation }) {

    return (
        <View style={styles.container}>
            <Map />

            <TouchableOpacity style={styles.alignBottom} onPress={() => { navigation.navigate('Chat') }}>
                <Text style={styles.button}>Enviar Localização</Text>
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
