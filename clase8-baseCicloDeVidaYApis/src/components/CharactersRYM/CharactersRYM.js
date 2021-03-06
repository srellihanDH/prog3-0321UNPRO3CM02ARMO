import React, { Component } from "react";
import CardRYM from "../CardRYM/CardRYM";
import FilterField from "../FilterField/FilterField";

class CharactersRYM extends Component {
  constructor() {
    super();
    this.state = {
      originales: [],
      personajes: [],
      nexturl: "",
      cargando: false,
    };
  }

  componentDidMount() {
    console.log("component did mount");
    const url = "https://rickandmortyapi.com/api/character";
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        this.setState({
          cargando: true,
          originales: data.results,
          personajes: data.results,
          nexturl: data.info.next,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate() {
    console.log("component did update");
  }

  componentWillUnmount() {
    console.log("component wil unmount");
  }

  agregarMas() {
    const url = this.state.nexturl;
    fetch(url)
      .then((respuesta) => respuesta.json())
      .then((data) => {
        console.log(data);
        this.setState({
          nexturl: data.info.next,
          personajes: this.state.personajes.concat(data.results),
        });
      })
      .catch((err) => console.log(err));
  }

  reset() {
    this.setState({
      personajes: this.state.originales,
      nexturl: "https://rickandmortyapi.com/api/character?page=2",
    });
  }
  borrarTarjeta(id) {
    console.log(id);
    const resto = this.state.personajes.filter(
      (personaje) => personaje.id != id
    );
    this.setState({
      personajes: resto,
    });
  }

  filtrarPersonajes(textoFiltrar) {
    let personajesFiltrados = this.state.originales.filter((personaje) =>
      personaje.name.toLowerCase().includes(textoFiltrar.toLowerCase())
    );
    //console.log(personajesFiltrados);
    this.setState({
      personajes: personajesFiltrados,
    });
  }

  render() {
    //console.log("renderizado");
    //console.log(this.state.personajes);
    return (
      <>
        <div className="row card-filter">
          <FilterField
            filtrarPersonajes={(param) => this.filtrarPersonajes(param)}
          />
        </div>

        <div className="row card-container">
          {this.state.cargando === false ? (
            <p>Cargando</p>
          ) : (
            this.state.personajes.map((personaje) => (
              <CardRYM
                key={personaje.id}
                datosPersonaje={personaje}
                borrar={(personajeBorrar) =>
                  this.borrarTarjeta(personajeBorrar)
                }
              />
            ))
          )}
        </div>
        <button onClick={() => this.agregarMas()}>Mas Prsonajes</button>
        <button onClick={() => this.reset()}>Reset</button>
      </>
    );
  }
}

export default CharactersRYM;
