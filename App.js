import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default class App extends React.Component {
  render(){
    return (
      <View>
        <Text>Minha imagem:</Text>
        <Image style={{width:50, height:100}}
          source={{
            uri: 'http://reactnative.dev/img/tiny_logo.png'
          }}
        />
      </View>
    );  
  }
}