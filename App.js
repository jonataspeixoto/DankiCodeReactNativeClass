import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Body from './components/Body';

export default function App() {
  const [count, setCount] = useState(0);

  const [nome, setNome] = useState("Guilherme");

  const [lista, setarLista] = useState(['Feijão', 'Arroz', 'Pão']);
  
  return (
    <View style={{ marginTop: 20 }}>
      <Button onPress={() => setarLista([...lista, 'Salada'])} title="Clique em mim!"></Button>
      {
        lista.map((val => {
          return (<Text>{val}</Text>)
        }))
      }
    </View>
  )
}