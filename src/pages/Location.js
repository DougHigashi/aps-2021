import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';

import Map from '../components/Map'

export default function App() {
    return (
        <View style={styles.container}>
            <Map />
            <StatusBar style="auto" />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
