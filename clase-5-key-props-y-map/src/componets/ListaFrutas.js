import React from "react";

const ListaFrutas = ({ frutas }) => {
  console.log(frutas);
  //const { frutas } = props;
  return (
    <ul>
      {frutas.map((fruta, index) => (
        <li key={index}>{fruta}</li>
      ))}
    </ul>
  );
};

export default ListaFrutas;
