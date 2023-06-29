import React from 'react';
import { Text, View, ScrollView, Button, Platform } from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  mostrarConteudo() {
    var conteudo = "";
    
    if(Platform.OS == "android"){
      conteudo = "Olá! Você está utilizando android!"
    } else{
      conteudo = "Olá, você é usuário iOS!"
    }
    return (
      <View>
        <Text>{conteudo}</Text>
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