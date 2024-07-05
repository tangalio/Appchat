// App.js

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LogoScreen from './LogoScreen';
import LogoPage from './components/LogoPage';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Logo">
        <Stack.Screen
          name="Logo"
          component={LogoPage}
          options={{ headerShown: false }}
        />
        {/* Các màn hình khác nếu có */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
