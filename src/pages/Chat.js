
import React from 'react';
import { View } from 'react-native'
import MessageSender from '../components/MessageSender';
import Messages from '../components/Messages';
import useMessages from '../hooks/useMessages';


function Chat () {
  const { messages } = useMessages()

  return <View className="Chat">
    <Messages messages={messages} />
  </View>
}

export default Chat  