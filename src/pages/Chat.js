
import React, { useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { database, auth } from '../config/Firebase';

import { GiftedChat, Bubble,  } from 'react-native-gifted-chat';


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