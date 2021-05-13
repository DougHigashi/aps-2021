import 'react-native-gesture-handler';
import React from 'react';

import { LogBox } from 'react-native';
import { NavigationContainer, useBackButton } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from '@expo/vector-icons/Ionicons';

import Login from './src/pages/Login'
import Location from './src/pages/Location'
import Cadastro from './src/pages/Cadastro'
import Esqueci from './src/pages/Esqueci'
import Chat from './src/pages/Chat'
import Profile from './src/pages/Profile'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
LogBox.ignoreLogs(['Setting a timer']);




const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Location') {
            iconName = focused
              ? 'map-outline'
              : 'map-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbox-ellipses-outline' : 'chatbox-ellipses-outline';
          }
          else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person';
        }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#308C30',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Location" component={Location} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
        <Stack.Screen name="Esqueci" component={Esqueci} options={{ headerShown: false }} />
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerShown: false }} />
        <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer >
  );
}

