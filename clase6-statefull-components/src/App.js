import React from "react";
import TarjetaFruta from "./components/TarjetaFruta";

function App() {
  return (
    <>
      <TarjetaFruta nombre={"Frutilla"} precio={200} />
      <TarjetaFruta nombre={"Naranja"} precio={100} />
      <TarjetaFruta nombre={"Pera"} precio={150} />
    </>
  );
}

export default App;
