import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  render() {
    return (
      <View>
        <Text>Clicks: {this.state.counter}</Text>
        <TouchableOpacity>
          <Text>Click to count</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
export default Contador;
