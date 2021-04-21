import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import firebase from 'firebase';

export default function App({ navigation }) {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    
    
    function authentication(){
        firebase.auth().signInWithEmailAndPassword(login, password)
        .then(()=>navigation.navigate('Chat')
        ).cath(function (error){
            var errorCode = error.Code;
            var errorMessage = error.Message;
            alert(errorCode, errorMessage);
        });
    }


    return (
        <View style={styles.container}>
            <Text style={styles.logo}>Faça Login</Text>
            <TextInput placeholder="Login" style={styles.input} onChangeText={login =>setLogin(login)} value={login}/>
            <TextInput placeholder="Senha" style={styles.input} onChangeText={password =>setPassword(password)} value={password}/>
            
            <TouchableOpacity onPress={()=>{authentication()}} style={styles.loginBtn}>
                <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
                <Text style={styles.esqueciSenha}>Se cadastrar</Text>
            </TouchableOpacity>


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

    logo: {
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 40,
        color: "#fb5b5a",
    },

    input: {
        width: '70%',
        marginBottom: 20,
        padding: 10,
        height: 50,
        backgroundColor: '#465881',
        borderRadius: 25,
        justifyContent: 'center',
    },

    esqueciSenha: {
        color: 'white',
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
