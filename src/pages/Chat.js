
import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';

import { View, Text } from 'react-native';

import { database, auth } from '../config/Firebase';

import { GiftedChat, Bubble, SystemMessage } from 'react-native-gifted-chat';

import { AntDesign } from '@expo/vector-icons'
import { TouchableOpacity } from 'react-native-gesture-handler';


function Chat({ navigation }) {

    const [messages, setMessages] = useState([]);

    useEffect(()=>{
       database.collection('groupChat').orderBy('createdAt', 'desc')
       .onSnapshot( snapshot => setMessages(
           snapshot.docs.map(doc => ({
            _id: doc.data()._id,
            text: doc.data().text,
            createdAt: doc.data().createdAt.toDate(),
            user: doc.data().user
           }))
       ))
    },[])

    const onSend = useCallback((messages = []) =>{
        setMessages(previousMessage => GiftedChat.append(previousMessage, messages))
        const{
            id,
            createdAt,
            text,
            user
        } = messages[0]
        database.collection('groupChat').add(messages[0])

    },[])

    const signOut = () => {
        auth.signOut().then(()=>{
            navigation.replace('Login')
        }).catch((error)=>{

        });
    }
    
    function renderBubble (props) {
        return (
          <Bubble
            {...props}
            wrapperStyle={{
              left:{
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