import React, { useState, useEffect}  from 'react';
import { StyleSheet, View, Text, Image,  FlatList } from 'react-native'
import { database, auth } from '../config/Firebase';

function Participantes({ navigation }) {

    const [nomes, setNome] = useState('');

    useEffect(() => {
        database.collection("usuarios").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            })
            setNome(list);
        });
        console.log(nomes)
    }, [])

    function getNomes(){
        return(
            nomes.forEach((nome) => {
                <Text>{nome.nome}</Text>
            })
        )
    }
    return(
        <View style={styles.container}>
            <Image source={require('../assets/participantes.png')} style={styles.imagem}/>
            <Text style={styles.logo}>Participantes:</Text>
            <FlatList
          data={nomes}
          renderItem={({item}) => <Text style={styles.item}>{item.nome}</Text>}
        />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 15,
    },
    imagem: {
        top:70,
        width: 90,
        height: 90,
        resizeMode: 'stretch',
    }, 
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
    logo: {
        top: 0,
        left: 85,
        fontWeight: 'bold',
        fontSize: 25,
        marginBottom: 40,
        color: "#228B22",
    },
})

Participantes.navigationOptions = {

    title: 'Participantes',

};

export default Participantes;