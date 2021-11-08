import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

class Card extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <TouchableOpacity style={styles.container}>
                <Image style={styles.image}
                        source={{uri:this.props.data.image}} 
                       resizeMode='cover' />
                <Text>Nombre: {this.props.data.name}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        shadowColor: '#ccc',
        shadowOffset:{
            width: 0,
            height: 0
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        borderRadius: 5,   
    },
    image: {
        height: 250,
        marginBottom: 10,
        marginHorizontal:'2%',
    }
})

export default Card