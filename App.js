import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Body from './components/Body';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contador: 0,
      pagina: "home"
    }

    setInterval(() => {
      this.setState({ pagina: "contato" });
    }, 2000)
  }

  alterarAba = (pagina) =>{
    this.setState({pagina: pagina})
  }

  render() {
    if (this.state.pagina == "home") {
      return (
        <View style={{ marginTop: 30 }}>
          <View><Text>Home</Text></View>
          <Button onPress={()=>this.alterarAba('contato')} title = "Clique para ir ao contato"></Button>
        </View>
      );
    } else if (this.state.pagina == "contato") {
      return (
        <View style={{ marginTop: 30 }}>
          <View><Text>Contato</Text></View>
          <Button onPress={()=>this.alterarAba('home')} title = "Clique para ir a home"></Button>
        </View>);
    }
  }
}