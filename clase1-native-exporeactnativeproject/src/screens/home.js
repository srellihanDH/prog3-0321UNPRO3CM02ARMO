import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Contador from "../components/Contandor";

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => console.log("Click")}
          onLongPress={() => console.log("Long Clicked")}
        >
          <Text style={styles.touchableText}>Click ME</Text>
        </TouchableOpacity>
        <Contador />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    textAlign: "center",
    padding: 10,
  },
  touchable: {
    padding: 5,
    backgroundColor: "#CCC",
    marginBottom: 10,
    borderRadius: 5,
  },
  touchableText: {
    fontWeight: "bold",
  },
});

export default Home;
