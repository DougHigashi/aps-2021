import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import firebase from 'firebase';

export default function Chat({ navigation }) {

    
    function logOut(){
        firebase.auth().signOut()
        .then(
            ()=>navigation.navigate('Login')
          ).catch((error) => {
            alert('Ocorreu um erro');
          });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Iniciar Chat</Text>
            
            <TouchableOpacity onPress={()=>{logOut()}} style={styles.loginBtn}>
                <Text style={styles.loginText}>Deslogar</Text>
            </TouchableOpacity>

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

    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 40,
        color: "#fb5b5a",
    },

    loginBtn: {
        width: '70%',
        backgroundColor: '#fb5b5a',
        height: 50,
        marginTop: 40,
        marginBottom: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },

    loginText: {
        color: 'white'
    }
});
