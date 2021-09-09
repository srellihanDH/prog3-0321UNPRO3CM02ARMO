import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
    };
  }

  enviarSubmit(e) {
    e.preventDefault();
  }

  controlCambios(e) {
    //console.log(e.target.value);
    this.setState(
      {
        value: e.target.value,
      },
      () => console.warn(this.state.value)
    );
  }

  render() {
    return (
      <form onSubmit={(e) => this.enviarSubmit(e)}>
        <label></label>
        <input
          type="text"
          name="name"
          onChange={(e) => this.controlCambios(e)}
          value={this.state.value}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default Formulario;
