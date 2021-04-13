import React from 'react'
import MapView, { Marker } from 'react-native-maps'
import { StyleSheet, View, Text } from 'react-native'
import { useState, useEffect } from 'react'

import * as Location from 'expo-location';

export default function Map() {
    Location.requestPermissionsAsync()

    const [location, setLocation] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.015,
        longitudeDelta: 0.01
    })

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            posicao => {
                setLocation({
                    latitude: posicao.coords.latitude,
                    longitude: posicao.coords.longitude,
                    latitudeDelta: 0.014,
                    longitudeDelta: 0.014
                })
            }
        );
    }, []
    );

    return (
        <MapView
            style={styles.map}
            loadingEnabled={true}
            region={location}
            showUserLocation={true}>
            <Marker coordinate={{
                latitude: location.latitude,
                longitude: location.longitude
            }}
                image={require('../assets/marker.png')}
                title="Você"
                description="você está aqui :)"></Marker>
        </MapView>

    );
}




const styles = StyleSheet.create({
    map: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    },
    container: {
        height: '80%'
    }
})