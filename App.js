import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App(){

  var nome = "mario";

  var numero = 10;
  var conteudo = <Text>Danki Code</Text>

  // == igual
  // != diferente

  // <= menor ou igual
  // >= maior ou igual

  // > maior
  // < menor

  if (nome == "guilherme" || numero == 10){
    conteudo = <Text>{nome}</Text>
  }

  return (
    <View style={{marginTop: 30}}>
      <StatusBar hidden/>
      {conteudo}
    </View>
  )
  
}