import React, { Component } from 'react'
import { Text, StyleSheet, View, Modal, TouchableOpacity } from 'react-native'
import { auth, db } from '../firebase/config'
import firebase from 'firebase'

class Post extends Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0,
            liked: false,
            showModal: false
        }
    }

    componentDidMount() {
        this.recieveLikes();
    }

    recieveLikes() {
        let likes = this.props.postData.data.likes;
        if (likes) {
            this.setState({
                likes: likes.length
            })
        }
        if(likes.includes(auth.currentUser.email)) {    
            this.setState({
                liked: true
            })
        }
    }

    likePost() {
        let post = db.collection("posteos").doc(this.props.postData.id);

        post.update({
            likes: firebase.firestore.FieldValue.arrayUnion(auth.currentUser.email)
        })
        .then(() => {
            this.setState({
                likes: this.state.likes + 1,
                liked: true
            })
            console.log('likeado');
        })
        .catch((error) => {
            console.error("Error updating document: ", error); 
        });
    }

    unlikePost() {
        let post = db.collection("posteos").doc(this.props.postData.id);

        post.update({
            likes: firebase.firestore.FieldValue.arrayRemove(auth.currentUser.email)
        })
        .then(() => {
            this.setState({
                likes: this.state.likes - 1,
                liked: false
            })
            console.log('deslikeado');
        })
        .catch((error) => {
            console.error("Error updating document: ", error);
        });
    }

    openModal() {
        this.setState({
            showModal: true
        })
    }

    closeModal() {
        this.setState({
            showModal: false
        })
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text> {this.props.postData.data.user} </Text>
                <Text> {this.props.postData.data.description} </Text>
                <TouchableOpacity onPress={() => this.openModal()}>
                    <Text>Likes: {this.state.likes}</Text>
                </TouchableOpacity>
                {
                    ! this.state.liked ?
                        <TouchableOpacity style={styles.button} onPress={() => this.likePost()}>
                            <Text style={styles.textButton}>Likear</Text>
                        </TouchableOpacity>
                    :
                        <TouchableOpacity style={styles.button} onPress={() => this.unlikePost()}>
                            <Text style={styles.textButton}>Deslikear</Text>
                        </TouchableOpacity>
                }

                {/* MODAL  */}
                {/* EL condicional lo hacemos solo porque en web no funciona como en una app nativa. La prop visible, por más que esté en falsa, en web nos sigue mostrando el modal. En una app ya compilada, no haría falta y la prop visible funciona perfecto.  */}
                {
                    ! this.state.showModal ? 
                        null
                    :
                        <Modal 
                            style={styles.modalContainer}
                            visible={this.state.showModal}
                            animationType="slide"
                            transparent={false}
                        >
                            {/* Pueden hacer un componente aparte para el modal. En el caso de los comentarios, si hacen un componente CommentsModal, le querrían pasar mediante props el array de comentarios.  */}
                            <TouchableOpacity onPress={() => this.closeModal()} style={styles.closeModal}>
                                <Text>X</Text>
                            </TouchableOpacity>
                            <Text style={styles.modalText}>Soy un modal</Text>
                        </Modal>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 15,
        shadowColor: "#ccc",
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        borderRadius: 5,
    },
    button: {
        backgroundColor: "#28a745",
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: "center",
        borderRadius: 4,
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "#28a745",
    },
    textButton: {
        color: "#fff",
    },
    modalContainer: {
        width:'100%',  
        flex: 3,
        alignSelf: 'center',
        backgroundColor: "white",
        borderColor: '#000000',
        borderRadius: 6,
        padding: 10,
        backgroundColor: '#000000'
    },
    closeModal:{
        alignSelf: 'flex-end',
        padding: 10,
        backgroundColor: '#dc3545',
        marginTop:2,
        borderRadius: 4,
    },
    modalText:{
        fontWeight: 'bold',
        color: '#ffffff'
    },
});

export default Post