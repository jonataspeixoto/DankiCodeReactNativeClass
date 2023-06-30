import React from 'react';
import { Text, View, Image, StyleSheet, Button } from 'react-native';
import styleExterno from '../styles';

const Body = (props) => {

    function teste(){
        return (<Text>Exemplo</Text>);
    }

    return(
        <View>
            {teste()}
            <Text>{props.texto}</Text>
            <Button title = {props.titulo}></Button>
        </View>
    )
};

export default Body;