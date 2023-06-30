import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Body from './components/Body';

export default function App () {
  return (
    <View style={{ marginTop: 30 }}>
      <Body texto = "Aqui é um texto 1" titulo = "clique aqui - danki code 1" ></Body>
      <Body texto = "Aqui é um texto 2" titulo = "clique aqui - danki code 2" ></Body>
      <Body texto = "Aqui é um texto 3" titulo = "clique aqui - danki code 3" ></Body>
      <Body texto = "Aqui é um texto 4" titulo = "clique aqui - danki code 4" ></Body>
    </View>
  )
}