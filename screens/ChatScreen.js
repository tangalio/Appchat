import React, { useState, useEffect, useCallback } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import io from 'socket.io-client';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);
  const socket = io('http://your-server-url:port'); // Thay thế bằng URL của server

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        //   avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);

    socket.on('message', (message) => {
      setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, message)
      );
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
    socket.emit('message', messages[0]);
  }, []);

  return <GiftedChat messages={messages} onSend={(messages) => onSend(messages)} user={{ _id: 1 }} />;
};

export default ChatScreen;
