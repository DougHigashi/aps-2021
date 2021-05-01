
import React, {useState, useEffect} from  'react';

import {View, Text} from  'react-native';

import {database} from  '../config/Firebase';

import {GiftedChat, Bubble} from  'react-native-gifted-chat';

import {setUsuario} from '../pages/Login'


function  Chat() {

  var user = setUsuario;
  
  const [messages, setMessages] =  useState([]);
  
  useEffect(() => {

    console.log(user);
    
    database.collection('groupChat')
    
    .orderBy('createdAt', 'desc')
    
    .onSnapshot(function(doc) {
    
    let receivedMessages = [];
    
    doc.docs.map(doc => {
    
    receivedMessages.push({
    
    _id: doc.id,
    
    ...doc.data() });
  });

  setMessages(GiftedChat.append(messages, receivedMessages));
});
}, [user]);
 
function  onSend([messages]) {

  database.collection('groupChat')
  
  .add(messages);
  
  }function  renderBubble(props) {

    return (
    
    <View>
    
    <Text  style={{left:  90}}>{props.currentMessage.user.nome}</Text>
    
    <Bubble
    
    {...props}
    
    />
    
    </View>
    
    );
    
    }
    
    return (
    
    <GiftedChat
    
    dateFormat={'DD-MM-YYYY'}
    
    timeFormat={'h:mm'}
    
    renderBubble={renderBubble}
    
    messages={messages}
    
    onSend={messages =>  onSend(messages)}
    
    user={{
    
    id: user.id,
    
    name: user.nome,
    
    }}
    
    />
    
    );
    
    }
    
    Chat.navigationOptions = {
    
    title:  'Chat',
    
    };
    
    export  default Chat;