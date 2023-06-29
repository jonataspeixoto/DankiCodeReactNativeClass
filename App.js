import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Body from './components/Body';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.body = new Body();

    this.body.name = "Felipe"
  }

  render() {
    <View style={{ marginTop: 30 }}>
      <Body></Body>
    </View>
  }
}