import React, {Component} from "react";
import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';

class CommentForm extends Component{
    constructor(){
        super()
        this.state={
            comentario:''
        }
    }

    onSubmit(){
        console.log(`El comentario ingresado es: ${this.state.comentario}`);
    }

    render(){
        return(
            <View style={styles.formContainer}>
                <Text>Comentarios</Text>
                <TextInput
                    style={styles.multilineInput}
                    onChangeText={(text)=>this.setState({comentario: text})}
                    placeholder='Dejá tu comentario'
                    keyboardType='default'
                    multiline
                    />
                <TouchableOpacity style={styles.button} onPress={()=>this.onSubmit()}>
                    <Text style={styles.textButton}>Enviar comentario</Text>    
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    formContainer:{
        paddingHorizontal:10,
        marginTop: 20,
    },
    multilineInput:{
        height:100,
        paddingVertical:15,
        paddingHorizontal: 10,
        borderWidth:1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical:10,
    },
    button:{
        backgroundColor:'#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius:4, 
        borderWidth:1,
        borderStyle: 'solid',
        borderColor: '#28a745'
    },
    textButton:{
        color: '#fff'
    }

})

export default CommentForm;