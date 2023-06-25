import React from 'react';
import { Text, View, ScrollView } from 'react-native';
import Header from './components/Header.js';
import Body from './components/Body.js';


export default class App extends React.Component {
  render(){
    return (
      <ScrollView style={{marginTop:20, flex:1}}>
        <Header></Header>
        <Body></Body>
      </ScrollView>
    );  
  }
}