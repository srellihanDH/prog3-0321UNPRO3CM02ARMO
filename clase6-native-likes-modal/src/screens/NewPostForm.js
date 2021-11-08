import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, TouchableOpacity, Touchable } from 'react-native'
import { auth, db } from '../firebase/config';

class NewPostForm extends Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
        }
    }

    submitPost() {
        db.collection('posteos').add({
            user: auth.currentUser.email,
            createdAt: Date.now(),
            title: this.state.title,
            description: this.state.description,
            likes: [],
            comments: []
        })
            .then(() => {
                console.log('Se posteo exitosamente');
                this.setState({
                    title: '',
                    description: ''
                })
            })
            .catch(err => console.log(err))
    }

    render() {
        return (
            <View style={styles.formContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder="Título"
                    keyboardType="default"
                    onChangeText={ text => this.setState({ title: text }) }
                    value={this.state.title}
                />
                <TextInput 
                    style={styles.input}
                    placeholder="Descripción"
                    keyboardType="default"
                    onChangeText={ text => this.setState({ description: text }) }
                    value={this.state.description}
                    multiline={true}
                />

                <TouchableOpacity style={styles.button} onPress={() => this.submitPost()}>
                    <Text style={styles.textButton}>
                        Postear
                    </Text>
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
    input:{
        height:100,
        paddingVertical:15,
        paddingHorizontal: 10,
        borderWidth:1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical:10,
    },
    error:{
        marginBottom: 10,
        color: "#dc3545",
        fontSize: 12
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

export default NewPostForm;
