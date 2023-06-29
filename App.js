import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Constants from 'expo-constants';
import { Text, View, ScrollView, Button, Platform } from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';

export default function App(){

  //String: "Guilherme" (texto)
  //Int: 10 (Números inteiros)
  //Double: 10.9 (Números com vírgula/quebrados)
  //Boolean: true/false (Verdadeiro ou Falso)

  const idade = 27

  var nome = "Guilherme";

  let cidade = "Floripa"

  return (
    <View style={{marginTop: Constants.statusBarHeight}}>
      <Text>O {nome} mora em {cidade} e tem {idade} anos</Text>
    </View>
  )
  
}