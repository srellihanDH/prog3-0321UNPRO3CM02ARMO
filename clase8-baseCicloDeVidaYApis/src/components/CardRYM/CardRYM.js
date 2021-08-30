import React, { Componet } from "react";

import "./CardRYM.css";

function CardRYM(props) {
  console.log(props);
  const { image, name, status, id } = props.datosPersonaje;
  return (
    <div className="character-card">
      <img src={image} />
      <h4>{name}</h4>
      <p>{status}</p>
      <button onClick={() => props.borrar(id)}>Borrar</button>
    </div>
  );
}

export default CardRYM;
