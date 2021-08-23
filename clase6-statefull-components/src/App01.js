import React, { Component } from "react";

//let color = "#FFF";

class App extends Component {
  saludar(obj) {
    const { nombre, edad } = obj;
    alert(`Bienvenido al sitio ${nombre} con edad ${edad} años `);
  }

  imprimir() {
    console.log("Hola a todos");
  }

  cambiarColor(color) {
    console.log(color);
  }
  render() {
    return (
      <>
        <button onClick={() => this.saludar({ nombre: "sebi", edad: 21 })}>
          Click
        </button>
        <button onClick={this.imprimir}>Imprimir</button>
        <button onClick={() => this.cambiarColor("#CCC")}>Cambiar Color</button>
      </>
    );
  }
}

export default App;
