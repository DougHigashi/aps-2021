import React, { useState } from "react"
import { View, Text, TouchableOpacity } from 'react-native'
import { TextInput } from "react-native-gesture-handler"
import MessagingService from '../service/messaging'

function MessageSender () {
  const [message, setMessage] = useState('')
  
  function handleSubmit () {
    MessagingService.sendMessage(message)
    setMessage('')
  }

  return <View className={'MessageSender'}>
    <TextInput
      type="text"
      value={message}
      placeholder="Insira sua mensagem aqui"
      onChange={e => setMessage(e.target.value)}
      onSubmit={handleSubmit}
    />

    <TouchableOpacity onPress={handleSubmit}>
    <Text>Enviar</Text>
    </TouchableOpacity>
  </View>
}

export default MessageSender