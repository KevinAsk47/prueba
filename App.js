import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './Welcome';
import Amigos from './Amigos';
import Formulario from './Formulario';
import {NavigationContainer} from '@react-navigation/native'
import Stack from './navigation/Stack';
import Bottom from './navigation/Bottom';
import Drawer from './navigation/Drawer';

export default function App() {
  return (
    <NavigationContainer>      
      {/* <Stack /> */}
      {/* <Bottom /> */}
      <Drawer />
    </NavigationContainer>
  );
}


