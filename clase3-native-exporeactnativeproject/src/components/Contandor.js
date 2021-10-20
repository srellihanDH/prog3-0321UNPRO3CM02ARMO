import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
class Contador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  contar() {
    this.setState({
      counter: this.state.counter + 1,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Clicks: {this.state.counter}</Text>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => this.contar()}
        >
          <Text>Click to count</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  touchable: {
    padding: 7,
    backgroundColor: "rgba(0,255,0, 0.5)",
    marginBottom: 10,
    borderRadius: 4,
  },
  touchableText: {
    fontWeight: "bold",
  },
});

export default Contador;
