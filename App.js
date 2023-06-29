import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
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
      <View style={{marginTop: Constants.statusBarHeight}}>
        <Text>Olá da Danki</Text>
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