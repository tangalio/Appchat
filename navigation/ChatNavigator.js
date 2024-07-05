import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScreen from '../screens/ChatScreen';
import LogoPage from '../components/LogoPage';

const Stack = createStackNavigator();

const ChatNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Chat">
        <Stack.Screen name="Chat" component={LogoPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ChatNavigator;
