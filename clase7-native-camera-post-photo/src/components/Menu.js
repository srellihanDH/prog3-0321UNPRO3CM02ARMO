import React, { Component } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import { auth } from "../firebase/config";

import Login from '../screens/Login';
import Register from '../screens/Register';
import Home from '../screens/Home';
import NewPostForm from '../screens/NewPostForm'
import Profile from '../screens/Profile';


const Drawer = createDrawerNavigator();

class Menu extends Component {
    constructor(){
        super();
        this.state = {
            loggedIn:false,
            errorMessage:'',
            errorCode:'',
        }
    }

    componentDidMount() {
        auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user !== null) {
                this.setState({
                    loggedIn: true,
                })
            } else {
                this.setState({
                    loggedIn: false,
                })
            }
        })
    }

    register(email, pass){
        auth.createUserWithEmailAndPassword(email, pass)
            .then( () => {
                console.log('========= Registrado ============');
            })
            .catch( error => {
                console.log(error);
                this.setState({
                    errorMessage: error.message,
                    errorCode: error.code
                })
            })
    }

    login(email, pass){
        auth.signInWithEmailAndPassword(email, pass)
            .then( (response)=>{
                console.log('========= Logueado ============');
                console.log(response);
                this.setState({
                    loggedIn: true,
                    userData: response.user,
                })
            })
            .catch( error => {
                console.log(error);
                this.setState({
                    errorMessage:error.message,
                    errorCode: error.code
                })
            })
    }    

    logout() {
        auth.signOut()
            // .then(() => {
            //     this.setState({
            //         loggedIn: false,
            //         userData: ''
            //     })
            // })
            // .catch(err => console.log(err))
    }

    render(){
        return(
             this.state.loggedIn == false ? 
                <NavigationContainer>
                    <Drawer.Navigator>
                        <Drawer.Screen name="Login" component={()=><Login login={(email, pass)=>this.login(email, pass)} errorMessage={this.state.errorMessage} errorCode={this.state.errorCode} />} />
                        <Drawer.Screen name="Register" component={()=><Register register={(email, pass)=>this.register(email, pass)} errorMessage={this.state.errorMessage} errorCode={this.state.errorCode} />} />
                    </Drawer.Navigator>
                </NavigationContainer> :
                <NavigationContainer>
                    <Drawer.Navigator>
                        <Drawer.Screen name="Home" component={()=><Home />} />  
                        <Drawer.Screen name="Nuevo Post" component={() => <NewPostForm />}  />                    
                        <Drawer.Screen name="Mi Perfil" component={()=><Profile logout={() => this.logout()} />} />
                    </Drawer.Navigator>
                </NavigationContainer>
        )
    }

}
        

export default Menu;