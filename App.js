import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function App(){

  var componente = [];

  for (var i = 1990; i <= 2020; i++){
    componente.push(<Text>Selecione: {i}</Text>)
  }

  return (
    <View style={{marginTop: 30}}>
      {
        componente.map((val) => {
          return(val);
        })
      }
    </View>
  )
  
}