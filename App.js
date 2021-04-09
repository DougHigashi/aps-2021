import 'react-native-gesture-handler';
import React, { useState } from 'react';

import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Login from './src/pages/Login'
import Screen from './src/pages/Screen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator intialRouteName="Screen">
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="Screen" component={Screen}></Stack.Screen>
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
