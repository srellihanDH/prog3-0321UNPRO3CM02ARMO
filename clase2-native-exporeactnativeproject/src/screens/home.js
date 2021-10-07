import React, { Component } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
  ActivityIndicator,
} from "react-native";
import Contador from "../components/Contandor";

const frutas = [
  { id: 1, nombre: "Banana" },
  { id: 2, nombre: "Pera" },
  { id: 3, nombre: "Naranja" },
  { id: 4, nombre: "Frutilla" },
  { id: 5, nombre: "Mandarina" },
  { id: 6, nombre: "Durazno" },
  { id: 7, nombre: "Uva" },
  { id: 8, nombre: "Grosella" },
  { id: 9, nombre: "Frambuesa" },
  { id: 10, nombre: "Mango" },
  { id: 11, nombre: "Kiwi" },
  { id: 12, nombre: "Cerezas" },
  { id: 13, nombre: "Manzana" },
  { id: 14, nombre: "Mora" },
  { id: 15, nombre: "Palta" },
  { id: 16, nombre: "Anana" },
];

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="red" />

        <Text>Hello World</Text>

        <TouchableOpacity
          style={styles.touchable}
          onPress={() => console.log("Click")}
          onLongPress={() => console.log("Long Clicked")}
        >
          <Text style={styles.touchableText}>Click ME</Text>
        </TouchableOpacity>

        <Contador />

        <Image
          style={styles.imagen}
          source={require("../../assets/avatar/cell.jpeg")}
          resizeMode="contain"
        />

        <Image
          style={styles.imagen}
          source={{
            uri: "https://sire-media-foxes.fichub.com/generic/serie-main/473.1024x576.jpg",
          }}
          resizeMode="contain"
        />

        <FlatList
          data={frutas}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <Text>{item.nombre}</Text>}
        />
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
  imagen: {
    height: 250,
  },
});

export default Home;
