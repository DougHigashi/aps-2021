
import React, { useState, useEffect, useCallback } from 'react';
import { database, auth } from '../config/Firebase';

import { GiftedChat, Bubble } from 'react-native-gifted-chat';
import { Alert } from 'react-native';



function Chat({ navigation }) {

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    navigation.addListener('beforeRemove', (e) => {           //Adicionamos um listener pra ação de voltar

      e.preventDefault();                                     //Quando a ação é detectada, essa linha bloqueia a ação

      //E mostramos o alert abaixo.
      Alert.alert('Logout', 'Deseja realizar logout da sua conta?', [
        {
          text: 'Cancelar',
        },
        {
          text: 'Ok',
          onPress: () => { navigation.dispatch(e.data.action); auth.signOut().then(() => { navigation.navigate('Login') }) }
          //Depois de clicar em Ok ele libera a ação de voltar
          //e realiza o logout
        }
      ])
    });

    database.collection('groupChat').orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => setMessages(
        snapshot.docs.map(doc => ({
          _id: doc.data()._id,
          text: doc.data().text,
          createdAt: doc.data().createdAt.toDate(),
          user: doc.data().user
        }))
      ))
  }, [])

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessage => GiftedChat.append(previousMessage, messages))
    const {
      id,
      createdAt,
      text,
      user
    } = messages[0]
    database.collection('groupChat').add(messages[0])

  }, [])



  function renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          left: {
            backgroundColor: 'white'
          },
          right: {
            backgroundColor: 'green'
          }
        }}
      />
    )
  }

  return (
    <GiftedChat
      renderBubble={renderBubble}
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: auth?.currentUser?.email,
        name: auth?.currentUser?.displayName,
      }}
    />
  )
}



Chat.navigationOptions = {

  title: 'Chat',

};
export default Chat;