import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, ScrollView, Button, Platform } from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  mostrarConteudo() {
    return (
      <View>
        <StatusBar hidden/>
        <Text>olá!</Text>
      </View>
    );
  }

  render() {
    return (
      <ScrollView style={{ marginTop: 20, flex: 1 }}>
        {
          this.mostrarConteudo()
        }
      </ScrollView>
    )
  }
}