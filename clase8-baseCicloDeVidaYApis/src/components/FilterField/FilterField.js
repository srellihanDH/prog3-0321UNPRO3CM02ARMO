import React, { Component } from "react";

class FilterField extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filterBy: "",
    };
  }

  enviarSubmit(e) {
    e.preventDefault();
  }

  controlCambios(e) {
    this.setState(
      {
        filterBy: e.target.value,
      },
      () => this.props.filtrarPersonajes(this.state.filterBy)
    );
  }
  render() {
    return (
      <form onSubmit={this.enviarSubmit}>
        <label>Filter cards: </label>
        <input
          type="text"
          name="name"
          onChange={(e) => this.controlCambios(e)}
          value={this.state.filterBy}
        />
      </form>
    );
  }
}
export default FilterField;
