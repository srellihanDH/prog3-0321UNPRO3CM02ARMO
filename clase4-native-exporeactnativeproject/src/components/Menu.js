import React, { Component } from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

// Import de los screens a los que quiero navegar
import Home from "../screens/Home";
import Login from "../screens/Login";
import Register from "../screens/Register";

const Drawer = createDrawerNavigator();

class Menu extends Component {
  constructor() {
    super();
    this.setState = {};
  }

  render() {
    return (
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={() => <Home />} />
        <Drawer.Screen name="Login" component={() => <Login />} />
        <Drawer.Screen name="Register" component={() => <Register />} />
      </Drawer.Navigator>
    );
  }
}

export default Menu;
