import 'react-native-gesture-handler';
import React from 'react';

import { StyleSheet, LogBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login'
import Location from './src/pages/Location'
import Cadastro from './src/pages/Cadastro'
import Esqueci from './src/pages/Esqueci'
import Chat from './src/pages/Chat'

const Stack = createStackNavigator();
LogBox.ignoreLogs(['Setting a timer']);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
<<<<<<< HEAD
        <Stack.Screen name="Map" component={Screen} options={{ headerShown: true }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: true }} />
        <Stack.Screen name="Esqueci" component={Esqueci} options={{ headerShown: true }} />
=======
        <Stack.Screen name="Location" component={Location} options={{ headerShown: true }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
>>>>>>> master
        <Stack.Screen name="Chat" component={Chat} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
