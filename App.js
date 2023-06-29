import React from 'react';
import { Text, View, ScrollView, Button } from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';

export default class App extends React.Component {
  
  constructor(props){
    super(props);
    this.mostrarTexto = true;
    this.mostrarBotaoComTexto = true;
  }

  render(){

    return (
      <ScrollView style={{marginTop:20, flex:1}}>
        {
          (this.mostrarTexto)
          ?
          <Text>Texto</Text>
          :
          <View></View>
        }
        {
          (this.mostrarBotaoComTexto)
          ?
          <Button title="Botao com texto"></Button>
          :
          <Button title="Botao sem texto"></Button>
        }

      </ScrollView>
    );  
  }
}