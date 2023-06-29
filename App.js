import React from 'react';
import { Text, View, ScrollView, Button, LogBox } from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.mostrarHeader = true;
    LogBox.ignoreAllLogs(true);
    console.warn("Testes");
  }

  mostrarConteudo() {
    var mostrarBody = 1;
    if (this.mostrarHeader && mostrarBody == 1) {
      return (
        <View>
          <Header></Header>
          <Body></Body>
        </View>
      );
    } else {
      return (
        <Body></Body>
      );
    }
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