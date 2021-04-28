import React, { useEffect, useRef } from 'react'
import { View, Image } from 'react-native'
import { auth } from '../config/Firebase'

function Messages ({ messages }) {
  const ref = useRef(null)

  useEffect(() => {
    ref.current.scrollTop = ref.current.scrollHeight
  }, [messages])

  return <View className="Messages" ref={ref}>
    {
      messages.map(message =>{
        const user = auth().currentUser
        const messageClass = message.user.uid === user.uid
          ? 'outgoing'
          : 'incoming'

        return <View key={message.key} className={`Message ${messageClass}`}>
          <View className={messageClass}>
            <Image
              source={message.user.photo}
              alt={message.user.displayName}
            />

            <span>
              { message.message }
            </span>
          </View>
        </View>

      })
    }
  </View>
}

export default Messages
