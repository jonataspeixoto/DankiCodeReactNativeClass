import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import styleExterno from '../styles';

export default class Body extends React.Component{

    constructor(props){
        super(props);
        this.nome = "Guilherme";
    }

    chamarNome(){
        return (<Text>{this.nome}</Text>)
    }

    render(){
        return(
            <View>
                {chamarNome()}
            </View>
        )
    }
}