import React from 'react'
import MapView from 'react-native-maps'
import { StyleSheet, View } from 'react-native'
import { useState } from 'react'

export default function Map() {

    const [region, setRegion] = useState(null)




    return (

        <MapView

            style={styles.map}
            loadingEnabled={true}
            region={{
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.015,
                longitudeDelta: 0.01
            }}>

        </MapView>

    )
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