import React from 'react';
import { Text, View } from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';


export default class App extends React.Component {
  render(){
    return (
      <View style={{marginTop:20}}>
        <Header></Header>
        <Body></Body>
      </View>
    );  
  }
}