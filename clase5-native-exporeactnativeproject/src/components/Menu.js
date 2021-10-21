import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { auth } from "../firebase/config";

// Import de los screens a los que quiero navegar
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Drawer = createDrawerNavigator();

class Menu extends Component {
  constructor() {
    super();
    this.setState = {
      loggedIn: false,
      userData: {}
    };
  }

  register(email, password) {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userData) => console.log(userData))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={() => <Home />} />
        <Drawer.Screen name="Login" component={() => <Login />} />
        <Drawer.Screen name="Register" component={() => <Register register={(email, pass) => this.register(email,pass)} />} />
      </Drawer.Navigator>
    );
  }
}

export default Menu;
