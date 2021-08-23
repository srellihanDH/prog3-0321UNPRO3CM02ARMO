import React, { Component } from "react";

class TarjetaFruta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: props.nombre,
      precio: props.precio,
      color: "gris",
    };
  }

  aumentarPrecio() {
    //this.state.precio = 500;
    this.setState({
      precio: this.state.precio + 10,
    });
  }
  changeColor(evt) {
    //console.log(evt.target.value);
    this.setState({
      color: evt.target.value,
    });
  }

  render() {
    return (
      <>
        <p>
          Props: {this.props.nombre} - State: {this.state.nombre}
        </p>
        <button onClick={() => this.aumentarPrecio()}>Cambiar Precio</button>
        <input onChange={(evt) => this.changeColor(evt)} />
        <p>
          Props: {this.props.precio} - State: {this.state.precio}
        </p>
        <p>{this.state.color}</p>
        <hr />
      </>
    );
  }
}

export default TarjetaFruta;
