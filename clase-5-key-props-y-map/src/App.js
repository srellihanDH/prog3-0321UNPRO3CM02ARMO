import React from "react";
import Productos from "./componets/Productos";
//import ListaFrutas from "./componets/ListaFrutas";

//const frutas = ["sandia", "manzana", "kiwi", "durazno", "mango", "ana"];

const products = [
  {
    id: 1,
    name: "camisa unicornio",
    colors: ["#467367", "#05fd88", "#a706ee"],
    price: 20,
  },
  {
    id: 2,
    name: "jeans",
    colors: ["#D35EFF", "#9956E8", "#876BFF", "#5662E8", "#5E96FF"],
    price: 32,
  },
  {
    id: 3,
    name: "taza",
    colors: ["#804342", "#FFD2D1", "#FF8785", "#806969"],
    price: 20,
  },
  {
    id: 4,
    name: "camisa icream",
    colors: ["#2544B3", "#FF8A69", "#5076FF", "#7FCC2B", "#73B32E"],
    price: 20,
  },
  {
    id: 5,
    name: "camisa dragon",
    colors: ["#B32542", "#FF6987", "#FF4F73", "#14B32E", "#5EFF78"],
    price: 20,
  },
];

const App = () => {
  return (
    /*     <ListaFrutas frutas={frutas} /> */
    <Productos productos={products} />
  );
};

export default App;
