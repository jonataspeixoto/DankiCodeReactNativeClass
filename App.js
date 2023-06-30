import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Body from './components/Body';

export default function App(){
  useEffect(() => {
    alert('meu hook de efeito tá legal!')
  })
  return(
    <View style={{marginTop:20}}>
      <Text>Funcionando</Text>
    </View>
  )
}